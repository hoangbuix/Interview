import React, { useEffect } from "react";
import "./Report.style.scss";
import { connect, ConnectedProps } from "react-redux";
import Header from "../../components/Header/Header";
import { getReportList, getReportByUserId } from "../../reduxs/thunks/report-thunk";
import { getTeacherById } from "../../reduxs/thunks/teacher-thunk";
import { decode } from "../../helpers/decode";
import { report } from "process";



const mapStateToProps = (state: AppState) => ({
    reports: state.report.reports,
    report: state.report.report,
    teacher: state.teacher.teacher
})

const mapDispatchToProps = {
    getReportList,
    getReportByUserId,
    getTeacherById
}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> { }
const Report: React.FC<Props> = (props: Props) => {
    const { reports, getReportList, report, getReportByUserId, teacher, getTeacherById } = props;

    useEffect(() => {
        let token = localStorage.getItem('token');
        let de_scode = decode(token);
        const data = JSON.parse(de_scode)
        setTimeout(() => {
            if (report === null) {
                getReportByUserId(data._id)
            }
            getReportList()
        }, 100)
    }, [report, getReportList, getReportByUserId])

    console.log(report)


    return (
        <>
            <Header />
            <div className="wrapper-report">
                <div className="gird wide">
                    <div className="row">
                        <div className="c-12 m-4 l-4" style={{ background: 'yellow' }}>
                            <h3>b</h3>
                        </div>
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
                                        {
                                            report.userId
                                            // reports.map((value: any, i: number) => (
                                            //     value.info.map((v: any) => (
                                            //         < tr key={i} >
                                            //             <td>{i + 1}</td>
                                            //             <td>{v.reportName}</td>
                                            //             <td>{v.meetId}</td>
                                            //             <td>{v.active ? 'true' : 'false'}</td>
                                            //             <td>{v.reportDate}</td>
                                            //         </tr>
                                            //     ))
                                            // ))
                                        }
                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};

export default connector(Report);