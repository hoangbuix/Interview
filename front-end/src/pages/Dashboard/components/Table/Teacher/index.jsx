import React, { useEffect, useState } from "react";
import api from "../../../../../config/api";
import authHeader from "../../../../../services/auth-header";

const TeacherTable = () => {

    const initState = [{
            "_id": "",
            "teacherId": "",
            "teacherName": "",
            "__v": 0
          },]

    const [teacher, setTeacher] = useState(initState);

    useEffect(() => {
        handleGetAllTeacher();
    }, [])

    const handleGetAllTeacher = async () => {
        await api.get("teacher/get-all", {headers: authHeader()}).then((res) => {
            setTeacher(JSON.parse(JSON.stringify(res.data)));
        }).catch(err => console.log(err))
    }

    return (
        <table className="responstable">
            <tbody><tr>
                <th>Main driver</th>
                <th data-th="Driver details"><span>Mã giáo viên</span></th>
                <th>Mã ID</th>
                <th>Tên giáo viên</th>
            </tr>
            {
                teacher.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td><input type="radio" /></td>
                            <td>{item._id}</td>
                            <td>{item.teacherId}</td>
                            <td>{item.teacherName}</td>
                        </tr>
                    )
                })
            }
            
            </tbody>
        </table>
      
    )
};
export default TeacherTable;