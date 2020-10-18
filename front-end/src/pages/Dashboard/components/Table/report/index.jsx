import React, { useEffect, useState } from "react";
import api from "../../../../../config/api";


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
        <table className="responstable">
            <tbody>
                <tr>
                    <th>Mã báo cáo</th>
                    <th>Mã người dùng</th>
                    <th>Mã giáo viên</th>
                    <th>Tên báo cáo</th>
                    <th>Gọp mặt</th>
                    <th>Mã nội dung báo cáo</th>
                    <th>Nội dung báo cáo</th>
                    <th>Phản hồi của giáo viên</th>
                    <th>Yêu cầu</th>
                    <th>Ảnh</th>
                    <th>Ngày báo cáo</th>
                </tr>
                {report.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item._id}</td>
                            <td>{item.userId}</td>
                            <td>{item.teacherId}</td>
                            <td>{item.info[index].reportName}</td>
                            <td>{item.info[index].meetId}</td>
                            <td>{item.info[index].content[index]._id}</td>
                            <td>{item.info[index].content[index].contentReport}</td>
                            <td>{item.info[index].content[index].teacherRequest}</td>
                            <td>{item.info[index].content[index].expectedContent}</td>
                            <td><img src={item.info[index].content[index].image} alt="add" style={{width: '40px', height: '40px'}}/> </td>
                            <td>{item.info[index].reportDate}</td>
                            
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
};

export default ReportTable;