import React, { useEffect } from "react";
import CardHome from "./CardHome/CardHome";
import { connect, ConnectedProps } from "react-redux";
import { getReportList } from "../../reduxs/thunks/report-thunk"
import Navbar from "../../components/Navbar/Navbar";




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
        }, 500)
    }, [getReportList, reports])


    return (
        <>
            <div className="wrapper__home">
                <Navbar />
                <div className="gird wide">
                    <div className="row">
                        <div className="c-12 m-5 l-4">
                            {/* <ToastNotice ref={'toastNotifier'} position={2} /> */}
                        </div>
                        <div className="c-12 m-7 l-8">
                            <CardHome />
                            <CardHome />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default connector(HomeLayout);