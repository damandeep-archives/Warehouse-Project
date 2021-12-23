import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  warehouseList: [
    {
      name: "Warehouse-165",
      code: "W-00001",
      id: 1,
      city: "Delhi",
      space_available: 1234,
      type: "Leasable Space",
      cluster: "cluster-a-32",
      is_registered: true,
      is_live: false,
    },
    {
      name: "Warehouse-276",
      code: "W-00002",
      id: 2,
      city: "Chennai",
      space_available: 124,
      type: "Warehouse Service",
      cluster: "cluster-a-1",
      is_registered: true,
      is_live: false,
    },
    {
      name: "Warehouse-3039",
      code: "W-00003",
      id: 3,
      city: "Indore",
      space_available: 134,
      type: "Warehouse Service",
      cluster: "cluster-a-1",
      is_registered: true,
      is_live: false,
    },
    {
      name: "Warehouse-324",
      code: "W-00004",
      id: 4,
      city: "Chennai",
      space_available: 12,
      type: "Leasable Space",
      cluster: "cluster-a-21",
      is_registered: true,
      is_live: false,
    },
    {
      name: "Warehouse-5454",
      code: "W-00005",
      id: 5,
      city: "Chennai",
      space_available: 1243434,
      type: "Warehouse Service",
      cluster: "cluster-a-21",
      is_registered: true,
      is_live: false,
    },
    {
      name: "Warehouse-4345",
      code: "W-00006",
      id: 6,
      city: "Chennai",
      space_available: 1,
      type: "Leasable Space",
      cluster: "cluster-a-21",
      is_registered: true,
      is_live: false,
    },
    {
      name: "Warehouse-3455",
      code: "W-00007",
      id: 7,
      city: "Mumbai",
      space_available: 4,
      type: "Leasable Space",
      cluster: "cluster-a-2",
      is_registered: true,
      is_live: false,
    },
    {
      name: "Warehouse-23455",
      code: "W-00008",
      id: 8,
      city: "Bangalore",
      space_available: 3456,
      type: "Warehouse Service",
      cluster: "cluster-a-21",
      is_registered: true,
      is_live: true,
    },
    {
      name: "Warehouse-6457",
      code: "W-00009",
      id: 9,
      city: "Bangalore",
      space_available: 1234545,
      type: "Warehouse Service",
      cluster: "cluster-a-1",
      is_registered: true,
      is_live: false,
    },
    {
      name: "Warehouse-32456",
      code: "W-000010",
      id: 10,
      city: "Guwahati",
      space_available: 121234,
      type: "Warehouse Service",
      cluster: "cluster-a-1",
      is_registered: true,
      is_live: true,
    },
    {
      name: "Warehouse-3245678",
      code: "W-000011",
      id: 11,
      city: "Delhi",
      space_available: 98,
      type: "Leasable Space",
      cluster: "cluster-v-2",
      is_registered: true,
      is_live: false,
    },
    {
      name: "Warehouse-4567",
      code: "W-000012",
      id: 12,
      city: "Indore",
      space_available: 97,
      type: "Warehouse Service",
      cluster: "cluster-a-1",
      is_registered: true,
      is_live: true,
    },
    {
      name: "Warehouse-458",
      code: "W-000013",
      id: 13,
      city: "Delhi",
      space_available: 654,
      type: "Leasable Space",
      cluster: "cluster-a-1",
      is_registered: true,
      is_live: false,
    },
  ],
  selectedWarehouse: null,
  filteredArray: null
};

export const warehouseSlice = createSlice({
  name: "warehouse",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    findWarehouse: (state, action) => {
      let newArray = [...state.warehouseList];
      newArray = newArray.filter((ele) => {
        return ele.id === parseInt(action.payload.id);
      });

      state.selectedWarehouse = newArray;
      console.log(state.selectedWarehouse);
    },

    editKey: (state, action) => {
      let label = action.payload.key;
      let val = action.payload.val;
      let selectedWarehouse = state.selectedWarehouse[0];

      switch (label) {
        case "name":
          selectedWarehouse = { ...selectedWarehouse, name: val };
          break;

        case "cluster":
          selectedWarehouse = { ...selectedWarehouse, cluster: val };
          break;

        case "space":
          selectedWarehouse = { ...selectedWarehouse, space_available: val };
          break;

        case "live":
          selectedWarehouse = { ...selectedWarehouse, is_live: val };
          break;

        case "city":
          selectedWarehouse = { ...selectedWarehouse, city: val };
          break;
      }

      let id = selectedWarehouse.id;
      state.warehouseList = state.warehouseList.map((ele) => {
        if (ele.id === id) {
          return selectedWarehouse;
        } else return ele;
      });
      
      console.log(state.warehouseList);
    },

    filter: (state, action) => {
      let key = action.payload.key;
      let value = action.payload.val;
      console.log(key, value);

      let newArray=[];

      // if(state.filteredArray!=null)
      // newArray= state.warehouseList.map((ele)=>{
      //   if(ele[key]==value){
      //     return ele;
      //   }
      // })
      
        newArray= state.warehouseList.map((ele)=>{
          if(ele[key]==value){
            return ele;
        }});
      

      newArray=newArray.filter((ele)=>{
        return ele!=undefined;
      })
      state.filteredArray=newArray;
      console.log(newArray);
    
    },
  },
});

export const { findWarehouse, editKey, filter } = warehouseSlice.actions;

export const selectWarehouses = (state) => state.warehouse.warehouseList;
export const selectFilteredWarehouses = (state) => state.warehouse.filteredArray;

export const selectedWarehouse = (state) => state.warehouse.selectedWarehouse;

export default warehouseSlice.reducer;
