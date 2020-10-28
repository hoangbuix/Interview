import React, {useState} from "react";
import "./MeetItem.scss";

const Input = ({...rest}) => {
    return (
        <input {...rest} style={{color: 'red'}}/>
    )
}

const MeetItem = (props) => {
    const { meet, show } = props;
    const [data, setData] = useState()

    return (
        <div className="__container">
            <div className="__wrapper">
                {meet.map((item, index) => (
                    <div>
                        <div className="__wrapper-input" key={index}>
                            <label>Mã cuộc đối thoại</label>
                            <Input type="text" defaultValue={item._id}/>
                        </div>
                        <div className="__wrapper-input" key={index}>
                            <label>Mã riêng</label>
                            <Input type="text" defaultValue={item.meetId} />
                        </div>
                        <div className="__wrapper-input" key={index}>
                            <label>Tên cuộc đối thoại</label>
                            <Input type="text" defaultValue={item.meetName}/>
                        </div>
                        <div className="__wrapper-input" key={index}>
                            <label>Mô tả chi tiết</label>
                            <Input type="text" defaultValue={item.description}/>
                        </div>
                    </div>
                ))}
                <div className="__wrapper-button">
                    <button type="submit" style={{background: 'blue',}}>Xác nhận </button>
                    <button type="cancel" onClick={show} style={{background: 'red',}}>Hủy bỏ</button>
                </div>
                
            </div>
        </div>
    )
};



export default MeetItem;