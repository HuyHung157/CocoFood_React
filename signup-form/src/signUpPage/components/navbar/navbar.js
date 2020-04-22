import React, { Component } from 'react';
import ChangLanguage from './changeLanguage/changLanguage';

class Navbar extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__content header__items row">
                    <div className="header__logo header__item col-3">
                        <a href="/">
                            <img className="logo" src="img/logo_CocoFood.png" alt="logo" />
                        </a>
                    </div>
                    <div className="header__navbar header__item col-6">
                        <nav className="navbar  navbar-light">
                            {/* <a class="navbar-brand" href="#">Navbar</a> */}
                            <button className="btn__toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Trang Chủ</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Giới Thiệu</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Liên Hệ</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="header__lookup header__search header__item col-1"><i className="fa fa-search" /></div>                 
                    <ChangLanguage/>
                </div>
            </div>
        );
    }
}

export default Navbar;
