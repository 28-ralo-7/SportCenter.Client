import React, {useEffect, useState} from 'react';
import AddUserModal from "../modal/UserModal";
import UserService from "../api/UserService";
import {useFetching} from "../hooks/useFetching";
import UserList from "../components/UserList";

const SessionPage = (props: any) => {
    const [title, setTitle] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({
        username: '',
        password: '',
        email: '',
        phone: '',
        name: ''
    });

    const [fetchUsers, isUsersLoading, userError] = useFetching(async () => {
        const response = await UserService.Get();
        setUsers(response);
        console.log(users)
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
            name: ''
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
        props.history.push('/auth')
    }

    return (
        <div>
            <button onClick={Logout} style={{width:"300px", marginLeft:"350px", height:"50px" , position:"absolute"}}>Выйти</button>
            <AddUserModal
                closeModal={handleModalClose}
                title={title}
                isOpen={isOpen}
                selectedUser={selectedUser}
            />
            <button onClick={handleAddClick} style={{width:"300px", marginLeft:"50px", height:"50px" , position:"absolute"}}>Добавить пользователя</button>
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
    );
};

export default SessionPage;