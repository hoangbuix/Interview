import React, { useEffect } from "react";
import "./HomeLayout.style.scss";
import CardHome from "../../components/CardHome/CardHome";
import Header from "../../components/Header/Header";
import NoticeHome from "../../components/NoticeHome/NoticeHome";
import MemberHomeList from "../MemberHomeList/MemberHomeList";
import { connect, ConnectedProps } from "react-redux";
import { getReportList } from "../../reduxs/thunks/report-thunk"



const mapStateToProps = (state: AppState) => ({
    reports: state.report.reports
})

const mapDispatchToProps = {
    getReportList
}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> { }

const HomeLayout = (props: Props) => {

    const { reports, getReportList } = props

    useEffect(() => {
        setTimeout(() => {
            getReportList()
        }, 100)
    }, [getReportList])



    return (
        <>
            <Header />
            <div className="gird wide">
                <div className="row">
                    <div className="c-0 m-4 l-4">
                        <div className="wrapper-home-left" >
                            <div className="row">
                                <div className="c-12 m-12 l-12">
                                    <NoticeHome />
                                </div>
                                <div className="c-12 m-12 l-12">
                                    <MemberHomeList />
                                </div>
                                <div className="c-12 m-12 l-12">
                                    <MemberHomeList />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="c-12 m-8 l-8">
                        {reports.map((value: any, key: number) => (
                            <CardHome data={value} key={key} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};
export default connector(HomeLayout);