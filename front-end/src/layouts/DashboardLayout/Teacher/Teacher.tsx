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
                        <div className="col col-2">Teacher Name</div>
                        <div className="col col-3">Role</div>
                        <div className="col col-4">Status</div>
                        <div className="col col-5" >Action</div>
                    </li>
                    {
                        teachers?.map((v: Teacher, i: number) => (
                            <li className="table-row" key={i}>
                                <div className="col col-1" data-label="Job Id">{i + 1}</div>
                                <div className="col col-2" data-label="Teacher Name">{v.teacherName}</div>
                                <div className="col col-3" data-label="Role">{v.role}</div>
                                <div className="col col-4" data-label="Status">{v.active === true ? 'true' : 'false'}</div>
                                <div className="col col-5" data-label="Action" style={{ display: 'flex', textAlign: 'center' }}>
                                    <button style={{ padding: '0 0.5rem', margin: '0 0.5rem' }}>Edit </button> Or
                                    <button style={{ padding: '0 0.5rem', margin: '0 0.5rem' }}>Delete</button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </>
    )
};
export default connector(Teacher);