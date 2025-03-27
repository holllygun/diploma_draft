import React, { useState } from 'react';
import axios from 'axios';

export const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        fullName: '',
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{3,19}$/;//только латинские буквы и цифры, первый символ — буква, длина от 4 до 20 символов;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /(?=.*[A-Z])(?=.*\d)(?=.*[@$!_%*?&)(])[A-Za-z\d@$_!%*?&)(]{6,}$/; //не менее 6 символов: как минимум одна заглавная буква, одна цифра и один специальный символ.
        if(!usernameRegex.test(formData.username)) {
            newErrors.username = 'Логин должен содержать только латинские буквы и цифры, начинаться с буквы и быть длиной от 4 до 20 символов.';
        }
        if(!emailRegex.test(formData.email)) {
            newErrors.email = 'Некорректный формат электронной почты.';
        }
        if(!passwordRegex.test(formData.password)) {
            newErrors.password = 'Пароль должен содержать не менее 6 символов, одну заглавную букву, одну цифру и один специальный символ.';
        }

        return newErrors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            try {
                const response = await axios.post('/api/register', formData);
                console.log('Регистрация:', response.data);
                setErrors({}); 
            }  catch (error) {
                console.error('Ошибка регистрации:', error.response.data);
                setErrors(error.response.data);
            }
        }
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };


    return (
    <div>
        <h2>Регистрация</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Логин:</label>
                <input
                    type="text"
                    name="username"
                    value={FormData.username}
                    onChange={handleChange}
                />
                {errors.username && <p style={{ color: 'red'}}> {errors.username}</p>}
            </div>
            <div>
                <label>Полное имя: </label>
                <input
                type="text"
                name="fullName"
                value={FormData.fullName}
                onChange={handleChange}
                />
            </div>
            <div>
                <label>E-mail:</label>
                <input
                type="email"
                name="email"
                value={FormData.email}
                onChange={handleChange}
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            <div>
                <label>Пароль:</label>
                <input
                    type='password'
                    name='password'
                    value={FormData.password}
                    onChange={handleChange}
                />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>
            <button type="submit">Зарегистрироваться</button>
        </form>
    </div>
    )
}
