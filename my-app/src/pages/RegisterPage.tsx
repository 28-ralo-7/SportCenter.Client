import React, {useState} from 'react';
import s from "../styles/userModal.module.css";
import {Redirect} from "react-router-dom";
import AuthService from "../api/AuthService";
import {UserView} from "../models/UserView";

const RegisterPage = (props: any) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegisterClick = async (e: any) => {

        e.preventDefault()

        const response = await AuthService.Register({
            Username: username,
            Password:password,
            Email:email,
            Phone:phone,
            Name:name,
            Role:'user'
            });
        if (response.data) {
            setErrorMessage("")
            props.history.push('/auth')
        }
        else {
            setErrorMessage("Пользователь не зарегистрирован")
        }
    }

    const handleCancelClick = () => {
        props.history.push('/auth')
    }

    return (
        <div className={s.modal}>
            <h2 className={s.modalTitle}>Регистрация</h2>
            <form className={s.addUserForm}>
                <label className={s.label}>
                    Логин:
                    <input className={s.input} type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label className={s.label}>
                    Пароль:
                    <input className={s.input} type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label className={s.label}>
                    Email:
                    <input className={s.input} type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label className={s.label}>
                    Телефон:
                    <input className={s.input} type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label>
                <label className={s.label}>
                    Имя:
                    <input className={s.input} type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <div>
                    <button onClick={handleCancelClick} className={s.button}>
                        Отмена
                    </button>
                    <button onClick={handleRegisterClick} className={s.button}>
                        Зарегистрироваться
                    </button>
                </div>
            </form>
            <p content={errorMessage}/>
        </div>
    );
};

export default RegisterPage;