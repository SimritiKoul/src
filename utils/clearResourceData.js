import { resourceActions } from "../context/resourceTemplate";
export default clearResourceData = (dispatch) => {
  dispatch(resourceActions.clear())
}