import React, { Component } from 'react';
import BannerForm from './components/bannerForm/bannerForm';
import BannerScan from './components/bannerScan/bannerScan';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';

export default class SignUpPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="body">
                    <BannerForm />
                    <BannerScan />
                </div>
                <Footer />
            </div>
        );
    }
}
