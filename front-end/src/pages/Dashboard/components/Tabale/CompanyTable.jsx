import React, { useEffect, useState } from "react";
import api from "../../../../config/api";

const CompanyTable = () => {

    const initialState = [{
        _id: "",
        companyId: "",
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

    // console.log(company)
    return (
        <table >
            <thead>
                <tr>
                    <th>Mã công ty</th>
                    <th>Tên Công ty</th>
                    <th>Mô tả công ty</th>
                    <th>Người hướng dẫn</th>
                </tr>
            </thead>
            <tbody>
                {company.map((item, index) => (
                    <tr key={index}>
                        <td>{item._id}</td>
                        <td>{item.companyId}</td>
                        <td>{item.mentorCompany}</td>
                        <td>{item.mentorCompany}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default CompanyTable;