import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import api from "../../config/api";


const Homepage = () => {
    const initialState = [{
        _id: "",
        userId: "",
        teacherId: "",
        info: [
            {
                content: [
                    {
                        _id: "",
                        contentReport: "",
                        teacherRequest: "",
                        expectedContent: "",
                        image: ""
                    }
                ],
                _id: "",
                reportName: "",
                meetId: "",
                reportDate: ""
            }
        ],
    }]

    const [report, setReport] = useState(initialState)

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        await api.get("report/get-all").then(res => {
            setReport(JSON.parse(JSON.stringify(res.data)))
        }).catch(err => console.log(err))
    }
    // console.log(report)

    return (
        <div>
            <Header />
            {
                report.map((data, index) => (
                    // <div key={i}>
                    //     <p>{data.info[i].content[i].contentReport}</p>
                    //     <h1>{data._id}</h1>
                    //     <p>{data.userId}</p>
                    // </div>
                    <Card data={data} index={index} key={index} />
                ))
            }
        </div>
    )
};

export default Homepage;