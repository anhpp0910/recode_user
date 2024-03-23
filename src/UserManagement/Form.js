import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserList, setUser } from "./userSlice";
import { message } from "antd";

export default function Form() {
  let user = useSelector((state) => state.userSlice.user);
  let { name, account, password } = user;

  let dispatch = useDispatch();
  let handleChangeForm = (e) => {
    let { name, value } = e.target;
    dispatch(setUser({ ...user, [name]: value }));
  };

  let fetchUserList = () => {
    axios
      .get("https://653122f94d4c2e3f333c72a3.mockapi.io/users")
      .then((res) => {
        dispatch(setUserList(res.data));
        message.success("Lấy dữ liệu thành công");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let handleAdd = () => {
    axios
      .post("https://653122f94d4c2e3f333c72a3.mockapi.io/users", user)
      .then((res) => {
        message.success("Đẩy dữ liệu thành công");
        fetchUserList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="col-5 p-5">
      <form className="w-75">
        <input
          value={name}
          name="name"
          className="form-control my-2"
          placeholder="Name"
          onChange={handleChangeForm}
        />
        <input
          value={account}
          name="account"
          className="form-control my-2"
          placeholder="Account"
          onChange={handleChangeForm}
        />
        <input
          value={password}
          name="password"
          className="form-control my-2"
          placeholder="Password"
          onChange={handleChangeForm}
        />
      </form>
      <button className="btn btn-success" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}
