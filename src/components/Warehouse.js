import "./Warehouse.css";
import {  useNavigate } from "react-router-dom";

function Warehouse({ ele }) {
  const navigate = useNavigate();

 const navigatetoDetails=(ele)=>{
    console.log(ele);
   navigate("/details/"+ele.id);
  }

//   console.log(ele);
  return (
    <tr className="flex datarow" onClick={()=>navigatetoDetails(ele)}>
     <td className="w-7">{ele.id}</td> 
     <td className="w-10">{ele.code}</td>
     <td className="w-20" >{ele.name}</td> 
    <td className="w-10" >{ele.city}</td>
    <td className="w-10" >{ele.space_available}</td>
    <td className="w-10" >{ele.cluster}</td>
    <td className="w-20" >{ele.type}</td>
    <td className="w-10" >{ele.is_live?'true':'false'}</td>
    <td className="w-20" >{ele.is_registered?'true':'false'}</td>


    </tr>
  );
}

export default Warehouse;
