import React from "react";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import Slide from "../../components/Slide/Slide";


const Home = () => {
    return (
        <div>
            <Navbar />
            <Slide interval={3000}
                images={[
                    'https://pixy.org/src/21/219269.jpg',
                    'https://pixy.org/src/21/219269.jpg',
                    'https://pixy.org/src/21/219269.jpg',
                    'https://pixy.org/src/21/219269.jpg'
                ]}
            />
            <Card />
        </div>
    )
};

export default Home;