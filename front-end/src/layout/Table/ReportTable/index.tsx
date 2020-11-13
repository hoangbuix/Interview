import React, { useEffect, useState } from "react";
import ReportApi from "../../../apis/report.api";
import "./ReportTable.scss";



interface ReportProps {
    _id: string,
    userId: string,
    teacherId: string,
    info: Array<{
        reportDate: Date,
        active: boolean,
        content: Array<{
            _id: string,
            contentReport: string,
            teacherRequest: string,
            expectedContent: string,
            image: string,
        }>,
        _id: string,
        reportName: string,
        meetId: string,
    }>
}

const ReportTable: React.FC = () => {
    const [report, setReport] = useState<ReportProps[]>([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            ReportApi.getAllReport().then((result) => {
                setReport(result.data);
            }).catch((err) => {
                console.log(err)
            })
        }, 1500)
        return () => clearTimeout(timer);
    }, [])
    return (
        <div className="container-table-report">
            <div className="wrapper-table-report">
                <table>
                    <thead>
                        <tr>
                            <th>Mã người dùng</th>
                            <th>Mã giáo viên</th>
                            <th>Tên báo cáo</th>
                            <th>Mã đối thoại</th>
                            <th>Hoạt động</th>
                            <th>Nội dung báo cáo</th>
                            <th>Phản hồi giáo viên</th>
                            <th>Nội dung yêu cầu</th>
                            <th>Ảnh</th>
                            <th>Ngày báo cáo</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            report?.map((item, index) => {
                                let info = item.info;
                                return (
                                    <tr key={index}>
                                        <td>{item.userId}</td>
                                        <td>{item.teacherId}</td>
                                        <td>{info.map(item => (
                                            <>{item.reportName}</>
                                        ))}</td>
                                        <td>{info.map(item => (
                                            <>{item.meetId}</>
                                        ))}</td>
                                        <td>{info.map(item => (
                                            <>{item.active ? "a" : "b"}</>
                                        ))}</td>
                                        <td>
                                            {info.map(item => {
                                                return item.content.map(item_2 => {
                                                    let { _id, ...result } = item_2
                                                    return <>{result.contentReport}</>
                                                })
                                            })}
                                        </td>
                                        <td>
                                            {info.map(item => {
                                                return item.content.map(item_2 => {
                                                    let { _id, ...result } = item_2
                                                    return <>{result.teacherRequest}</>
                                                })
                                            })}</td>
                                        <td>
                                            {info.map(item => {
                                                return item.content.map(item_2 => {
                                                    let { _id, ...result } = item_2
                                                    return <>{result.expectedContent}</>
                                                })
                                            })}
                                        </td>
                                        <td>{info.map(item => {
                                            return item.content.map(item_2 => {
                                                let { _id, ...result } = item_2
                                                return <>{result.image ? <img src={result.image} alt="ảnh báo cáo" /> : ""}</>
                                            })
                                        })}</td>
                                        <td>
                                            {info.map(item => (
                                                <>{item.reportDate.toString().slice(0, 10)}</>
                                            ))}
                                        </td>
                                        <td>
                                            <div>Add</div>
                                            <div>Ad</div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default ReportTable;