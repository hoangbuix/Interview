import React, { useEffect } from "react";
import { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import LightBoxImg from "../../components/LightBoxImg/LightBoxImg";
import { decode } from "../../helpers/decode";
import { getUserById } from "../../reduxs/thunks/user-thunk"

const mapStateToProps = (state: AppState) => ({
    user: state.user.user
})

const mapDispatchToProps = {
    getUserById
}

const connector = connect(mapStateToProps, mapDispatchToProps)

interface Props extends ConnectedProps<typeof connector> { }
const Profile: React.FC<Props> = (props: Props) => {
    const { user, getUserById } = props;
    const [data, setData] = useState<User>();
    const params: { idUser: string } = useParams()
    useEffect(() => {
        let token = localStorage.getItem('token');
        let de_scode = decode(token);
        const data = JSON.parse(de_scode)
        const { idUser } = params
        if (user === null) {
            getUserById(data._id)
        }

        setData(user)

    }, [getUserById, params])
    localStorage.setItem('user', user?.avatar)
    console.log(user)

    return (
        <>
            <Header />

            <LightBoxImg />
            {/* <div className="ui semantic container">
                <h1>xxx</h1>
            </div> */}
        </>
    )
};

export default connector(Profile);