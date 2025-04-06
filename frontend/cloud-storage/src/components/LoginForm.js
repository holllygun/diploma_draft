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
        <div className='register-container'>
            <h2 className='register-title'>Вход</h2>
            <form onSubmit={handleSubmit}>
                <div className='register-form'>
                    <div>
                        <label className='form-label'>Логин:</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className='form-label'>Пароль:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    {errorMessage && (<p style={{ color:'red' }}>{errorMessage}</p>)}
                    <button type="submit" className='register-button'>Войти</button>
                </div>
            </form>
        </div>
    )
}
