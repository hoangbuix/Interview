import React, { useEffect } from "react";
import "./Report.style.scss";
import { connect, ConnectedProps } from "react-redux";
import Header from "../../components/Header/Header";
import { getReportList, getReportByUserId } from "../../reduxs/thunks/report-thunk";
import { getTeacherById } from "../../reduxs/thunks/teacher-thunk";
import { getMeet } from "../../reduxs/thunks/meet-thunk";
import { getUserById } from "../../reduxs/thunks/user-thunk";
import { decode } from "../../helpers/decode";
import { format_time } from "../../helpers/date"



const mapStateToProps = (state: AppState) => ({
    reports: state.report.reports,
    report: state.report.report,
    teacher: state.teacher.teacher,
    meet: state.meet.meet,
    user: state.user.user
})

const mapDispatchToProps = {
    getReportList,
    getReportByUserId,
    getTeacherById,
    getMeet,
    getUserById
}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> { }
const Report: React.FC<Props> = (props: Props) => {
    const { reports, getReportList, report, getReportByUserId, teacher, getTeacherById, getMeet, meet, user, getUserById } = props;

    useEffect(() => {
        let token = localStorage.getItem('token');
        let de_scode = decode(token);
        const data = JSON.parse(de_scode)
        setTimeout(() => {
            if (report === null) {
                getReportByUserId(data._id);
            }
            if (report && teacher === null || meet === null) {
                getTeacherById(report?.teacherId);
                report?.info.map((v: any) => getMeet(v.meetId))
                getUserById(report?.userId)
            }
            getReportList()
        }, 10)

    }, [report, teacher, meet, user, getReportList, getReportByUserId, getTeacherById, getMeet, getUserById])

    console.log(meet)

    return (
        <>
            <Header />
            <div className="wrapper-report">
                <div className="gird wide">
                    <div className="row">
                        <div className="c-12 m-8 l-8" >
                            <div className="table-wrapper">
                                <table className="fl-table">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên báo cáo</th>
                                            <th>Báo cáo thông qua</th>
                                            <th>Hoạt động</th>
                                            <th>Thời gian báo cáo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <th colSpan={5} style={{ background: 'grey' }}>Thông tin</th>
                                        {
                                            report?.info.map((v: any, i: number) => (
                                                < tr key={i} >
                                                    <td>{i + 1}</td>
                                                    <td>{v.reportName}</td>
                                                    <td>{meet?.meetName}</td>
                                                    <td>{v.active ? 'true' : 'false'}</td>
                                                    <td>{format_time(v.reportDate)}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Nội báo cáo</th>
                                            <th>Yêu cầu giáo viên</th>
                                            <th>Mong chờ</th>
                                            <th>Ảnh</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <th colSpan={5} style={{ background: 'grey' }}>Nội dung</th>
                                        {
                                            report?.info.map((v: any, i: number) => (
                                                v?.content.map((v2: any) => (
                                                    < tr key={i} >
                                                        <td>{i + 1}</td>
                                                        <td>{v2.contentReport}</td>
                                                        <td>{v2.teacherRequest}</td>
                                                        <td>{v2.expectedContent}</td>
                                                        <td><img src={v2.image} alt="" style={{ width: '60px', height: '60px' }} /></td>
                                                    </tr>
                                                ))
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="c-12 m-4 l-4">
                            <span>Tên giáo viên hướng dẫn: {teacher?.teacherName}</span>
                            <br />
                            <span>Sinh viên thực hiện: {user?.fullName}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default connector(Report);