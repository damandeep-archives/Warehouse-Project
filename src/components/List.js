import { useSelector } from "react-redux";
import {
  selectWarehouses,
  selectFilteredWarehouses,
} from "../features/warehouse/warehouseSlice";
import Warehouse from "./Warehouse";
import "./List.css";
import { filter } from "../features/warehouse/warehouseSlice";
import { useDispatch } from "react-redux";
import { useState, useRef } from "react";

function List() {
  const warehouseList = useSelector(selectWarehouses);
  const filteredList = useSelector(selectFilteredWarehouses);
  console.log(filteredList);
  const dispatch = useDispatch();

  const [filterset, setFilterset] = useState(false);

  console.log(warehouseList);

  const filterbykey = (filterBasis, e) => {
    console.log(filterBasis, e);
    let val = e.target.value;
    console.log(val);

    dispatch(filter({ key: filterBasis, val: val }));
    setFilterset(true);
  };

  const removeFilters = () => {
    setFilterset(false);
    document.getElementById("cluster").value = "";
    document.getElementById("city").value = "";
  };

  return (
    <div className="collection ">
      <h1>Project Warehouse</h1>

      <h4 className="head">Filters:-</h4>
      <div className="filter">
        <div className="cluster filterkey">
          <h3>Cluster</h3>
          <select
            onChange={(e) => filterbykey("cluster", e)}
            name="cluster"
            id="cluster"
          >
            <option disabled selected value="">
              Sort by cluster
            </option>
            <option value="cluster-a-32">cluster-a-32</option>
            <option value="cluster-a-1">cluster-a-1</option>
            <option value="cluster-a-21">cluster-a-21</option>
            <option value="cluster-a-2">cluster-a-2</option>
            <option value="cluster-v-2">cluster-v-2</option>
          </select>
        </div>

        <div className="city filterkey ms-2">
          <h3>City</h3>
          <select
            onChange={(e) => filterbykey("city", e)}
            name="city"
            id="city"
          >
            <option disabled selected value="">
              Sort by city
            </option>
            <option value="Delhi">Delhi</option>
            <option value="Chennai">Chennai</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Indore">Indore</option>
            <option value="Guwahati  ">Guwahati </option>
          </select>
        </div>
      </div>

      <br></br>

      <div className="refreshButton">
        <button className="btn" onClick={removeFilters}>
          REFRESH
        </button>
      </div>
      <table>
        <tbody>
          <tr className="labels">
            <th className="w-7">Id</th>
            <th className="w-10">Code</th>
            <th className="w-20">Name</th>
            <th className="w-10">City</th>
            <th className="w-10">Space</th>
            <th className="w-10">Cluster</th>
            <th className="w-20">Type</th>
            <th className="w-10">Live Status</th>
            <th className="w-20">Registeration Status</th>
          </tr>

          {!filterset &&
            warehouseList?.map((ele) => <Warehouse key={ele.id} ele={ele} />)}

          {filteredList?.map((ele) => (
            <Warehouse key={ele.id} ele={ele} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
