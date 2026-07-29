import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import api from '../api';
import { MASTER_CONTENT } from '../data/lessons';

const Roadmap = () => {
    const { lang } = useParams();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('codeQuestUser'));
    const [userLevel, setUserLevel] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            navigate('/');
            return;
        }

        const fetchProgress = async () => {
            try {
                const response = await api.get(`/progress?email=${user.email}`);
                if (response.data[lang]) {
                    setUserLevel(response.data[lang].current_level || 1);
                }
            } catch (error) {
                console.error("Error fetching user progress:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProgress();
    }, [user, navigate, lang]);

    const handleLogout = () => {
        localStorage.removeItem('codeQuestUser');
        navigate('/');
    };

    if (!lang || !MASTER_CONTENT[lang]) {
        return (
            <div className="container">
                <h1>Invalid or no language selected!</h1>
                <Link to="/home" className="btn">Back to Home</Link>
            </div>
        );
    }

    let formattedLanguage = lang.charAt(0).toUpperCase() + lang.slice(1);
    if (lang === 'mysql') formattedLanguage = 'MySQL';

    const levels = Object.entries(MASTER_CONTENT[lang]).map(([num, data]) => ({
        number: parseInt(num),
        ...data
    })).sort((a, b) => a.number - b.number);

    return (
        <>
            <div className="page-header">
                <Link to="/home" className="btn btn-back">← Back to Languages</Link>
                <div className="top-nav-buttons">
                    <button onClick={handleLogout} className="btn btn-logout">Logout</button>
                </div>
            </div>

            <div className="container">
                <h1>Your {formattedLanguage} Roadmap</h1>
                {loading ? (
                    <p>Loading roadmap...</p>
                ) : (
                    <div id="roadmap-container" className="roadmap-container">
                        {levels.map((level) => {
                            const levelNumber = level.number;
                            let nodeClass = 'locked';
                            let isClickable = false;

                            if (levelNumber < userLevel) {
                                nodeClass = 'completed';
                                isClickable = true;
                            } else if (levelNumber === userLevel) {
                                nodeClass = 'active';
                                isClickable = true;
                            }

                            return (
                                <div className="level-item" key={levelNumber}>
                                    <Link
                                        to={isClickable ? `/learning/${lang}/${levelNumber}` : '#'}
                                        className={`level-node ${nodeClass}`}
                                        onClick={(e) => !isClickable && e.preventDefault()}
                                    >
                                        {levelNumber}
                                    </Link>
                                    <div className="level-content">
                                        <h3>{level.title}</h3>
                                        {level.badge && <span className="badge">{level.badge}</span>}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
};

export default Roadmap;
