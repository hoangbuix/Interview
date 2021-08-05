import React, { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import "./Teacher.style.scss";
import { getAllTeacher, teacherAdd, editTeacherById, deleteTeacherById } from "../../../reduxs/thunks/teacher-thunk"
import Modal from "../../../components/Modal/Modal";
import Loading from "../../../components/Loading/Loading";
import useDebounce from "../../../hooks/useDebounce";



const mapStateToProps = (state: AppState) => ({
    teachers: state.teacher.teachers,
    addTeacher: state.teacher.addTeacher,
    editTeacher: state.teacher.editTeacher,
    deleteTeacher: state.teacher.deleteTeacher
})

const mapDispatchToProps = {
    getAllTeacher,
    teacherAdd,
    editTeacherById,
    deleteTeacherById
}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> { }



const Teacher: React.FC<Props> = (props: Props) => {
    const { teachers, getAllTeacher, addTeacher, teacherAdd, editTeacher, editTeacherById, deleteTeacher, deleteTeacherById } = props;

    const [isShowAdd, setIsShowAdd] = useState(false);
    const [isShowEdit, setIsShowEdit] = useState(false);
    const [isShowDelete, setIsShowDelete] = useState(false);
    const [idTeacher, setIdTeacher] = useState<string>();
    const [data, setData] = useState<Teacher>();
    const [teacherName, setTeacherName] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const debouncedValue = useDebounce<string>(teacherName, 500)



    useEffect(() => {
        const timer = setTimeout(() => {
            getAllTeacher();
        }, 100);
        return () => clearTimeout(timer);
    }, [data, getAllTeacher, teacherAdd, editTeacherById, deleteTeacherById, debouncedValue]);

    const btnAdd = () => {
        setIsShowAdd(true)
    }

    const btnEdit = (id: string) => {
        setIdTeacher(id);
        const newTeacher = teachers?.filter((item: Teacher) => item._id === id);
        setIsShowEdit(true);
        setData(newTeacher);
    }

    const btnDelete = (id: string) => {
        setIdTeacher(id);
        setIsShowDelete(true);
    }


    const btnClose = () => {
        setIsShowAdd(false)
        setIsShowEdit(false);
        setIsShowDelete(false);
    }

    const handleSetTeacherName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTeacherName(e.target.value);
    }

    const handleChangeRole = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRole(e.target.value);
    }

    const handleChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStatus(e.target.value);
    }

    const handleAdd = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let active: boolean = status === 'true' ? true : false;
        let aTeacher = { teacherName, role, active }
        const timer = setTimeout(() => {
            teacherAdd(aTeacher);
            setIsShowAdd(false)
        }, 300);
        return () => clearTimeout(timer);
    }


    const handleEdit = (event: React.FormEvent<HTMLFormElement>) => {
        if (idTeacher !== '') {
            event.preventDefault()
            let active: boolean = status === 'true' ? true : false;
            let updateTeacher = { teacherName, role, active }
            const timer = setTimeout(() => {
                editTeacherById(idTeacher, updateTeacher);
                setIsShowEdit(false)
            }, 300);
            return () => clearTimeout(timer);
        }
    }

    const handleDelete = () => {
        const timer = setTimeout(() => {
            deleteTeacherById(idTeacher);
            setIsShowDelete(false)
        }, 300);
        return () => clearTimeout(timer);
    }

    console.log(teacherName)

    return (
        <>
            <div className="container">
                <button style={{ padding: '0 0.5rem', margin: '0 0.5rem', background: 'yellow' }} onClick={btnAdd}>Add +</button>
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
                                    <button style={{ padding: '0 0.5rem', margin: '0 0.5rem', background: 'tomato' }} onClick={() => btnDelete(v._id)}>Delete</button>
                                </div>
                            </li>
                        ))
                    }
                    {/* {
                        teachers?.filter((item: Teacher) => item.active === false).map((v: Teacher, i: number) => (
                            <li className="table-row" key={i} >
                                <div className="col col-1" data-label="Job Id">{(i + 1) * (-1)}</div>
                                <div className="col col-2" data-label="Teacher Name">{v.teacherName}</div>
                                <div className="col col-3" data-label="Role">{v.role}</div>
                                <div className="col col-4" data-label="Status">{v.active === true ? 'true' : 'false'}</div>
                                <div className="col col-5" data-label="Action" style={{ display: 'flex', textAlign: 'center' }}>
                                    <button style={{ padding: '0 0.5rem', margin: '0 0.5rem', background: 'yellow' }} onClick={() => btnEdit(v._id)}>Edit </button> Or
                                    <button style={{ padding: '0 0.5rem', margin: '0 0.5rem', background: 'tomato' }} onClick={() => btnDelete(v._id)}>Delete</button>
                                </div>
                            </li>
                        ))
                    } */}
                </ul>
            </div>
            {isShowAdd &&
                <Modal show={isShowAdd} handleClose={btnClose} title={`${'Teacher'}`} submit={handleAdd} btnName='Submit'>
                    <form className="modal-form" >
                        <div className="form-row">
                            <label >Teacher Name</label>
                            <input type="text" value={teacherName} onChange={handleSetTeacherName} placeholder={teacherName} />
                        </div>
                        <div className="form-row">
                            <label htmlFor="idteacher" >Role</label>
                            <select className="role-select" value={role} onChange={handleChangeRole}>
                                <option selected disabled>Pick a role</option>
                                <option value="teacher">Teacher</option>
                                <option value="manager">Manager</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <label htmlFor="idstatus">Status</label>
                            <select className="status-select" value={status} onChange={handleChangeStatus}>
                                <option selected disabled>Pick a status</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>
                    </form>
                </Modal>
            }

            {isShowEdit && data &&
                <Modal show={isShowEdit} handleClose={btnClose} title={`${'Teacher'}`} submit={handleEdit} btnName='Submit'>
                    <form className="modal-form" >
                        <div className="form-row">
                            <label >Teacher Name</label>
                            <input type="text" value={teacherName} onChange={handleSetTeacherName} />
                        </div>
                        <div className="form-row">
                            <label htmlFor="idteacher" >Role</label>
                            <select className="role-select" value={role} onChange={handleChangeRole}>
                                <option selected disabled>Pick a role</option>
                                <option value="teacher">Teacher</option>
                                <option value="manager">Manager</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <label htmlFor="idstatus">Status</label>
                            <select className="status-select" value={status} onChange={handleChangeStatus}>
                                <option selected disabled>Pick a status</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>
                    </form>
                </Modal>
            }

            {
                isShowDelete &&
                <Modal title='Yes or No' show={isShowDelete} handleClose={btnClose} btnName='Yes' submit={handleDelete}>
                    <span>Are you sure?</span>
                </Modal>
            }

        </>
    )
};
export default connector(Teacher);