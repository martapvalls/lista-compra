import axios from 'axios'

async function getProductList(){
    const response = await axios.get('http://localhost:8080/productos')
    return response.data
}

async function modifyProduct(id, buyed){
    buyed === 0 ? buyed = 1 : buyed = 0

    const response = await axios.put(`http://localhost:8080/productos/${id}`, {comprado: buyed})
    return response.data
}

async function newProduct(product, buyed){
    const response = await axios.post(`http://localhost:8080/productos`, {producto: product, comprado: buyed})
    return response.data
}

export{
    getProductList,
    modifyProduct,
    newProduct
}