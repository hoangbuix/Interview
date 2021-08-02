import React, { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import "./Teacher.style.scss";
import { getAllTeacher, editteacherById, deleteTeacherById } from "../../../reduxs/thunks/teacher-thunk"
import Modal from "../../../components/Modal/Modal";
import { type } from "os";



const mapStateToProps = (state: AppState) => ({
    teachers: state.teacher.teachers,
    editTeacher: state.teacher.editTeacher,
    deleteTeacher: state.teacher.deleteTeacher
})

const mapDispatchToProps = {
    getAllTeacher,
    editteacherById,
    deleteTeacherById
}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> { }


const Teacher: React.FC<Props> = (props: Props) => {
    const { teachers, getAllTeacher, editTeacher, editteacherById, deleteTeacher, deleteTeacherById } = props;
    const [isShow, setIsShow] = useState(false);
    const [data, setData] = useState<Teacher>();
    const [teacherName, setTeacherName] = useState<string>('');
    const [role, setRole] = useState<[]>();
    const [status, setStatus] = useState<boolean>(true)


    useEffect(() => {
        const timer = setTimeout(() => {
            getAllTeacher();
        }, 100);
        return () => clearTimeout(timer);
    }, [getAllTeacher, editteacherById, deleteTeacherById]);

    const btnEdit = (id: string) => {
        const newTeacher = teachers?.filter((item: Teacher) => item._id === id);
        setIsShow(true);
        setData(newTeacher);
    }

    const btnClose = () => {
        setIsShow(false);
    }

    const handleEdit = () => {
        const id: any = data?._id;
        const newData: any = { teacherName, role, status };
        const timer = setTimeout(() => {
            editteacherById(id, newData);
        }, 300);
        return () => clearTimeout(timer);
    }

    const handleDelete = (id: string) => {
        const timer = setTimeout(() => {
            deleteTeacherById(id);
        }, 300);
        return () => clearTimeout(timer);
    }



    return (
        <>
            <div className="container">
                <ul className="responsive-table">
                    <li className="table-header">
                        <div className="col col-1">Id</div>
                        <div className="col col-2">Teacher Name</div>
                        <div className="col col-3">Role</div>
                        <div className="col col-4">Status</div>
                        <div className="col col-5" >Action</div>
                    </li>
                    {
                        teachers?.filter((item: Teacher) => item.active === true).map((v: Teacher, i: number) => (
                            <li className="table-row" key={i} >
                                <div className="col col-1" data-label="Job Id">{i + 1}</div>
                                <div className="col col-2" data-label="Teacher Name">{v.teacherName}</div>
                                <div className="col col-3" data-label="Role">{v.role}</div>
                                <div className="col col-4" data-label="Status">{v.active === true ? 'true' : 'false'}</div>
                                <div className="col col-5" data-label="Action" style={{ display: 'flex', textAlign: 'center' }}>
                                    <button style={{ padding: '0 0.5rem', margin: '0 0.5rem', background: 'yellow' }} onClick={() => btnEdit(v._id)}>Edit </button> Or
                                    <button style={{ padding: '0 0.5rem', margin: '0 0.5rem', background: 'tomato' }} onClick={() => handleDelete(v._id)}>Delete</button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {isShow &&
                <Modal show={isShow} handleClose={btnClose} title={`${'Teacher'}`}>
                    <form className="modal-form" onSubmit={handleEdit}>
                        <div className="form-row">
                            <label >Teacher Name</label>
                            <input type="text" value={teacherName} />
                        </div>
                        <div className="form-row">
                            <label htmlFor="iduser">Role</label>
                            <select className="user-select" name="user-name" id="user">
                                <option selected disabled>Pick a role</option>
                                <option >Teacher</option>
                                <option >Manager</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <label htmlFor="iduser">Status</label>
                            <select className="user-select" name="user-name" id="user">
                                <option selected disabled>Pick a status</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>
                    </form>
                </Modal>
            }

        </>
    )
};
export default connector(Teacher);