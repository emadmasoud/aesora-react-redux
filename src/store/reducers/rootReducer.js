import { combineReducers } from "redux";
//import { reducer as formReducer } from "redux-form";
import navigationReducer from "./navigationReducers/navigationReducer";
import AuthReducers from "./authReducers/authReducers";
// import ErrorReducer from "./ErrorReducer/errorReducer";
// import FoodConsumeReducer from "./HrReducer/FoodReducer/foodConsumedReducer";
// import DashboardReducer from "./DashboardReducer/DashboardReducer";
// import MovementApplicationReducer from "./HrReducer/ApplicationReducer/movementApplicationReducer";
// import Attendence from './HrReducer/attendence/attendence'
// import visitorReducer from './HrReducer/attendence/attendence'

// import StoreRequistion from './inventory/inventory';
// import CommonFrameToggle from './commonFrame/commonFrameReducer'
// import monthlyStatus from './HrReducer/DailyAttendance/dailyAttendanceReducer'

// import IndentEntryReducer from './inventory/inventory'
// import issuReturnReducers from './inventory/inventory'
// import delivaryReturnReducers from './inventory/inventory'
// import purchaseReturnReducers from './inventory/inventory'
// import issueForProductionReducers from './inventory/inventory'

const rootReducer = combineReducers({
  menulist: navigationReducer,
  // form: formReducer,
  auth: AuthReducers,
  // error: ErrorReducer,
  // dashboard: DashboardReducer,
  // foodConusmedData: FoodConsumeReducer,
  // movementApplicationData: MovementApplicationReducer,
  // attendence: Attendence,
  // visitorpostData: visitorReducer,
  // storerequistion: StoreRequistion,
  // monthlyStatus: monthlyStatus,
  // commonFrameToggle: CommonFrameToggle,
  // intdentEntry: IndentEntryReducer,
  // issueReturn: issuReturnReducers,
  // DelivaryReturn: delivaryReturnReducers,
  // PurchaseReturn: purchaseReturnReducers,
  // issueForProduction: issueForProductionReducers

});

export default rootReducer;
