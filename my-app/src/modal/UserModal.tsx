import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import s from '../styles/userModal.module.css'
import UserService from "../api/UserService";

// @ts-ignore
const AddUserModal = ({ isOpen, closeModal, selectedUser, title }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const isEmptyOrSpaces = (str: string) => {
        return str === null || str.match(/^ *$/) !== null;
    }

    useEffect(() => {
        setUsername(selectedUser.username);
        setPassword(selectedUser.password);
        setEmail(selectedUser.email);
        setPhone(selectedUser.phone);
        setName(selectedUser.name);
        setRole(selectedUser.role);

    }, [selectedUser]);

    const handleSaveClick = async (e: any) => {
        e.preventDefault();
        if (selectedUser.email!='') {
            if (!isEmptyOrSpaces(username)
                && !isEmptyOrSpaces(password)
                && !isEmptyOrSpaces(email)
                && !isEmptyOrSpaces(phone)
                && !isEmptyOrSpaces(name)
                && !isEmptyOrSpaces(role)
            )
            {
                await UserService.Update(selectedUser.email, {
                    Username: username,
                    Password:password,
                    Email:email,
                    Phone:phone,
                    Name:name,
                    Role:role
                });
                setErrorMessage('');
                closeModal();
            }
            else { setErrorMessage('Заполните все поля!')}
        }
        else {
            if (!isEmptyOrSpaces(username)
                && !isEmptyOrSpaces(password)
                && !isEmptyOrSpaces(email)
                && !isEmptyOrSpaces(phone)
                && !isEmptyOrSpaces(name)
                && !isEmptyOrSpaces(role)
            )
            {
                await UserService.Create({
                    Username: username,
                    Password:password,
                    Email:email,
                    Phone:phone,
                    Name:name,
                    Role:role
                });
                setErrorMessage('');
                closeModal();
            }
            else { setErrorMessage('Заполните все поля!')}
        }
    };

    return (

        <Modal className={s.modal} isOpen={isOpen}>

                <h2 className={s.title}>{title}</h2>
                <form className={s.addUserForm}>
                    <label className={s.label}>
                        Имя:
                        <input className={s.input} type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label className={s.label}>
                        Логин:
                        <input className={s.input} type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <label className={s.label}>
                        Пароль:
                        <input className={s.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <label className={s.label}>
                        Email:
                        <input className={s.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label className={s.label}>
                        Телефон:
                        <input className={s.input} type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </label>
                    <label className={s.label} >
                        Роль:
                        <input className={s.input} defaultChecked name="role" value="user" type="radio" onChange={(e) => setRole(e.target.value)}></input>
                        <label>user</label>
                        <input className={s.input} name="role" value="admin" type="radio" onChange={(e) => setRole(e.target.value)}></input>
                        <label>admin</label>
                    </label>
                    <div className={s.button_block}>
                        <button onClick={()=>{closeModal(); setErrorMessage('');}} className={s.button}>
                            Отмена
                        </button>
                        <button onClick={handleSaveClick} className={s.button}>
                            Сохранить
                        </button>
                    </div>
                    <p style={{color:"white", zIndex:'1', position:"absolute"}}>{errorMessage}</p>
                </form>
        </Modal>
    );
};

export default AddUserModal;