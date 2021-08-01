import React from "react";
import { connect, ConnectedProps } from "react-redux";
import "./User.style.scss";
import { getAllUser } from "../../../reduxs/thunks/user-thunk"
import { useEffect } from "react";


const mapStateToProps = (state: AppState) => ({
    users: state.user.users
})

const mapDispatchToProps = {
    getAllUser
}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> { }

const User: React.FC<Props> = (props: Props) => {
    const { users, getAllUser } = props;
    useEffect(() => {
        const timer = setTimeout(() => {
            getAllUser()
        }, 300);
        return () => {
            clearTimeout(timer);
        };
    }, [getAllUser]);
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th><label>Id</label></th>
                        <th><label>FullName</label></th>
                        <th><label>Gender</label></th>
                        <th><label>BirthDay</label></th>
                        <th><label>Address</label></th>
                        <th><label>Phone</label></th>
                        <th><label>Username</label></th>
                        <th><label>Email</label></th>
                        <th><label>Role</label></th>
                        <th><label>Active</label></th>
                        <th><label>Payment</label></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((data: User, i: number) => (
                        <tr key={i}>
                            <td data-label="Id">{i + 1}</td>
                            <td data-label="Full name">{data.fullName}</td>
                            <td data-label="Gender">{data.gender}</td>
                            <td data-label="Birthday">{data.birthday}</td>
                            <td data-label="Address">{data.address}</td>
                            <td data-label="Phone">{data.phone}</td>
                            <td data-label="Username">{data.username}</td>
                            <td data-label="Email">{data.email.split('gmail.com').join('...')}</td>
                            <td data-label="Role">{data.roles[0] + ',' + data.roles[1]}</td>
                            <td data-label="Active" >{data.active === true ? "true" : "false"}</td>
                            <td data-label="Payment"><button className="btn-invoice">Make Payment </button></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>

        </>
    )
};
export default connector(User);