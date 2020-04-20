import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as actions from "../../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

export default function FormRes() {

    useEffect(() => {
        dispatch(actions.actGetListProvinceAPI())
    }, []);

    const dispatch = useDispatch();
    const listProvince = useSelector(state => state.locateReducer.listProvince)

    const { t } = useTranslation();

    const signUpUserSchema = Yup.object().shape({
        nameRestaurant: Yup.string()
            .required(t('message.nameRestaurant')),
        namePartner: Yup.string()
            .required(t('message.namePartner')),
        phoneNumber: Yup.string()
            .min(9, t('message.phoneNumber_1'))
            .required(t('message.phoneNumber')),
        email: Yup.string()
            .email(t('message.email_1'))
            .required(t('message.email')),
        city: Yup.string()
            .required(t('message.city')),
        district: Yup.string()
            .required(t('message.district')),
        ward: Yup.string()
            .required(t('message.ward')),
        street: Yup.string()
            .min(6, t('message.street_1'))
            .required(t('message.street')),
        businessType: Yup.string()
            .required(t('message.businessType')),
        website: Yup.string()
            .required(t('message.website')),
    })
    const handleSubmit = (value) => {
        // event.preventDefault();
        // console.log(value);
        const user = {
            taiKhoan: 'Huy Hùng',
            matKhau: value.password,
            email: value.email,
            soDt: value.phoneNumber,
            hoTen: `${value.firstName} ${value.lastName}`,
            maNhom: "GP01",
            maLoaiNguoiDung: "KhachHang",
        };
        this.props.signUpUser(user, this.props.history);
    }

    return (
        <Formik
            initialValues={{
                nameRestaurant: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
                userName: '',
                phoneNumber: '',
            }}
            validationSchema={signUpUserSchema}
            onSubmit={handleSubmit}
            render={formikProps => (
                <div className="banner__form">
                    <div className="form">
                        <div className="form-background">
                            <h3 className="form__title" >{t('form.title')}</h3>
                            <form
                                // noValidate (ngsubmit)="onSubmit()" [formgroup]="rfContact" 
                                className="row form__group">

                                <div className="form__content">
                                    <div className="form-group  row">
                                        <label htmlFor="nameRestaurant-input" className="col-12 col-form-label" >{t('form.nameRestaurant')}</label>
                                        <div className="col-12">
                                            <Field
                                                // className="col-6 input__firstName_signup"
                                                className={'col input__nameRestaurant_signup form-control' + (formikProps.errors.nameRestaurant && formikProps.touched.nameRestaurant ? ' is-invalid' : '')}
                                                type="text"
                                                name="nameRestaurant"
                                                // placeholder="Họ"
                                                onChange={formikProps.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <ErrorMessage name="nameRestaurant" component="span" className="invalid-feedback error col alert alert-danger" />
                                    <div className="form-group  row">
                                        <label htmlFor="namePartner-input" className="col-12 col-form-label" >{t('form.namePartner')}</label>
                                        <div className="col-12">
                                            <Field
                                                className={'input__namePartner_signup form-control' + (formikProps.errors.namePartner && formikProps.touched.namePartner ? ' is-invalid' : '')}
                                                type="text"
                                                name="namePartner"
                                                id="namePartner-input"
                                                onChange={formikProps.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <ErrorMessage name="namePartner" component="span"
                                        className="invalid-feedback error col alert alert-danger"
                                    />
                                    <div className="row">
                                        <div className="form-group row col-6">
                                            <label htmlFor="phoneNumber-input" className="col-12 col-form-label" >{t('form.phoneNumber')}</label>
                                            <div className="col-12">
                                                <Field
                                                    className={'input__phoneNumber_signup form-control' + (formikProps.errors.phoneNumber && formikProps.touched.phoneNumber ? ' is-invalid' : '')}
                                                    type="number"
                                                    name="phoneNumber"
                                                    id="phoneNumber-input"
                                                    onChange={formikProps.handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row col-6">
                                            <label htmlFor="email-input" className="col-12 col-form-label" >{t('form.email')}</label>
                                            <div className="col-12">
                                                <Field
                                                    className={'input__email_signup form-control' + (formikProps.errors.email && formikProps.touched.email ? ' is-invalid' : '')}
                                                    type="text"
                                                    name="email"
                                                    id="email-input"
                                                    onChange={formikProps.handleChange}
                                                />
                                            </div>
                                        </div>
                                        <ErrorMessage name="phoneNumber" component="span" role="alert" className="invalid-feedback error col alert alert-danger" />
                                        <ErrorMessage name="email" component="span" role="alert" className="invalid-feedback error col alert alert-danger" />
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="addressTitle-input" className="col-12 col-form-label" >{t('form.addressTitle')}</label>
                                        <div className="control-group col-12">
                                            <div className="row col-12">
                                                <div className="select col-6 ">
                                                    <select>
                                                        <option >{t('form.city')}</option>
                                                        <option>HCM</option>
                                                        <option>HN</option>
                                                    </select>
                                                </div>
                                                <div className="select col-6 ">
                                                    <select>
                                                        <option >{t('form.district')}</option>
                                                        <option>Quận 1</option>
                                                        <option>Quận 2</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <div className="row col-12">
                                                <div className="select col-6 ">
                                                    <select>
                                                        <option >{t('form.ward')}</option>
                                                        <option>Phường 1</option>
                                                        <option>phường 2</option>
                                                    </select>
                                                </div>
                                                <div className="select col-6 ">
                                                    <Field
                                                        className={'address-input form-control' + (formikProps.errors.street && formikProps.touched.street ? ' is-invalid' : '')}
                                                        type="text"
                                                        name="street"
                                                        placeholder={t("form.street")}
                                                    />
                                                </div>
                                                <ErrorMessage name="street" component="span" className="invalid-feedback error col alert alert-danger" role="alert" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group row col-6">
                                            <label htmlFor="bsType-input" className="col-12 col-form-label" >{t('form.businessType')}</label>
                                            <div className="col-12">
                                                <Field
                                                    className={'businessType-input form-control' + (formikProps.errors.businessType && formikProps.touched.businessType ? ' is-invalid' : '')}
                                                    type="text"
                                                    name="businessType"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row col-6">
                                            <label htmlFor="website-input" className="col-12 col-form-label" >{t('form.website')}</label>
                                            <div className="col-12">
                                                <Field
                                                    className={'businessType-input form-control' + (formikProps.errors.website && formikProps.touched.website ? ' is-invalid' : '')}
                                                    type="url"
                                                    name="website"
                                                />
                                            </div>
                                        </div>
                                        <ErrorMessage name="businessType" component="span" className="invalid-feedback error col alert alert-danger" alert alert-danger role="alert" />
                                        <ErrorMessage name="website" component="span" className="invalid-feedback error col alert alert-danger" alert alert-danger role="alert" />
                                    </div>
                                    {/* Recaptcha */}
                                    <div className="group__btn ">
                                        <div className=" btn__div div__submit">
                                            <button className="btn btn__submit"
                                                type="submit"
                                                disabled={formikProps.isSubmitting}
                                            >SUBMIT</button>
                                        </div>
                                        <div className=" btn__div div__cancel">
                                            <button
                                                className="btn btn__cancel"
                                                type="reset"
                                                disabled={!formikProps.dirty || formikProps.isSubmitting}
                                            >Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
            }
        />
    );
}
