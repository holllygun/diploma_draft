import React, { useState } from 'react'

export const LoginForm = () => {
    const [formData, setformData] = useState({
        username:'',
        password:'',
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formData.username === '' || formData.password === '') {
            setErrorMessage('Введите логин и пароль.');
            return;
        }

        console.log('Вход выполнен', formData);

        setErrorMessage('');
    };

    const handleChange = (event) => {
        setformData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div>
            <h2>Вход</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Логин:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Пароль:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                {errorMessage && (<p style={{ color:'red' }}>{errorMessage}</p>)}
                <button type="submit">Войти</button>
            </form>
        </div>
    )
}
