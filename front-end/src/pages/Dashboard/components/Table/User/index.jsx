import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "../../../../../config/api";
import authHeader from "../../../../../services/auth-header";


const UserTable = () => {
    const initState = [{
        _id: "",
        userId: "",
        fullName: "",
        gender: "",
        birthday: "",
        address: "",
        inClass: "",
        phone: "",
        username: "",
        password: "",
        email: "",
        roles: "",
        majorId: "",
        teacherId: "",
        companyId: "",
        topicId: "",
        active: false,
        },]

    const [user, setUser] = useState(initState);

    useEffect(() => {
        getAllUser();
    }, []);

    const getAllUser = async () => {
        await api.get("user/get-all", {headers: authHeader()}).then((res) => {
            setUser(JSON.parse(JSON.stringify(res.data.data)))
        }).then(err => {
            console.log(err)
        })
    }
    console.log(user.active)
    return (
        

        <table  className="responstable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>userId</th>
                    <th>fullName</th>
                    <th>gender</th>
                    <th>birthday</th>
                    <th>address</th>
                    <th>inClass</th>
                    <th>phone</th>
                    <th>username</th>
                    <th>password</th>
                    <th>email</th>
                    <th>roles</th>
                    <th>majorId</th>
                    <th>teacherId</th>
                    <th>companyId</th>
                    <th>topicId</th>
                    <th>active</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>{item._id}</td>
                                <td>{item.userId}</td>
                                <td>{item.fullName}</td>
                                <td>{item.gender}</td>
                                <td>{item.birthday}</td>
                                <td>{item.address}</td>
                                <td>{item.inClass}</td>
                                <td>{item.phone}</td>
                                <td>{item.username}</td>
                                <td>{item.password}</td>
                                <td>{item.email}</td>
                                <td>{item.roles[0] + "," +item.roles[1]}</td>
                                <td>{item.majorId}</td>
                                <td>{item.teacherId}</td>
                                <td>{item.companyId}</td>
                                <td>{item.topicId}</td>
                                <td>{`${item.active}`}</td>
                            </tr>
                        )
                    })
                }
                
            </tbody>
          
        </table>
    )
};

export default UserTable;

