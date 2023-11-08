import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

const Shop = () => {
  const dispatch = useDispatch();
  const { WithdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className="container mx-9">
      <h2>Deposit-Withdraw Money</h2>
      <button
        className="btn btn-primary btn btn-secondary mx-2"
        onClick={() => {
          WithdrawMoney(100);
        }}
      >
        <strong> Withdraw</strong>
      </button>
      Update balance
      <button
        className="btn btn-primary btn btn-secondary mx-2"
        onClick={() => {
          depositMoney(100);
        }}
      >
        <strong> Deposit</strong>
      </button>
      {/* <button className="btn btn-primary btn btn-secondary mx-2" onClick={()=>{dispatch(actionCreators.WithdrawMoney(100))}}>-</button>
        Update balance
      <button className="btn btn-primary btn btn-secondary mx-2"onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
    </div>
  );
};

export default Shop;
