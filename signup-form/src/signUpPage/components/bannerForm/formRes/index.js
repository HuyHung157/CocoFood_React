import * as actions from "../../../../redux/actions";
import { connect } from "react-redux";

import FormRes from "./formRes"

const mapStateToProps = state => {
    return {
        listProvince: state.locateReducer.listProvince,
        provinceCode: state.locateReducer.provinceCode,
        listDistrict: state.locateReducer.listDistrict,
        districtCode: state.locateReducer.districtCode,
        listWard: state.locateReducer.listWard,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getListProvince: () => {
            dispatch(actions.actGetListProvinceAPI());
        },
        postProvinceCode: (provinceCode) => {
            dispatch(actions.actSetProvinceCode(provinceCode));
        },
        getListDistrict: (provinceCode) => {
            dispatch(actions.actGetListDistrictAPI(provinceCode));
        },
        postDistrictCode: (districtCode) => {
            dispatch(actions.actSetDistrictCode(districtCode));
        },
        getListWard: (provinceCode, districtCode) => {
            dispatch(actions.actGetListWardAPI(provinceCode, districtCode));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormRes);