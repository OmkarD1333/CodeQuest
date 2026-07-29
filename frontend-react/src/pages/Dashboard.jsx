import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api';

const Dashboard = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('codeQuestUser'));
    const [progressData, setProgressData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            navigate('/');
            return;
        }

        const fetchProgress = async () => {
            try {
                const response = await api.get(`/progress?email=${user.email}`);
                setProgressData(response.data);
            } catch (error) {
                console.error('Error fetching progress:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProgress();
    }, [user, navigate]);

    const handleLogout = () => {
        localStorage.removeItem('codeQuestUser');
        navigate('/');
    };

    if (!user) return null;

    const allLangs = ['python', 'c', 'java', 'rust', 'mysql'];

    return (
        <>
            <div className="page-header">
                <Link to="/home" className="btn btn-back">← Back to Home</Link>
                <div className="top-nav-buttons">
                    <button onClick={handleLogout} className="btn btn-logout">Logout</button>
                </div>
            </div>

            <div className="container dashboard-container">
                <div className="profile-header">
                    <div className="avatar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div>
                        <h1>Welcome, {user.username}!</h1>
                        <p className="dashboard-subtitle">{user.email}</p>
                    </div>
                </div>

                <div className="progress-section">
                    <h2>Course Progress</h2>
                    <div id="progress-cards-container">
                        {loading ? (
                            <p>Loading progress...</p>
                        ) : (
                            allLangs.map(lang => {
                                const progress = progressData[lang];
                                let formattedLang = lang.charAt(0).toUpperCase() + lang.slice(1);
                                if (lang === 'mysql') formattedLang = 'MySQL';

                                const currentLevel = progress?.current_level || 1;
                                const badges = progress?.badges || [];
                                const totalLevels = 20;
                                const completedLevels = currentLevel - 1;
                                const progressPercentage = (completedLevels / totalLevels) * 100;

                                return (
                                    <div className="progress-card" key={lang}>
                                        <div className="progress-card-header">
                                            <h3>{formattedLang}</h3>
                                            <span>{completedLevels} / {totalLevels} Levels Complete</span>
                                        </div>
                                        <div className="progress-bar-container">
                                            <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
                                        </div>
                                        <h4>Badges Earned:</h4>
                                        <div className="badge-list">
                                            {badges.length > 0 ? (
                                                <ul>
                                                    {badges.map((badge, bIdx) => (
                                                        <li key={bIdx}><span className="badge-icon">🏆</span> {badge.badge_name}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="no-badges">No badges earned yet.</p>
                                            )}
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
