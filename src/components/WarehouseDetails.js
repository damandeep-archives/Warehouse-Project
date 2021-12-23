import { useParams } from "react-router-dom";
import {
  editKey,
  filter,
  findWarehouse,
  selectedWarehouse,
} from "../features/warehouse/warehouseSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

function WarehouseDetails() {
  const dispatch = useDispatch();
  const selected = useSelector(selectedWarehouse);

  let { id } = useParams();

  const [name, setName] = useState("");
  const [cluster, setCluster] = useState("");
  const [city, setCity] = useState("");
  const [space, setSpace] = useState("");
  const [live, setLive] = useState("");

  useEffect(() => {
    let val = dispatch(findWarehouse({ id: id }));
    console.log(val);
  }, []);

  const editValue = (key, val) => {
    dispatch(editKey({ key: key, val: val }));
    dispatch(findWarehouse({ id: id }));
  };

  return (
    <div className="box">
      <h1>Details</h1>
      {selected
        ? selected.map((ele) => (
            <div key={ele.id}>
              <h4>ID: {ele.id} </h4>
              <h4>Code: {ele.code}</h4>
              <h4>Type: {ele.type}</h4>
              <div className="df">
              <h4>
               
                <div className="lab">Name: {ele.name}{" "}</div>
                <input
                  defaultValue={ele.name}
                  onChange={(event) => setName(event.target.value)}
                ></input>
                <button onClick={() => editValue("name", name?name:ele.name)}>Edit</button>
              </h4>
             
              <h4>
               <div  className="lab"> City: {ele.city}{" "}</div>
                <input
                  defaultValue={ele.city}
                  onChange={(event) => setCity(event.target.value)}
                ></input>
                <button onClick={() => editValue("city", city?city:ele.city)}>
                Edit
                </button>
              </h4>
              <h4>
               <div  className="lab"> Space: {ele.space_available}{" "}</div>
                <input
                  defaultValue={ele.space_available}
                  onChange={(event) => setSpace(event.target.value)}
                ></input>
                <button onClick={() => editValue("space", space?space:ele.space_available)}>
                Edit
                </button>
              </h4>
              <h4>
              <div  className="lab">  Cluster: {ele.cluster}{" "}</div>
                <input
                  defaultValue={ele.cluster}
                  onChange={(event) => setCluster(event.target.value)}
                ></input>
                <button onClick={() => editValue("cluster", cluster?cluster:ele.cluster)}>
                Edit
                </button>
              </h4>
             
              <h4>
               <div  className="lab"> Live Status:{ele.is_live ? "true" : "false"}{" "}</div>
                <input
                  defaultValue={ele.is_live ? "true" : "false"}
                  onChange={(event) => setLive(event.target.value)}
                ></input>
                <button onClick={() => editValue("live", live?live:ele.is_live)}>Edit</button>
              </h4>
              <h4  className="lab">
                Registeration Status: {ele.is_registered ? "true" : "false"}
              </h4>
              </div>
            </div>
          ))
        : "No Data Found"}
    </div>
  );
}

export default WarehouseDetails;
