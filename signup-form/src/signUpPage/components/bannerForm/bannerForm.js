import React from 'react';
import FormRes from './formRes/formRes';
// import { useTranslation } from 'react-i18next';
import BannerNav from './bannerNav/bannerNav';
import BannerInfo from './bannerInfo/bannerInfo';

const BannerForm = () => {
    // const { t } = useTranslation();
    return (
        <div className="body__banner">
            <BannerNav />
            <div className="banner__group1">
                <BannerInfo />
                {/* <FormSignUp/> */}
                <FormRes />
            </div>
        </div>
    );
}

export default BannerForm;
