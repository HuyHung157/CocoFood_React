import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className="footer">
                <div className="footer__content row">
                    <div className="footer__info col-6">
                        <div className="infor__group">
                            <h3 >{t('footer.company')}</h3>
                            <ul className="info__items">
                                <li className="info__item">
                                    <span className="info__icon"><i className="fa fa-map-marker-alt" /></span>
                                    <span className="info__text" >{t('footer.address')}</span>
                                </li>
                                <li className="info__item">
                                    <span className="info__icon"><i className="fa fa-envelope" /></span>
                                    <span className="info__text">info@cocofood.com</span>
                                </li>
                                <li className="info__item">
                                    <span className="info__icon"><i className="fa fa-mobile-alt" /></span>
                                    <span className="info__text">+84 911 11 111</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__social col-6">
                        <h3>Social Media</h3>
                        <ul className="social__items">
                            <li className="social__item item_1 facebook">
                                <i className="fab fa-facebook-f" />
                            </li>
                            <li className="social__item google">
                                <i className="fab fa-google" />
                            </li>
                            <li className="social__item twitter">
                                <i className="fab fa-twitter" />
                            </li>
                            <li className="social__item mail">
                                <i className="fa fa-envelope" />
                            </li>
                        </ul>
                        <div className="email__group">
                            <input className="email__info" type="mail" name="mail" id="mail" placeholder="Email" />
                            <div className="button__telegram">
                                <li className="social__item telegram">
                                    <i className="fab fa-telegram-plane" />
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">© Copyright 2020 Cocofood</div>
            </div>
    );
}

export default Footer;
