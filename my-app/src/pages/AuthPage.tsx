import React, {useState} from 'react';
import {AuthModel} from "../models/AuthModel";
import AuthService from "../api/AuthService";
import s from "../styles/authPage.module.css"
import Header from "../components/Header";
import UserService from "../api/UserService";

const AuthPage = (props: any) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegisterClick = () => {
        props.history.push('/register')
    };

    const handleAuthClick =  async (e:any) => {

        e.preventDefault();

        const loginViewModel: AuthModel = new AuthModel(login, password);
        const response = await AuthService.Login(loginViewModel);

       if (response == null)
        {
            setErrorMessage("Пользователь не найден")
        }
       else if (localStorage.getItem("userRole") == "user")
        {
            props.history.push('/home')
        }
       else if (localStorage.getItem("userRole") == "admin")
       {
           props.history.push('/users')
       }
        else setErrorMessage("Пользователь не найден")

    }
    return (
        <div className={s.page} >
                <div className={s.header}>
                    <p className={s.title} onClick={()=>{props.history.push('/home')}}>SPORTCENTER</p>
                    <p className={s.title} onClick={()=>{props.history.push('/home')}}>НА ГЛАВНУЮ</p>
                </div>
                <form className={s.authForm} >
                    <label className={s.label}>
                        Логин:
                        <input className={s.input} type="text" value={login} onChange={(e) => setLogin(e.target.value)} style={{width:'160px'}}/>
                    </label>
                    <label className={s.label}>
                        Пароль:
                        <input className={s.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{width:'160px'}}/>
                    </label>
                    <p  style={{color:"white", zIndex:'1', position:"absolute"}}>{errorMessage}</p>
                    <div className={s.button_block}>
                        <button onClick={handleRegisterClick} className={s.button} >
                            Регистрация
                        </button>
                        <button onClick={handleAuthClick} className={s.button}>
                            Войти
                        </button>
                    </div>
                </form>
        </div>

    );
};

export default AuthPage;