import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import "./Teacher.style.scss";
import { getAllTeacher } from "../../../reduxs/thunks/teacher-thunk"



const mapStateToProps = (state: AppState) => ({
    teachers: state.teacher.teachers
})

const mapDispatchToProps = {
    getAllTeacher
}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> { }


const Teacher: React.FC<Props> = (props: Props) => {
    const { teachers, getAllTeacher } = props;
    useEffect(() => {
        const timer = setTimeout(() => {
            getAllTeacher()
        }, 300);
        return () => {
            clearTimeout(timer);
        };

    }, [getAllTeacher]);

    console.log(teachers)

    return (
        <>
            <div className="container">
                <ul className="responsive-table">
                    <li className="table-header">
                        <div className="col col-1">Job Id</div>
                        <div className="col col-2">Customer Name</div>
                        <div className="col col-3">Amount Due</div>
                        <div className="col col-4">Payment Status</div>
                    </li>
                    {/* {
                        teachers?.map((teacher: any, i: number) => (
                            <li className="table-row" key={i}>
                                <div className="col col-1" data-label="Job Id">{i + 1}</div>
                                <div className="col col-2" data-label="Customer Name">John Doe</div>
                                <div className="col col-3" data-label="Amount">$350</div>
                                <div className="col col-4" data-label="Payment Status">Pending</div>
                            </li>
                        ))
                    } */}
                </ul>
            </div>

        </>
    )
};
export default connector(Teacher);