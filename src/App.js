import { useSelector } from "react-redux";
import "./App.css";
import { Addform } from "./Component/Addform";
import { Editform } from "./Component/Editform";
import { Table } from "./Component/Table";

function App() {
  const isEdit = useSelector((state) => state.isEdit);
  const isAdd = useSelector((state) => state.isAdd);

  return isEdit ? <Editform /> : isAdd ? <Addform /> : <Table />;
}

export default App;
