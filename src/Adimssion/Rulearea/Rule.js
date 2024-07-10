import React, { useState } from "react";
import "./Rule.css";
import { NavLink } from "react-router-dom";
// import {  Routes, Route } from 'react-router-dom';
import General from "./General";
import FeeShedule from "./FeeShedule";
import RuleConduct from "./RuleConduct";
import Attendence from "./Attendence";
import Regulation from "./Regulation";
import Withdrawl from "./Withdrawl";

export default function Rule() {
  const [displayGeneral, setDisplayGeneral] = useState(true);
  const [displayFeeShedule, setDisplayFeeShedule] = useState(false);
  const [displayRuleConduct, setDisplayRuleConduct] = useState(false);
  const [displayAttendance, setDisplayAttendance] = useState(false);
  const [displayRegulation, setDisplayRegulation] = useState(false);
  const [displayWithdrawalAdmission, setDisplayWithdrawalAdmission] =
    useState(false);
  const onClickGeneral = () => {
    setDisplayGeneral(true);
    setDisplayFeeShedule(false);
    setDisplayRuleConduct(false);
    setDisplayAttendance(false);
    setDisplayRegulation(false);
    setDisplayWithdrawalAdmission(false);
  };
  const onClickFeeShedule = () => {
    setDisplayGeneral(false);
    setDisplayFeeShedule(true);
    setDisplayRuleConduct(false);
    setDisplayAttendance(false);
    setDisplayRegulation(false);
    setDisplayWithdrawalAdmission(false);
  };
  const onClickRuleConduct = () => {
    setDisplayGeneral(false);
    setDisplayFeeShedule(false);
    setDisplayRuleConduct(true);
    setDisplayAttendance(false);
    setDisplayRegulation(false);
    setDisplayWithdrawalAdmission(false);
  };
  const onClickAttendance = () => {
    setDisplayGeneral(false);
    setDisplayFeeShedule(false);
    setDisplayRuleConduct(false);
    setDisplayAttendance(true);
    setDisplayRegulation(false);
    setDisplayWithdrawalAdmission(false);
  };
  const onClickRegulation = () => {
    setDisplayGeneral(false);
    setDisplayFeeShedule(false);
    setDisplayRuleConduct(false);
    setDisplayAttendance(false);
    setDisplayRegulation(true);
    setDisplayWithdrawalAdmission(false);
  };
  const onClickWithdrawelAdmission = () => {
    setDisplayGeneral(false);
    setDisplayFeeShedule(false);
    setDisplayRuleConduct(false);
    setDisplayAttendance(false);
    setDisplayRegulation(false);
    setDisplayWithdrawalAdmission(true);
  };
  return (
    <div className="rule">
      <div className="ruleimgmain"></div>
      <div className="rulemain">
        <div className="rulemainbar" onClick={onClickGeneral}>
          <NavLink to="/admission/rule/general" className="rulelink">
            General rules
          </NavLink>
        </div>
        <div className="rulemainbar" onClick={onClickFeeShedule}>
          <NavLink to="/admission/rule/feeShedule" className="rulelink">
            Fee Schedule
          </NavLink>
        </div>
        <div className="rulemainbar" onClick={onClickRuleConduct}>
          <NavLink to="/admission/rule/ruleconduct" className="rulelink">
            Rule of Conduct
          </NavLink>
        </div>
        <div className="rulemainbar" onClick={onClickAttendance}>
          <NavLink to="/admission/rule/attendance" className="rulelink">
            Attendance /Leave Of Absence in the School
          </NavLink>
        </div>
        <div className="rulemainbar" onClick={onClickRegulation}>
          <NavLink to="/admission/rule/regulation" className="rulelink">
            Rule and Regulations of College
          </NavLink>
        </div>
        <div className="rulemainbar" onClick={onClickWithdrawelAdmission}>
          <NavLink
            to="/admission/rule/withdrawaladmission"
            className="rulelink"
          >
            Withdrawal of Admission
          </NavLink>
        </div>
      </div>

      {/* <Routes>
        <Route path='/admission/rule/general' element={<General/>}></Route>
        <Route path='/admission/rule/feeShedule' element={<FeeShedule />}></Route>
      </Routes> */}

      {displayGeneral ? <General /> : null}
      {displayFeeShedule ? <FeeShedule /> : null}
      {displayRuleConduct ? <RuleConduct /> : null}
      {displayAttendance ? <Attendence /> : null}
      {displayRegulation ? <Regulation /> : null}
      {displayWithdrawalAdmission ? <Withdrawl /> : null}
    </div>
  );
}
