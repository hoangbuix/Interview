import React, { useEffect, useState } from "react";
import api from "../../../../config/api";
const ReportTable = () => {
    const initialState = [{
        _id: "",
        userId: "",
        teacherId: "",
        info: [
            {
                content: [
                    {
                        _id: "",
                        contentReport: "",
                        teacherRequest: "",
                        expectedContent: "",
                        image: ""
                    }
                ],
                _id: "",
                reportName: "",
                meetId: "",
                reportDate: ""
            }
        ],
    }]

    const [report, setReport] = useState(initialState);

    useEffect(() => {
        getAllReport();
    }, [])
    const getAllReport = async () => {
        await api.get("report/get-all").then(res => {

            setReport(JSON.parse(JSON.stringify(res.data)))
        }).catch(err => console.log(err))
    }

    console.log(report)

    return (
        <table style={{ width: "30%" }}>
            <tr>
                <th>ID</th>
                <th>UserID</th>
                <th>TeacherID</th>
            </tr>
            {report.map((item, index) => {
                return (
                    <>
                        <td>{item._id}</td>
                        <td>{item.teacherId}</td>
                        <td>{item.userId}</td>
                    </>
                )
            })}
        </table>
    )
};

export default ReportTable;