import axios from "axios";
import React from "react";
import { getAllTeacher } from "../../../apis/teacher.api";

const URL = 'https://jsonplaceholder.typicode.com/users'

interface TeacherProps {
    _id: string;
    teacherName: string;
    description: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
}

const TeacherTable: React.FC = () => {

    const [teacher, setTeacher] = React.useState<TeacherProps[]>([]);


    React.useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await getAllTeacher();
        const { data, message } = response;
        console.log(response.data)
        // setTeacher(response.data)
        // setTeacher(JSON.parse(JSON.stringify(response.data)));
    }

    const removeData = (id: string) => {

        axios.delete(`${URL}/${id}`).then(res => {
            // const del = teacher.filter((employee: any) => id !== employee.id)
            // setTeacher(del)
        })
    }

    const renderHeader = () => {
        let headerElement = ['id', 'teacherName', 'description', 'active', 'createdAt', 'updatedAt', 'operation']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return teacher && teacher?.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item._id}</td>
                    <td>{item.teacherName}</td>
                    <td>{item.description}</td>
                    <td>{item.active ? "True" : "False"}</td>
                    <td>{item.createdAt}</td>
                    <td>{item.updatedAt}</td>
                    <td className='opration'>
                        <button className='button' onClick={() => removeData(item._id)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }
    return (
        <>
            <div id="container-table">
                <table id='employee'>
                    <thead>
                        <tr>{renderHeader()}</tr>
                    </thead>
                    <tbody>
                        {renderBody()}
                    </tbody>
                </table>
            </div>
        </>
    )
};

export default TeacherTable;

