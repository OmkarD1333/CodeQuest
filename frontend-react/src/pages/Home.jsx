import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
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
        {
            category: 'System Level Languages',
            items: [
                { id: 'c', name: 'C', icon: '⚙️', desc: 'Understand programming fundamentals.' },
                { id: 'rust', name: 'Rust', icon: '🦀', desc: 'Write safe, concurrent, and practical systems.' },
            ]
        },
        {
            category: 'Application Level Languages',
            items: [
                { id: 'python', name: 'Python', icon: '🐍', desc: 'Master data science and web development.' },
                { id: 'java', name: 'Java', icon: '☕', desc: 'Build powerful, platform-independent apps.' },
            ]
        },
        {
            category: 'Database',
            items: [
                { id: 'mysql', name: 'MySQL', icon: '🐬', desc: 'Query and manage relational databases.' },
            ]
        }
    ];

    return (
        <>
            <div className="page-header">
                <div></div>
                <div className="top-nav-buttons">
                    <Link to="/dashboard" className="btn btn-dashboard">Dashboard</Link>
                    <button onClick={handleLogout} className="btn btn-logout">Logout</button>
                </div>
            </div>

            <div className="container home-container">
                <h1>Choose Your Path</h1>

                <div className="practice-container">
                    <Link to="/practice-selection" className="btn btn-practice">Enter the Practice Arena 💻</Link>
                </div>

                <div className="or-separator">
                    <span className="or-text">OR</span>
                </div>

                <p>Select a language to begin your adventure.</p>

                <div className="path-selection">
                    {languages.map((cat, idx) => (
                        <div className="lang-category" key={idx}>
                            <h3>{cat.category}</h3>
                            <div className="lang-category-cards">
                                {cat.items.map(lang => (
                                    <div
                                        className="lang-card"
                                        key={lang.id}
                                        onClick={() => navigate(`/roadmap/${lang.id}`)}
                                    >
                                        <h2>{lang.name} {lang.icon}</h2>
                                        <p>{lang.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
