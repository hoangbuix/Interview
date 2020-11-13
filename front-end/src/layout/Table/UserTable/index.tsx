import React, { useEffect, useState } from "react";
import UserApi from "../../../apis/user.api";
import "./UserTable.scss";

interface UserProps {
    _id: string;
    userId: string;
    fullName: string;
    gender: string;
    birthday: string;
    address: string;
    inClass: string;
    phone: string;
    username: string;
    password: string;
    email: string;
    roles: Array<Object>;
    majorId: string;
    teacherId: string;
    companyId: string;
    topicId: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}


const UserTable: React.FC = () => {

    const [user, setUser] = useState<UserProps[]>([])
    useEffect(() => {
        const timer = setTimeout(() => {
            UserApi.getAllUser().then((result) => {
                console.log(result.data)
                setUser(result.data.data);
            }).catch(err => console.log(err))
        }, 1000);
        return () => clearTimeout(timer);
    }, [])

    console.log(user);

    return (
        <div className="container-table-user">
            <div className="wrapper-table-user">
                <table className="purpleHorizon">
                    <thead >
                        <tr>
                            <th>Mã</th>
                            <th>Mã người dùng</th>
                            <th>Họ tên</th>
                            <th>Giới tính</th>
                            <th>Sinh nhật</th>
                            <th>Địa chỉ</th>
                            <th>Lớp</th>
                            <th>Số điện thoại</th>
                            <th>Tài khoản</th>
                            <th>Mật khẩu</th>
                            <th>Email</th>
                            <th>Quyền</th>
                            <th>Ngành học</th>
                            <th>Giáo viên</th>
                            <th>Công ty</th>
                            <th>Chủ đề</th>
                            <th>Trạng thái</th>
                            <th>Ngày tạo</th>
                            <th>Ngày sửa đổi</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user?.map((item, index) => (
                                <tr key={index}>
                                    <td>{item._id}</td>
                                    <td>{item.userId}</td>
                                    <td>{item.fullName}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.birthday}</td>
                                    <td>{item.address}</td>
                                    <td>{item.inClass}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.username}</td>
                                    <td>{item.password}</td>
                                    <td>{item.email}</td>
                                    <td>{item.roles}</td>
                                    <td>{item.majorId}</td>
                                    <td>{item.teacherId}</td>
                                    <td>{item.companyId}</td>
                                    <td>{item.topicId}</td>
                                    <td>{item.active === true ? "Hoạt động" : "Ngừng hoạt động"}</td>
                                    <td>{item.createdAt}</td>
                                    <td>{item.updatedAt}</td>
                                    <td>Chức năng</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default UserTable;