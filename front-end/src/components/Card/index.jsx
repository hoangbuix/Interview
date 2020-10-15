import React from "react";
import styled from "styled-components";

const Card = (props) => {
    const { data, index } = props;
    console.log(data);

    return (
        <Container>
            <WrapperBase>
                <CardBody>
                    <h3>Sinh viên thực hiện: {data.userId}</h3>
                    <h3>Giáo viên hướng dẫn: {data.teacherId}</h3>
                    <h3>Thông tin: </h3>
                    <ul>
                        <li>Tên báo cáo: {data.info[index].reportName}</li>
                        <li>Đối thoại: {data.info[index].meetId}</li>
                        <li>Nội dung chi tiết:
                            <ul>
                                <li>Nội dung báo cáo: {data.info[index].content[index].contentReport}</li>
                                <li>Phản hồi của giáo viên: {data.info[index].content[index].teacherRequest}</li>
                                <li>Nội dung dự kiến: {data.info[index].content[index].expectedContent}</li>
                                <li>Ảnh: <Image src={data.info[index].content[index].image} alt="image" /></li>
                            </ul>
                        </li>
                        <li>Ngày báo cáo: </li>
                    </ul>
                </CardBody>
            </WrapperBase>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    background-color: wheat;
    width: 25vw;
    height: 90vh;
    margin: 20px;
    border-radius: 10px;
`

const WrapperBase = styled.div`
    padding: 20px;
`;

const CardBody = styled.div`
    color: black;
`;

const Image = styled.img`
    display: flex;
    width: 200px;
    max-width: 200px;
    height: auto;
`

export default Card;