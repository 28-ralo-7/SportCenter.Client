import React from 'react';
import s from "../styles/header.module.css"
import {NavLink, useHistory} from "react-router-dom";

const Header = (props:any) => {
    const Logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        window.location.reload();
    }

    return (
        <div className={s.header}>
            <img className={s.logo} src={require("../image/logo.png")} alt="logo_image"/>
            <NavLink to={'/home'} className={s.title}>SPORTCENTER</NavLink>
            {localStorage.getItem('userRole')=='admin'
                ?
                <div className={s.header_nav}>
                    <NavLink to={'/users'} className={s.title}>ПОЛЬЗОВАТЕЛИ</NavLink>
                    <NavLink to={'/session'} className={s.title}>СЕАНСЫ</NavLink>
                    <NavLink to={'/booking'} className={s.title}>БРОНИРОВАНИЕ</NavLink>
                    <button onClick={Logout} style={{width:"200px", fontSize:'30px', fontWeight:'bold', color:'white', background:'transparent'}}>ВЫЙТИ</button>
                </div>

                :
                <div className={s.header_nav}>

                    <NavLink to={'/about'} className={s.title}>О НАС</NavLink>
                    <NavLink to={'/contact'} className={s.title}>КОНТАКТЫ</NavLink>
                    {localStorage.getItem('userRole')!="user" && localStorage.getItem('userRole')!="admin"
                        ? <NavLink to={'/auth'} className={s.title}>ВОЙТИ</NavLink>
                        : <button onClick={Logout} style={{width:"200px", fontSize:'30px', fontWeight:'bold', color:'white', background:'transparent'}}>ВЫЙТИ</button>
                    }


                </div>
            }
        </div>
    );
};

export default Header;