import React, { useState } from 'react'
import style from './Login.module.css'
import "./SignInCard.css";
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [flag, setFlag] = useState(0);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        // add login logic here
    };
    const navigate=useNavigate();

    return (
        <>
            <div className={style.backContainer}>
                <button className={style.backBtn} onClick={() => navigate('/')}>
                    ← Back
                </button>
            </div>
            <div className={style.heading}>
                <h1>Login as</h1>
            </div>
            <div className={style.btnContainer}>
                <button
                    className={`${style.btn} ${flag === 0 ? style.active : ""}`}
                    onClick={() => setFlag(0)}
                >
                    Client
                </button>
                <button
                    className={`${style.btn} ${flag === 1 ? style.active : ""}`}
                    onClick={() => setFlag(1)}
                >
                    Arbitrator
                </button>
            </div>
            {/* Conditional Rendering --------------------------------------------------------- */}
            {
                flag == 0
                    ? (
                        <div className="card-container">
                            <form className="sign-in-card" onSubmit={handleSubmit}>
                                <h2>Sign In Client</h2>
                                <label>Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />

                                <button type="submit">Sign In</button>
                            </form>
                        </div>)
                    :
                    (<div className="card-container">
                        <form className="sign-in-card" onSubmit={handleSubmit}>
                            <h2>Sign In Arbitrator</h2>
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <button type="submit">Sign In</button>
                        </form>
                    </div>)
            }
        </>
    )

}
export default Login
