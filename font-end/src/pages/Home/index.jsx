import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Card/>
                <Footer/>
            </div>
        );
    }
}

export default HomePage;