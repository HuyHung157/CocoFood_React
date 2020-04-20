import * as ActionType from "../contants/ActionTypes";

let initialState = {
  listProvince: [],
  movie: {},
};

const locateReducer = (state = initialState, action) => {
  switch (action.type) {
    //Lấy DS các tỉnh thành
    case ActionType.GET_LIST_PROVINCE:
      state.listProvince = action.listProvince;
      return { ...state };
    default:
      return { ...state };
  }
};

export default locateReducer;
