import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { canceupdate, updatedata } from "../Redux/action";
import styles from "./Editform.module.css";

export const Editform = () => {
  const data = useSelector((state) => state.currentnewdata.el);
  const [input, setInput] = useState(data);
  const dispatch = useDispatch();
  const cancedata = () => {
    const payload = {
      isEdit: false,
    };

    dispatch(canceupdate(payload));
  };
  const savedata = () => {
    const payload = {
      isEdit: false,
      data: input,
    };
    dispatch(updatedata(payload));
  };
  const inputchange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setInput({ ...input, [name]: checked });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  return (
    <div className={styles.maindiv}>
      <div className={styles.head}>
        <h1>Borcode Printer Information</h1>
      </div>
      <div>
        <h2 className={styles.head}>General info</h2>
        <div className={styles.heddiv}>
          <div className={styles.inpdiv}>
            <input
              type="text"
              name="recid"
              placeholder="Barcode#"
              value={input.recid}
              onChange={inputchange}
            />

            <input
              type="text"
              name="name"
              placeholder="Printer Name"
              value={input.name}
              onChange={inputchange}
            />
          </div>

          <div>
            <select
              type="text"
              placeholder="label type"
              name="prtype"
              value={input.prtype}
              onChange={inputchange}
            >
              <option>printer type</option>
              <option value="blaster">Blaster</option>
              <option value="blaster 2">Blaster 2</option>
              <option value="adventage">Adventages</option>
              <option value="zebra">Zebra</option>
              <option value="sigma">sigma </option>
            </select>
            <input
              type="number"
              name="port"
              placeholder="port command"
              value={input.port}
              onChange={inputchange}
            />
          </div>
          <br />
          <div>
            <input
              id="inp"
              type="text"
              name="stationnum"
              placeholder="stationnum"
              value={input.stationnum}
              onChange={inputchange}
            />
          </div>
        </div>
        <div>
          <h2 className={styles.head}>Addtional Information</h2>
        </div>
        <div>
          <input
            type="number"
            name="height"
            value={input.height}
            placeholder=" label height"
            onChange={inputchange}
          />
          <input
            type="number"
            name="width"
            placeholder=" label width"
            value={input.width}
            onChange={inputchange}
          />
        </div>
        <div>
          <input
            type="number"
            name="linetonext"
            placeholder="  lines to next label "
            value={input.linetonext}
            onChange={inputchange}
          />

          <input
            type="number"
            name="indent"
            value={input.indent}
            placeholder="indent (char)"
            onChange={inputchange}
          />
        </div>
        <div>
          <label>print Barcode </label>{" "}
          <input
            type="checkbox"
            name="printbar"
            value={input.printbar}
            onChange={inputchange}
          />
          <label>print name </label>{" "}
          <input
            type="checkbox"
            name="printname"
            value={input.printname}
            onChange={inputchange}
          />
        </div>
        <div>
          <label>print tests </label>{" "}
          <input
            type="checkbox"
            name="printtest"
            value={input.printtest}
            onChange={inputchange}
          />
          <select
            type="text"
            value={input.pins}
            placeholder="pins"
            name="pins"
            onChange={inputchange}
          >
            <option value="barcode type">Barcode Type</option>
            <option value="bar128">BAR128 </option>
            <option value="bar128c">BAR128C</option>
            <option value="bar128c">BAR25</option>
            <option value="bar39">BAR39</option>
            <option value="codabar">CODABAR</option>
          </select>
        </div>
        <div>
          <select
            type="text"
            placeholder="label type"
            name="labelType"
            value={input.labelType}
            onChange={inputchange}
          >
            <option value="M">Label Type</option>
            <option value="Y">Small 2 column </option>
            <option value="S">2 colomuns </option>
            <option value="A"> small </option>
            <option value="O"> smaller </option>
            <option value="B"> Barcode+accession only </option>
            <option value="C"> cytology 2 "X2" </option>
            <option value="SRC"> small Rectangle circle </option>
          </select>

          <input
            type="text"
            name="extra"
            placeholder="Number of Extra Labels"
            value={input.extra}
            onChange={inputchange}
          />
        </div>
        <div>
          <label>use checksum</label>{" "}
          <input
            className={styles.check}
            type="checkbox"
            name="checksum"
            value={input.checksum}
            onChange={inputchange}
          />
          <label>Do NOT blank label </label>{" "}
          <input
            type="checkbox"
            value={input.skip}
            name="skip"
            onChange={inputchange}
          />
        </div>

        <div>
          <button onClick={cancedata}>Cancel</button>
          <button onClick={savedata}>SAVE</button>
        </div>
      </div>
    </div>
  );
};
