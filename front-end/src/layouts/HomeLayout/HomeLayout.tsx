import React from "react";
import CardHome from "../../components/CardHome/CardHome";
import Header from "../../components/Header/Header";
import NoticeHome from "../../components/NoticeHome/NoticeHome";

const HomeLayout = () => {
    return (
        <>
            <Header />
            <div className="gird wide">
                <div className="row">
                    <div className="c-0 m-0 l-4">
                        <NoticeHome />
                    </div>
                    <div className="c-12 m-12 l-8">
                        <CardHome />
                        <CardHome />
                        <CardHome />
                        <CardHome />
                    </div>
                </div>
            </div>
        </>
    )
};
export default HomeLayout;