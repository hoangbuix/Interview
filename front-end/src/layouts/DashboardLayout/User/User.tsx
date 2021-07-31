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
        setTimeout(() => {
            if (users === null) { getAllUser() }
        }, 300);
        // return () => {
        //     clearTimeout(timer);
        // };
    }, [users, getAllUser]);
    console.log(users)
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th><label>Invoice</label></th>
                        <th><label>Details</label></th>
                        <th><label>Due Date</label></th>
                        <th><label>Amount</label></th>
                        <th><label>Payment</label></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="Invoice">A11289678234</td>
                        <td data-label="Details">With Payment of Tax</td>
                        <td data-label="Due Date">August 13, 2018</td>
                        <td data-label="Amount">$78.00</td>
                        <td data-label="Payment"><button className="btn-invoice">Make Payment </button></td>
                    </tr>
                    <tr>
                        <td data-label="Invoice">B11289678234</td>
                        <td data-label="Details">With Payment of Tax</td>
                        <td data-label="Due Date">July 13, 2018</td>
                        <td data-label="Amount">$56.00</td>
                        <td data-label="Payment"><button className="btn-invoice">Make Payment</button></td>
                    </tr>
                    <tr>
                        <td data-label="Invoice">C11289678234</td>
                        <td data-label="Details">With Payment of Tax</td>
                        <td data-label="Due Date">June 13, 2018</td>
                        <td data-label="Amount">$46.00</td>
                        <td data-label="Payment"><button className="btn-invoice">Make Payment</button></td>
                    </tr>
                    <tr>
                        <td data-label="Invoice">D11289678234</td>
                        <td data-label="Details">With Payment of Tax</td>
                        <td data-label="Due Date">May 13, 2018</td>
                        <td data-label="Amount">$28.00</td>
                        <td data-label="Payment"><button className="btn-invoice">Make Payment</button></td>
                    </tr>
                </tbody>
            </table>

        </>
    )
};
export default connector(User);