import React, { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Refresh from "@material-ui/icons/Refresh";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import CheckBoxOutlineBlank from "@material-ui/icons/CheckBoxOutlineBlank";
import FilterListIcon from "@material-ui/icons/FilterList";

const iconStyle = {
  smallIcon: {
    fontSize: "1rem"
  }
};

const tableIcons = {
  Checkbox: forwardRef((props, ref) => (
    <CheckBoxOutlineBlank {...props} ref={ref} />
  )),
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => (
    <DeleteIcon {...props} ref={ref} style={iconStyle.smallIcon} />
  )),
  DetailPanel: forwardRef((props, ref) => <></>),
  Edit: forwardRef((props, ref) => (
    <EditIcon {...props} ref={ref} style={iconStyle.smallIcon} />
  )),
  Export: forwardRef((props, ref) => (
    <SaveAlt {...props} ref={ref} fontSize="small" />
  )),
  Filter: forwardRef((props, ref) => (
    <FilterListIcon {...props} ref={ref} style={iconStyle.smallIcon} />
  )),
  FirstPage: forwardRef((props, ref) => (
    <FirstPage {...props} ref={ref} fontSize="small" />
  )),
  LastPage: forwardRef((props, ref) => (
    <LastPage {...props} ref={ref} fontSize="small" />
  )),
  NextPage: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} fontSize="small" />
  )),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} fontSize="small" />
  )),
  Refresh: forwardRef((props, ref) => (
    <Refresh {...props} ref={ref} fontSize="small" />
  )),
  ResetSearch: forwardRef((props, ref) => (
    <Clear {...props} ref={ref} fontSize="small" />
  )),
  Search: forwardRef((props, ref) => (
    <Search {...props} ref={ref} fontSize="small" />
  )),
  SortArrow: forwardRef((props, ref) => (
    <ArrowDownward {...props} ref={ref} fontSize="small" />
  )),
  ThirdStateCheck: forwardRef((props, ref) => (
    <Remove {...props} ref={ref} fontSize="small" />
  )),
  ViewColumn: forwardRef((props, ref) => (
    <ViewColumn {...props} ref={ref} fontSize="small" />
  ))
};

export default tableIcons;
