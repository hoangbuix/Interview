import React, { useEffect, useState } from "react";
import api from "../../../../../config/api";
import authHeader from "../../../../../services/auth-header";

const MeetTable = () => {

    const initState = [{
        "_id": "",
        "meetId": "",
        "meetName": "",
        "description": "",
        "createdAt": "",
        "updatedAt": "",
        "__v": 0
      }]

    const [meet, setMeet] = useState(initState);

    useEffect(() => {
        handleGetAllMeet();
    }, [])

    const handleGetAllMeet = async () => {
        await api.get("meet/get-all", {headers: authHeader()}).then((res) => {
            setMeet(JSON.parse(JSON.stringify(res.data)));
        }).catch(err => console.log(err))
    }

    return (
        <table className="responstable">
            <tbody><tr>
                <th>Main driver</th>
                <th data-th="Driver details"><span>Mã đối thoại</span></th>
                <th>Mã ID</th>
                <th>Tên đối thoại</th>
                <th>Mô tả</th>
                <th>Ngày tạo</th>
                <th>Ngày sửa đổi</th>
            </tr>
            {
                meet.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td><input type="radio" /></td>
                            <td>{item._id}</td>
                            <td>{item.meetId}</td>
                            <td>{item.meetName}</td>
                            <td>{item.description}</td>
                            <td>{item.createdAt}</td>
                            <td>{item.updatedAt}</td>
                        </tr>
                    )
                })
            }
            
            </tbody>
        </table>
      
    )
};
export default MeetTable;