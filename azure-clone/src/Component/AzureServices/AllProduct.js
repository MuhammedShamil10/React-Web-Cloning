import React, { useState } from 'react'
const[data, setData] =useState([])
const[feat, setFeat] =useState("featured")
const[AI, setAi] =useState([])
const[compute, setCompute] =useState([])
const[container, setContainer] =useState([])
const[hybrid, setHybrid] =useState([])
const[iot, setiot] =useState([])

const fetchingData = () => {
  fetch(
    "https://raw.githubusercontent.com/MuhammedShamil10/React-Web-Cloning/main/azure-clone/public/azureData.json"
  )
    .then((response) => {
      return response.json();
    })
    .then((item) => {
      setData(item.productServices);
      setFeat(item.featuredCards);
      setAi(item.aimsCards)
      setCompute(item.compute)
      setContainer(item.containers)
      setHybrid(item.hybridmulti)
      setiot(item.iot)
    });
};
useEffect(() => {
  fetchingData();
}, []);

let handleClick = () => {

}

function AllProduct() {
  return (
    <div>

    </div>
  )
}

export default AllProduct