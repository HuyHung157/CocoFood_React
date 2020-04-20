import React from 'react';
import { useTranslation } from 'react-i18next';

const BannerInfo = () => {
    const {t} = useTranslation();
    return (
        <div className="banner__info">
            <div className="info__group">
                <h2 className="banner__title-head" >
                    {t('banner.title')}
                </h2>
                <h2 className="banner__title-mid" >
                    {t('banner.title_1')}
                </h2>
                <h2 className="banner__title-bot" >
                    {t('banner.title_2')}
                </h2>
                <p className="banner__subtitle" >
                    {t('banner.subTitle')}
                </p>
            </div>
        </div>
    );
}

export default BannerInfo;
