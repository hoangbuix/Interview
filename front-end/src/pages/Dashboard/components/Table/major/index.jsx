import React, { useEffect, useState } from "react";
import api from "../../../../../config/api";
import authHeader from "../../../../../services/auth-header";

const MajorTable = () => {

    const initState = [{
        "_id": "",
        "majorId": "",
        "majorName": "",
        "majorDescription": "",
        "createdAt": "",
        "updatedAt": "",
        "__v": 0
      }]

    const [major, setMajor] = useState(initState);

    useEffect(() => {
        handleGetAllMajor();
    }, [])

    const handleGetAllMajor = async () => {
        await api.get("major/get-all", {headers: authHeader()}).then((res) => {
            setMajor(JSON.parse(JSON.stringify(res.data)));
        }).catch(err => console.log(err))
    }

    return (
        <table className="responstable">
            <tbody><tr>
                <th>Main driver</th>
                <th data-th="Driver details"><span>Mã khoa</span></th>
                <th>Mã ID</th>
                <th>Tên khoa</th>
                <th>Mô tả</th>
                <th>Ngày tạo</th>
                <th>Ngày sửa đổi</th>
            </tr>
            {
                major.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td><input type="radio" /></td>
                            <td>{item._id}</td>
                            <td>{item.majorId}</td>
                            <td>{item.majorName}</td>
                            <td>{item.majorDescription}</td>
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
export default MajorTable;