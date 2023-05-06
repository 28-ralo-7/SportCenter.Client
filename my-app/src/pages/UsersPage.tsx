import React, {useEffect, useState} from 'react';
import AddUserModal from "../modal/UserModal";
import UserService from "../api/UserService";
import {useFetching} from "../hooks/useFetching";
import UserList from "../components/UserList";
import Header from "../components/Header";
import s from "../styles/UsersPage.module.css"
const UsersPage = (props: any) => {
    const [title, setTitle] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({
        username: '',
        password: '',
        email: '',
        phone: '',
        name: '',
        role: ''
    });

    const [fetchUsers, isUsersLoading, userError] = useFetching(async () => {
        const response = await UserService.Get();
        setUsers(response);
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleAddClick = () => {
        setTitle('Добавление пользователя');
        setSelectedUser({
            username: '',
            password: '',
            email: '',
            phone: '',
            name: '',
            role:''
        });
        openModal();
    };

    const handleEditClick = (user: any) => {
        setTitle('Редактирование пользователя');
        setSelectedUser(user);
        openModal();
    };

    const handleModalClose = () => {
        setIsOpen(false);
        fetchUsers();
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const Logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('userRole')
        props.history.push('/auth')
    }

    return (
        <div className={s.page}>
            <Header />
            <div className={s.content}>
                <button className={s.add__button} onClick={handleAddClick}>Добавить пользователя</button>

                <AddUserModal
                    closeModal={handleModalClose}
                    title={title}
                    isOpen={isOpen}
                    selectedUser={selectedUser}
                />
                {isUsersLoading ? (
                    <h2 style={{ textAlign: 'center' }}>Идёт загрузка</h2>
                ) : users.length !== 0 ? (
                    <UserList
                        users={users}
                        updateUser={fetchUsers}
                        title="Список пользователей"
                        handleEditClick={handleEditClick}
                    />
                ) : (
                    <h1 style={{ textAlign: 'center' }}>Пользователи не найдены</h1>
                )}
            </div>

        </div>
    );
};

export default UsersPage;