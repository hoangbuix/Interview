import React, { useEffect, useState } from "react";
import TeacherApi from "../../../apis/teacher.api";
import Edit from "../../../components/Edit";
import Modal from "../../../components/Modal";
import useDebounce from "../../../hooks/useDebounce";
import "./TeacherTable.scss";

interface TeacherProps {
    _id: string;
    teacherId: string;
    teacherName: string;
    active?: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const TeacherTable: React.FC = () => {
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [editName, setEditName] = useState(false);
    const [editActive, setEditActive] = useState(false);
    const [id, setId] = useState('');
    const [data, setData] = useState<any>({})
    const [teacherName, setTeacherName] = useState('');
    const [active, setActive] = useState(true)
    const [teacher, setTeacher] = useState<TeacherProps[]>([]);

    const debouncedValue = useDebounce(teacherName, 300)
    // let history = useHistory()
    useEffect(() => {
        const timer = setTimeout(() => {
            TeacherApi.getAllTeacher().then((result) => {
                if (teacher !== result.data) {
                    setTeacher(result.data);
                }
            }).catch(err => console.log(err))
        }, 1000);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const showModal = (id: string) => {
        setShow(true);
        setId(id);
    }
    const hideModal = () => {
        setShow(false);
    }

    const showEditModal = (item: Object) => {
        setData(item);
        setShowEdit(true);
    }

    const hideEditModal = () => {
        setShowEdit(false);
    }

    const handleShowEditName = () => {
        setEditName(true)
    }
    const handleShowActive = () => {
        setEditActive(true)
    }

    const handleTeacherName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setTeacherName(value)
    }
    console.log(debouncedValue)

    const handleActive = () => {
        setActive((e: Boolean) => !e)
    }

    const handleDeleteTeacher = () => {
        TeacherApi.deleteTeacher(id).catch((result) => {
            console.log(result.data.message)
        }).catch(err => console.log(err))
    }

    const update = () => {
        if ((data || debouncedValue || active) !== null) {
            TeacherApi.updateTeacher(data._id, debouncedValue, active)
                .then((r) => {
                    // console.log(r)
                    window.location.reload()
                })
                .catch(err => console.log(err))
        }
    }



    return (
        <>
            <Edit show={showEdit} handleCloseEdit={hideEditModal} handleSubmitEdit={update} >
                {/* <ItemEdit data={data} close={showEdit}  /> */}
                <div className="wrapper-edit-input-teacher" onClick={handleShowEditName} >
                    <span>Tên giáo viên: </span>
                    {editName ? <input type="text" defaultValue={data.teacherName} value={teacherName} onChange={handleTeacherName} /> : <span>{data.teacherName}</span>}
                </div>
                <div className="wrapper-edit-input-teacher" onClick={handleShowActive}>
                    <span>Trạng thái: </span>
                    {editActive ? <input type="checkbox" defaultChecked={data.active} onChange={handleActive} checked={active} /> : <span>{data.active ? "Đang hoạt động" : "Ngừng hoạt động"}</span>}
                </div>
            </Edit>
            <Modal show={show} handleClose={hideModal} handleSubmit={handleDeleteTeacher} >
                <div className="wrapper-input-edit-teacher">
                    <span style={{ padding: '10px' }} >Bạn có muốn xóa</span>
                </div>
            </Modal>
            <div className="container-table-teacher">
                <div className="wrapper-table-teacher">
                    <table >
                        <thead>
                            <tr>
                                <th>Mã</th>
                                <th>Mã giáo viên</th>
                                <th>Họ tên</th>
                                <th>Trạng thái</th>
                                <th>Ngày tạo</th>
                                <th>Ngày sửa đổi</th>
                                <th>Chức năng</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                teacher?.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item._id}</td>
                                        <td>{item.teacherId}</td>
                                        <td>{item.teacherName}</td>
                                        <td>{item.active === true ? "Hoạt động" : "Ngừng hoạt động"}</td>
                                        <td>{item.createdAt}</td>
                                        <td>{item.updatedAt}</td>
                                        <td>
                                            <ul className="menu-button">
                                                <li className="list-button" ><button onClick={() => showEditModal(item)} style={{ backgroundColor: "greenyellow", fontSize: '18px' }}>Sửa</button></li>
                                                <li className="list-button" ><button onClick={() => showModal(item._id)} style={{ backgroundColor: "tomato", fontSize: '18px' }}>Xóa</button></li>
                                            </ul>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};

export default TeacherTable;