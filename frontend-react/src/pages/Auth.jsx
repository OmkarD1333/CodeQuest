import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../api';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [message, setMessage] = useState({ text: '', type: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage({ text: isLogin ? 'Logging in...' : 'Registering...', type: '' });

        try {
            if (isLogin) {
                const response = await authApi.login({ email: formData.email, password: formData.password });
                setMessage({ text: response.data.message, type: 'success' });
                localStorage.setItem('codeQuestUser', JSON.stringify(response.data.user));
                setTimeout(() => navigate('/home'), 500);
            } else {
                const response = await authApi.register(formData);
                setMessage({ text: 'Registration successful! Please login.', type: 'success' });
                setFormData({ username: '', email: '', password: '' });
                setTimeout(() => setIsLogin(true), 1500);
            }
        } catch (error) {
            const errorMsg = error.response?.data?.error || 'Action failed';
            setMessage({ text: `Error: ${errorMsg}`, type: 'error' });
        }
    };

    return (
        <div className="container login-container">
            <div className="form-container">
                {isLogin ? (
                    <div className="form-box" id="loginBox">
                        <h1>CodeQuest 🚀</h1>
                        <p>Login to continue your adventure.</p>
                        <form id="loginForm" onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label htmlFor="login-email">Email</label>
                                <input
                                    type="email"
                                    id="login-email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="login-password">Password</label>
                                <input
                                    type="password"
                                    id="login-password"
                                    name="password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="btn">Login & Start Quest</button>
                            <p className="form-switch">
                                Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(false); setMessage({ text: '', type: '' }); }}>Register here</a>
                            </p>
                        </form>
                    </div>
                ) : (
                    <div className="form-box" id="registerBox">
                        <h1>Create Your Account</h1>
                        <p>Your epic journey into code begins here.</p>
                        <form id="registerForm" onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label htmlFor="reg-username">Username</label>
                                <input
                                    type="text"
                                    id="reg-username"
                                    name="username"
                                    required
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="reg-email">Email</label>
                                <input
                                    type="email"
                                    id="reg-email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="reg-password">Password</label>
                                <input
                                    type="password"
                                    id="reg-password"
                                    name="password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="btn">Register</button>
                            <p className="form-switch">
                                Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(true); setMessage({ text: '', type: '' }); }}>Login here</a>
                            </p>
                        </form>
                    </div>
                )}
                <p id="message" className="message" style={{ color: message.type === 'success' ? '#4caf50' : message.type === 'error' ? '#f44336' : 'inherit' }}>
                    {message.text}
                </p>
            </div>
        </div>
    );
};

export default Auth;
