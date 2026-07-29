import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const PracticeSelection = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('codeQuestUser'));

    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    }, [user, navigate]);

    const handleLogout = () => {
        localStorage.removeItem('codeQuestUser');
        navigate('/');
    };

    if (!user) return null;

    const languages = [
        { id: 'python', name: 'Python', icon: '🐍' },
        { id: 'c', name: 'C', icon: '⚙️' },
        { id: 'java', name: 'Java', icon: '☕' },
        { id: 'rust', name: 'Rust', icon: '🦀' },
    ];

    return (
        <>
            <div className="page-header">
                <Link to="/home" className="btn btn-back">← Back to Home</Link>
                <div className="top-nav-buttons">
                    <button onClick={handleLogout} className="btn btn-logout">Logout</button>
                </div>
            </div>

            <div className="container home-container">
                <h1>Practice Arena</h1>
                <p>Select a language to start coding.</p>

                <div className="path-selection">
                    <div className="lang-category">
                        <h3>Languages</h3>
                        <div className="lang-category-cards">
                            {languages.map(lang => (
                                <div
                                    className="lang-card"
                                    key={lang.id}
                                    onClick={() => navigate(`/practice/${lang.id}`)}
                                >
                                    <h2>{lang.name} {lang.icon}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PracticeSelection;
