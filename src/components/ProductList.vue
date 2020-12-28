<template>
    <div>
        <ul v-if="products.length > 0" class="product-list">
            <li v-for="product in products" :key="product.id" class="product">
                <span class="product-title"> {{product.producto}} </span>
                <button @click="modifyProductBuyed(product.id, product.comprado)"> 
                    <span v-if="product.comprado === 0" class="product-no-buyed">No comprado</span>
                    <span v-if="product.comprado === 1" class="product-buyed">Comprado</span>
                </button> 
            </li>
        </ul>
    </div>
</template>

<script>
import { getProductList, modifyProduct } from '../logic/products.js'

export default {
    name: 'ProductList',
    data(){
        return {
            products: []
        }
    },
    methods: {
        async retrieveProductList(){
            try{
                const response = await getProductList()
                this.products = response
            }catch(error){
                throw new Error('Algo no funcionó')
            } 
        },
        async modifyProductBuyed(id, buyed){
            try{
                await modifyProduct(id, buyed)             
            }catch(error){
                throw new Error('Algo no funcionó')
            }
        }
    },
    created(){
        this.retrieveProductList();
    },
    updated(){
        this.retrieveProductList();
    }
}
</script>

<style scoped>

.product{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
    width: 80vw;
    border: 2px solid rgb(137, 184, 255);
}
.product-title{
    text-transform: capitalize;
}

button{
    border: none;
    outline: none;
    cursor: pointer;
}
.product-no-buyed{
    background-color: lightcoral;
    padding: .2rem;
}

.product-buyed{
    background-color: rgb(114, 226, 114);
    padding: .4rem;
}

span{
    font-size: 1.4rem;
}
</style>