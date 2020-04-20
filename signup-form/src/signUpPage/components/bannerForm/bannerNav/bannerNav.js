import React from 'react';
import { useTranslation } from 'react-i18next';

const BannerNav = () => {
    const {t} = useTranslation();
    return (
        <div className="banner__nav">
            <ul className="navbar__items horizontal-list">
                <li className=" navbar__item">
                    <a className="nav-link active" href="#" >{t('banner.nav_1')}</a>
                </li>
                <li className=" navbar__item">
                    <a className="nav-link" href="#" >{t('banner.nav_2')}</a>
                </li>
                <li className=" navbar__item">
                    <a className="nav-link" href="#" >{t('banner.nav_3')}</a>
                </li>
            </ul>
        </div>
    );
}

export default BannerNav;
