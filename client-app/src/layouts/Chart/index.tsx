import axios from "axios";
import React from "react";
import { Line } from "react-chartjs-2";

const Chart: React.FC = () => {
    const [chartData, setChartData] = React.useState<Object>({});

    const chart = () => {
        let empSal: any = [];
        let empAge: any = [];
        axios
            .get("http://dummy.restapiexample.com/api/v1/employees")
            .then(res => {
                // console.log(res);
                for (const dataObj of res.data.data) {
                    empSal.push(parseInt(dataObj.employee_salary));
                    empAge.push(parseInt(dataObj.employee_age));
                }
                setChartData({
                    labels: empAge,
                    datasets: [
                        {
                            label: "level of thiccness",
                            data: empSal,
                            backgroundColor: ["rgba(75, 192, 192, 0.6)"],
                            borderWidth: 4
                        }
                    ]
                });
            })
            .catch(err => {
                console.log(err);
            });
        console.log(empSal, empAge);
    }
    React.useEffect(() => {
        chart()
    }, [])
    return (
        <div>
            <h1>Chart</h1>
            <div style={{ height: "500px", width: "500px" }}>
                <Line
                    data={chartData}
                    options={{
                        responsive: true,
                        title: { text: "THICCNESS SCALE", display: true },
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        autoSkip: true,
                                        maxTicksLimit: 10,
                                        beginAtZero: true
                                    },
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ]
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default Chart;