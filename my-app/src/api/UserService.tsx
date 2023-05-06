import axios from "axios";
import {UserView} from "../models/UserView";

axios.defaults.baseURL = 'https://localhost:44360/api/';
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get["Access-Control-Allow-Headers"] = 'Origin, X-Requested-With, Content-Type, Accept';

class UserService {

    static async Get() {
        try {
            const response = await axios.get("User/get", {
                headers: {Authorization: localStorage.getItem('token')}})
            return response.data;
        }
        catch (error)
        {
            console.error(error);
            return null;
        }
    }

    static async GetByEmail(email: string) {
        try {
            const response = await axios.get(`User/getByEmail/${email}`, {
                headers: {Authorization: localStorage.getItem('token')}})
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async Create(user: any) {
        try {
            console.log(user)
            const response = await axios.post("User/create", {
                    "username": user.Username,
                    "password": user.Password,
                    "email": user.Email,
                    "phone": user.Phone,
                    "name": user.Name,
                    "role": user.Role
                },
                {headers: {Authorization: localStorage.getItem('token')}})

            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async Update(email: string, user: any) {
        try {
            const response = await axios.put(`User/update/${email}`, user,

                {
                headers: {Authorization: localStorage.getItem('token')}});
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async Delete(email: string) {
        try {
            const response = await axios.delete(`User/delete/${email}`, {
                headers: {Authorization: localStorage.getItem('token')}});
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

}

export default UserService;