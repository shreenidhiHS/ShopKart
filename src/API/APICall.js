import React from "react";
import axios from "axios";

const url="https://fakestoreapi.com/products"
export async function GetCall(){
    return await axios({
        method:"GET",
        url: url
    })
    .then((res)=>{
        return res.data;
    }).catch((e)=>{
        console.log(e)
    })
}
export async function GetOne(id){
  return await axios({
      method:"GET",
      url: `https://fakestoreapi.com/products/${id}`
  })
  .then((res)=>{
      return res.data;
  }).catch((e)=>{
      console.log(e)
  })
}

export async function AddCall(itemData) {
    return  await axios({
      method: "POST",
      url: url
      
    })
      .then((res) => {
        return res.data;
      })
      .catch((e) => console.log(e));
  }

  export async function UpdateCall(id ,Data) {
    return  await axios({
      method: "PATCH",
      url: "https://fakestoreapi.com/products/"+id
    })
      .then((res) => {
        return res.data;
      })
      .catch((e) => console.log(e));
  }

  export async function DeleteCall(id) {
    return await axios({
      method: "DELETE",
      url:`https://fakestoreapi.com/products/${id}` ,
    })
      .then((res) => {
        return res.data;
      })
      .catch((e) => console.log(e));
  }