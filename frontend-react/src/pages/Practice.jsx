import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';
import { cpp } from '@codemirror/lang-cpp';
import { rust } from '@codemirror/lang-rust';
import api from '../api';

const Practice = () => {
    const { lang } = useParams();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('codeQuestUser'));
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
    const [outputColor, setOutputColor] = useState('var(--text-muted)');

    useEffect(() => {
        if (!user) {
            navigate('/');
            return;
        }

        const starterCodes = {
            python: '# Start practicing Python!\nprint("Hello from Practice Arena!")',
            c: '#include <stdio.h>\n\nint main() {\n    printf("Hello from Practice Arena!\\n");\n    return 0;\n}',
            java: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello from Practice Arena!");\n    }\n}',
            rust: 'fn main() {\n    println!("Hello from Practice Arena!");\n}',
        };

        setCode(starterCodes[lang] || '');
    }, [user, navigate, lang]);

    const handleLogout = () => {
        localStorage.removeItem('codeQuestUser');
        navigate('/');
    };

    const onChange = useCallback((value) => {
        setCode(value);
    }, []);

    const runCode = async () => {
        setOutput('⏳ Running code...');
        setOutputColor('var(--text-muted)');

        try {
            let languageId;
            if (lang === 'java') languageId = 62;
            else if (lang === 'c') languageId = 50;
            else if (lang === 'python') languageId = 71;
            else if (lang === 'rust') languageId = 73;

            const response = await api.post('/execute', {
                language_id: languageId,
                source_code: code
            });

            const result = response.data;
            if (result.compile_output) {
                setOutput(result.compile_output);
                setOutputColor('var(--error-color)');
            } else if (result.stderr) {
                setOutput(result.stderr);
                setOutputColor('var(--error-color)');
            } else {
                setOutput(result.stdout || "No output.");
                setOutputColor('var(--text-color)');
            }
        } catch (error) {
            setOutput(`⚠️ Error: ${error.response?.data?.error || error.message}`);
            setOutputColor('var(--error-color)');
        }
    };

    const getExtensions = () => {
        if (lang === 'python') return [python()];
        if (lang === 'java') return [java()];
        if (lang === 'c') return [cpp()];
        if (lang === 'rust') return [rust()];
        return [];
    };

    return (
        <>
            <div className="page-header">
                <Link to="/practice-selection" className="btn btn-back">← Back to Selection</Link>
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
                    <h1>Practice: {lang?.toUpperCase()}</h1>
                    <p>Use this arena to experiment with code and test your skills.</p>
                </div>
            </div>
        </>
    );
};

export default Practice;
