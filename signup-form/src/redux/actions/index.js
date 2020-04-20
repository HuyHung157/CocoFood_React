import * as ActionTypes from "../contants/ActionTypes";
import { locateService } from "../../service";
// import Axios from "axios";

export const actGetListProvinceAPI = () => {
  return dispatch => {
    locateService.GetProvince()
      .then(result => {
        console.log(result)
        // dispatch({
        //   type: ActionTypes.GET_LIST_PROVINCE,
        //   listProvince: result.data
        // });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

