import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUserList } from "./userSlice";
import { message } from "antd";

export default function List() {
  // Đẩy data lên redux => useDispatch
  let dispatch = useDispatch();
  let userList = useSelector((state) => state.userSlice.userList);

  useEffect(() => {
    fetchUserList();
  }, []);

  let fetchUserList = () => {
    axios
      .get("https://653122f94d4c2e3f333c72a3.mockapi.io/users")
      .then((res) => {
        dispatch(setUserList(res.data));
        message.success("Lấy dữ liệu thành công!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let renderUserList = () => {
    return userList.map((user) => {
      return (
        <tbody key={user.id}>
          <tr>
            <td>{user.name}</td>
            <td>{user.account}</td>
            <td>{user.password}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => {
                  handleDeleteUser(user.id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      );
    });
  };

  let handleDeleteUser = (id) => {
    axios
      .delete(`https://653122f94d4c2e3f333c72a3.mockapi.io/users/${id}`)
      .then((res) => {
        fetchUserList();
        message.success("Xoá thành công");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="col-7">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Account</th>
            <th scope="col">Password</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {renderUserList()}
      </table>
    </div>
  );
}
