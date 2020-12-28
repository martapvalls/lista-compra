<template>
  <div id="app">
    <Header />
    <div class="main">
      <ProductList />
      <AddProduct />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ProductList from './components/ProductList.vue'
import AddProduct from './components/AddProduct.vue'

export default {
  name: 'App',
  components: {
    Header,
    ProductList,
    AddProduct
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400&display=swap');

*{
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}
#app {
  background-color: rgb(181, 210, 253);
  height: 100vh;
}

ul{
  list-style: none;
  margin: 0;
  padding: 0;
}

.main{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
}
</style>
