import React, { useEffect, useState } from "react";
import "./styles.scss";
import api from "../../../../../config/api";
// import authHeader  from "../../../../../services/auth-header";

const CompanyTable = () => {

    const initialState = [{
        _id: "",
        companyName: "",
        description: "",
        mentorCompany: "",

    }]
    const [company, setCompany] = useState(initialState);

    useEffect(() => {
        getAllCompany();
    }, [])

    const getAllCompany = async () => {
        await api.get("/company/get-all").then(res => {
            // console.log(res.data);
            setCompany(JSON.parse(JSON.stringify(res.data)))
        }).catch(err => console.log(err));
    }

    console.log(company)
    return (
        <table className="responstable">
            <tbody>
                <tr>
                    <th>Main driver</th>
                    <th data-th="Driver details"><span>Mã công ty</span></th>
                    <th>Tên công ty</th>
                    <th>Mô tả</th>
                    <th>Người hướng dẫn</th>
                </tr>
                {
                    company.map((item) => (
                        <tr key={item._id}>
                            <td><input type="radio" /></td>
                            <td>{item._id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.description}</td>
                            <td>{item.mentorCompany}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

    )
};

export default CompanyTable;