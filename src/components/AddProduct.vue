<template>
    <div class="add-product">
        <h1>Añadir producto</h1>
        <p v-if="error" class="error"> {{error}} </p>
        <form
            @submit="createNewProduct"
            method="post"
        >   
            <p>
                <label for="product">Producto</label>
                <input
                    id="product"
                    v-model="product"
                    type="text"
                    name="product"
                    class="input-product"
                >
            </p>
            <p>
                <input type="submit" value="Añadir" title="Añadir" class="submit-btn"/>
            </p>
        </form>
    </div>
</template>

<script>
import { newProduct } from '../logic/products.js'
export default {
    name:'AddProduct',
    data(){
        return {
            error: false,
            product: '',
            buyed: 0
        }
    },
    methods: {
        async createNewProduct(e){
            e.preventDefault();
            if(this.product.trim() === ''){
                this.error = 'el campo producto no puede estar vacío'
                return
            }
            this.error = false

            try{    
                const response = await newProduct(this.product, this.buyed)
                console.log(response)
                this.product = ''
            }catch(error){
                throw new Error('Failed')
            }

        }
    }
}
</script>

<style scoped>
.add-product{
    padding-top: 5%;
    margin-top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
h1{
    padding: 2%;
}
form{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
    align-items: center;
    font-size: 1.2rem;
    padding: 2%;
}
p{
    width: 100%;
    display: flex;
    justify-content: center;
}
.input-product{
    border:none;
    border-bottom: 2px solid rgb(137, 184, 255);
    margin-left: 10px;
    background-color: inherit;
    outline: none;
    padding: 0 2%;
}
input{
    margin: 2%;
}
.submit-btn{
    width: 100%;
    font-size: 1.4rem;
    border: none;
    background-color: rgb(137, 184, 255)
}

.error{
    font-size: 1.2rem;
    background-color: lightcoral;
    padding: 2%;
    margin: 2%;
}
</style>