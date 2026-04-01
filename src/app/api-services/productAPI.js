const { default: axios } = require("axios")

let getProducts = ()=>{
    return axios.get("https://dummyjson.com/products")
    .then((res)=>res.data)
    .then((finalRes)=>{
        return finalRes
    })
}

let getProductDetails = (id)=>{
    return axios.get(`https://dummyjson.com/products/${id}`)
    .then((res)=>res.data)
    .then((finalRes)=>{
        return finalRes
    })
}

module.exports={getProducts, getProductDetails}