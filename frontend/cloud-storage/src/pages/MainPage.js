import React from 'react';
import '../styles/MainPage.css'

export const MainPage = () => {
    return (
        <div className='container'>
            <h1>Облачное хранилище</h1>
            <div className='second_container'>
                <div className='header_text'>
                    <p>Привет! Это - твое облачное хранилище. Здесь ты можешь хранить, загружать и отправлять свои файлы!	Мы думаем о светлом будущем сегодня. Мы — корпорация монстров! Мы пугаем — вас оберегаем.
                    <br />
                    Я слежу за вами, Вазовски! Постоянно и очень внимательно!
                    </p>
                    <div className='main_form'>
                        <a className='register-button' href='/register'>Зарегистрироваться</a>
                        <a className='register-button' href='/login'>Войти</a>
                    </div>
                </div>
                <img className='main_image' src='http://multiki-kartinki.narod.ru/images/Korporaciya_monstrov38_small.jpg'/>
            </div>
        </div>
    )
}
