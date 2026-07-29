import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';
import { cpp } from '@codemirror/lang-cpp';
import { rust } from '@codemirror/lang-rust';
import { sql } from '@codemirror/lang-sql';
import { oneDark } from '@uiw/react-node-view';
import api from '../api';
import { MASTER_CONTENT } from '../data/lessons';

const Learning = () => {
    const { lang, level: levelStr } = useParams();
    const level = parseInt(levelStr);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('codeQuestUser'));
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
    const [outputColor, setOutputColor] = useState('var(--text-muted)');
    const [isComplete, setIsComplete] = useState(false);
    const [saving, setSaving] = useState(false);

    const lesson = MASTER_CONTENT[lang]?.[level];
    const nextLesson = MASTER_CONTENT[lang]?.[level + 1];

    useEffect(() => {
        if (!user) {
            navigate('/');
            return;
        }
        if (lesson) {
            setCode(lesson.starterCode);
        }
    }, [user, navigate, lesson]);

    const handleLogout = () => {
        localStorage.removeItem('codeQuestUser');
        navigate('/');
    };

    const onChange = useCallback((value) => {
        setCode(value);
    }, []);

    const areResultsEqual = (actualStr, expectedStr) => {
        try {
            const actualData = JSON.parse(actualStr);
            const expectedData = JSON.parse(expectedStr);

            if (!Array.isArray(actualData) || !Array.isArray(expectedData)) {
                return actualStr === expectedStr;
            }
            if (actualData.length !== expectedData.length) return false;
            if (actualData.length === 0 && expectedData.length === 0) return true;

            const normalizeObject = (obj) => {
                if (obj === null || typeof obj !== 'object') return obj;
                return JSON.stringify(
                    Object.keys(obj).sort().reduce((acc, key) => { acc[key] = obj[key]; return acc; }, {})
                );
            };
            const getCanonicalString = (arr) => arr.map(normalizeObject).sort().join('');
            return getCanonicalString(actualData) === getCanonicalString(expectedData);
        } catch (error) {
            return actualStr.trim() === expectedStr.trim();
        }
    };

    const runCode = async () => {
        setOutput('⏳ Running code...');
        setOutputColor('var(--text-muted)');

        try {
            if (lang === 'mysql') {
                const response = await api.post('/execute-sql', { source_code: code });
                const actualOutput = JSON.stringify(response.data.data);
                setOutput(JSON.stringify(response.data.data, null, 2));
                setOutputColor('var(--text-color)');

                if (areResultsEqual(actualOutput, lesson.expected_output)) {
                    setOutput(prev => prev + "\n\n✅ Success! Task complete. You can now proceed.");
                    setOutputColor('var(--completed-color)');
                    setIsComplete(true);
                } else {
                    setOutput(prev => prev + `\n\n❌ Almost! The query ran, but the result is not what was expected.`);
                    setOutputColor('var(--error-color)');
                }
            } else {
                let languageId;
                if (lang === 'java') languageId = 62;
                else if (lang === 'c') languageId = 50;
                else if (lang === 'python') languageId = 71;
                else if (lang === 'rust') languageId = 73;

                const response = await api.post('/execute', {
                    language_id: languageId,
                    source_code: code,
                    expected_output: lesson.expected_output
                });

                const result = response.data;
                const actualOutput = (result.stdout || "").trim();
                const expectedOutput = (lesson.expected_output || "").trim();

                if (result.compile_output) {
                    setOutput(result.compile_output);
                    setOutputColor('var(--error-color)');
                } else if (result.stderr) {
                    setOutput(result.stderr);
                    setOutputColor('var(--error-color)');
                } else {
                    setOutput(result.stdout || "No output.");
                    setOutputColor('var(--text-color)');

                    if (actualOutput === expectedOutput) {
                        setOutput(prev => prev + "\n\n✅ Success! Task complete. You can now proceed.");
                        setOutputColor('var(--completed-color)');
                        setIsComplete(true);
                    } else {
                        setOutput(prev => prev + `\n\n❌ Almost! Keep trying. Expected output was:\n"${expectedOutput}"`);
                        setOutputColor('var(--error-color)');
                    }
                }
            }
        } catch (error) {
            setOutput(`⚠️ Error: ${error.response?.data?.error || error.message}`);
            setOutputColor('var(--error-color)');
        }
    };

    const handleNext = async () => {
        if (!isComplete && nextLesson) return;

        setSaving(true);
        try {
            await api.post('/complete_level', { email: user.email, lang: lang });
            if (nextLesson) {
                navigate(`/learning/${lang}/${level + 1}`);
                setIsComplete(false);
                setOutput('');
            } else {
                navigate(`/roadmap/${lang}`);
            }
        } catch (error) {
            console.error('Error completing level:', error);
            alert('Failed to save progress. Please try again.');
        } finally {
            setSaving(false);
        }
    };

    if (!lesson) return <div className="container"><h1>Lesson not found!</h1></div>;

    const getExtensions = () => {
        if (lang === 'python') return [python()];
        if (lang === 'java') return [java()];
        if (lang === 'c') return [cpp()];
        if (lang === 'rust') return [rust()];
        if (lang === 'mysql') return [sql()];
        return [];
    };

    return (
        <>
            <div className="page-header">
                <Link to={`/roadmap/${lang}`} className="btn btn-back">← Back to Roadmap</Link>
                <div className="top-nav-buttons">
                    <button onClick={handleLogout} className="btn btn-logout">Logout</button>
                </div>
            </div>

            <div className="learning-grid">
                <div className="left-panel">
                    <div className="editor-container">
                        <CodeMirror
                            value={code}
                            height="100%"
                            theme="dark"
                            extensions={getExtensions()}
                            onChange={onChange}
                            className="CodeMirror"
                        />
                    </div>
                    <div className="controls">
                        <button onClick={runCode} className="btn">Run Code</button>
                    </div>
                    <div className="output-container">
                        <h3>Output:</h3>
                        <pre id="output-box" style={{ color: outputColor }}>{output}</pre>
                    </div>
                </div>

                <div className="right-panel">
                    <h1>{lesson.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
                    <div className="navigation-buttons">
                        <button
                            onClick={handleNext}
                            className={`btn ${!isComplete && nextLesson ? 'disabled' : ''}`}
                            disabled={saving}
                        >
                            {saving ? 'Saving...' : !nextLesson ? 'Course Complete!' : isComplete ? 'Continue to Next Level →' : 'Complete Task to Proceed'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Learning;
