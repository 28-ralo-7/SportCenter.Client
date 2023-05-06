import React from 'react';
import UserService from "../api/UserService";
import s from "../styles/UserList.module.css"
// @ts-ignore
const UserList = ({users, title, updateUser,handleEditClick}) => {
    const Delete = async (email:string) => {
        if(window.confirm('Вы действительно хотите удалить?')) {
            const response = await UserService.Delete(email)
            if (response){
                updateUser();
            }

        }
    }

    return (
        <div >
            <h1 className={s.titleUserList}>
                {title}
            </h1>
            {users.map((user:any)=>
                <div className={s.user__info}>
                    <div >
                        <h2>{user.name}</h2>
                        <div>
                            Почта: {user.email} <br/>
                            Телефон: {user.phone} <br/>
                            Роль: {user.role}
                        </div>
                    </div>

                    <div className={s.user__buttons} style={{marginTop:20}}>
                        <button className={s.button} onClick={()=> {handleEditClick(user)}}>Изменить</button>
                        <button className={s.button} onClick={()=> {Delete(user.email)}}>Удалить</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserList;