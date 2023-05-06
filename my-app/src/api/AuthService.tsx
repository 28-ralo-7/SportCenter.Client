import React from 'react';
import axios from "axios";
import {AuthModel} from "../models/AuthModel";
import {UserView} from "../models/UserView";
import jwtdecode from 'jwt-decode';

axios.defaults.baseURL = 'https://localhost:44360/api/';
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get["Access-Control-Allow-Headers"] = 'Origin, X-Requested-With, Content-Type, Accept';

class AuthService {

    static async Login(AuthForm: AuthModel) {
        try {
            const response = await axios.post("Auth/login", {
                "login": AuthForm.Login,
                "password": AuthForm.Password
            });

            const token = response.data;
            const decodedToken:any = jwtdecode(token); // дополнительно указываем, что есть свойство "role"
            const role: string = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

            localStorage.setItem('token', token);
            localStorage.setItem('userRole', role);
            console.log(localStorage.getItem("userRole"))

            return response.data;

        } catch (error) {
            console.error("error");
            return null;
        }
    }

    static async Register(user: any)
    {
        console.log(user)
        try {
            const response = await axios.post("Auth/register", {
                "username": user.Username,
                "password": user.Password,
                "email": user.Email,
                "phone": user.Phone,
                "name": user.Name,
                "role": user.Role
                });
            return response.data
        }
        catch
        {
            return null;
        }
    }

}

export default AuthService;