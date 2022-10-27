import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeadd, deleterec, editrec } from "../Redux/action";
import styles from "./Table.module.css";

export const Table = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  {
    data.map((el) => (
      <div>
        {" "}
        {el.printbar ? "Y" : "N"}
        {el.printname ? "Y" : "N"}
        {el.printtest ? "Y" : "N"}
        {el.checksum ? "Y" : "N"}
        {el.skip ? "Y" : "N"}
      </div>
    ));
  }

  const deleterow = (el) => {
    // console.log(el);
    const payload = {
      el,
    };
    dispatch(deleterec(payload));
  };
  const editrow = (el) => {
    console.log(el);
    const payload = {
      el,
      isEdit: true,
    };
    dispatch(editrec(payload));
  };
  const adddata = () => {
    const payload = {
      isAdd: true,
    };
    dispatch(changeadd(payload));
  };

  return (
    <div>
      <div className={styles.hedder}></div>
      <div className={styles.tablediv}>
        {" "}
        <table>
          <thead>
            <tr>
              <th>PRINTER</th>
              <th>NAME</th>
              <th>WORKSTATION</th>
              <th>TYPE</th>
              <th>Action</th>
            </tr>
          </thead>
          {data.map((el) => (
            <tbody>
              <tr>
                <td>{el.recid}</td>
                <td>{el.name}</td>
                <td>{el.stationnum}</td>
                <td>{el.prtype}</td>
                <td>
                  <button
                    className={styles.deletebtn}
                    onClick={() => deleterow(el.recid)}
                  >
                    DELETE
                  </button>
                  <button
                    className={styles.editbtn}
                    onClick={() => editrow(el)}
                  >
                    EDIT
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <button className={styles.addbtn} onClick={adddata}>
          Add
        </button>
      </div>
    </div>
  );
};
