import React, { useEffect, useState } from "react";
import api from "../../../../../config/api";
import authHeader from "../../../../../services/auth-header";
import MeetItem from "./meetItem";
import "./styles.scss";

const MeetTable = () => {

    const initState = [{
        "_id": "",
        "meetId": "",
        "meetName": "",
        "description": "",
        "createdAt": "",
        "updatedAt": "",
        "__v": 0
      }]

    const [meet, setMeet] = useState(initState);
    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false);


    useEffect(() => {
        handleGetAllMeet();
    }, [])

    const handleGetAllMeet = async () => {
        await api.get("meet/get-all", {headers: authHeader()}).then((res) => {
            setMeet(JSON.parse(JSON.stringify(res.data)));
        }).catch(err => console.log(err))
    }


    const handleEdit = () => {
        setShow(true);
        
    }

    const handleDelete = () => {
        setShowDelete(true);
    }

    const handleCancelShow = () => {
        setShow(false)
    }

    const MeetOverview = () => {
        return (
            <div style={{ margin: '10px 50px', width: 'auto', height: 'auto', fontSize: '18px'}}>
                <div >
                    <button type="submit" style={{background: '#ff8000', width: '5vw', height: '5vh', color: 'white'}}>Thêm</button>
                </div>
                <table className="responstable" >
                    <tbody>
                        <tr>
                            <th data-th="Driver details"><span>Mã đối thoại</span></th>
                            <th>Mã ID</th>
                            <th>Tên đối thoại</th>
                            <th>Mô tả</th>
                            <th>Ngày tạo</th>
                            <th>Ngày sửa đổi</th>
                            <th>Chức năng</th>
                        </tr>
                        {
                            meet.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item._id}</td>
                                        <td>{item.meetId}</td>
                                        <td>{item.meetName}</td>
                                        <td>{item.description}</td>
                                        <td>{item.createdAt}</td>
                                        <td>{item.updatedAt}</td>
                                        <td style={{marginLeft: '20px'}}>
                                            <button style={{marginRight: '20px'}} onClick={handleEdit}>Sửa</button>
                                            <button onClick={handleDelete}>Xoá</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }

    const MeetDelete = () => {
        return (
            <div>
                <div>
                    <h3>Bạn có chắc chắn muốn xóa</h3>
                </div>
                <div>
                    <button style={{marginRight: '20px'}}>Xác nhận</button>
                    <button>Hủy bỏ</button>
                </div>
            </div>
        )
    }
    
    return (
        <div>
            { show ? <MeetItem meet={meet} show={handleCancelShow} /> : <MeetOverview/> }
            { showDelete ? <MeetDelete/> : ""}
        </div>
    )
};
export default MeetTable;