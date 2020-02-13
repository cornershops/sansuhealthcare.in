<template>
<div id="productlist">
  <div v-for="product in products" v-bind:key="product.id" class="product-item">
    <img v-bind:src="product.url"  v-bind:alt="product.alttext"/>
  </div>
</div>
</template>

<script>
export default {
  name: 'productlist',
  data: function () {
    return {
      products: [
        { id: 1, url: require('@/assets/images/products/calpack.png'), alttext: 'calpack' },
        { id: 2, url: require('@/assets/images/products/calpackk2.png'), alttext: 'calpack k2' },
        { id: 3, url: require('@/assets/images/products/Chymofit.png'), alttext: 'Chymofit' },
        { id: 4, url: require('@/assets/images/products/Cymofit-MR.png'), alttext: 'Cymofit-MR' },
        { id: 5, url: require('@/assets/images/products/Deflopack-6.png'), alttext: 'Deflopack-6' },
        { id: 6, url: require('@/assets/images/products/HB-Pack.png'), alttext: 'HB-Pack' },
        { id: 7, url: require('@/assets/images/products/sancef-500.png'), alttext: 'sancef-500' },
        { id: 8, url: require('@/assets/images/products/SAN-p 1000.png'), alttext: 'SAN-p 1000' }
      ]
    }
  }
}
</script>

<style>
.product-item img
{
  width: 250px;
    height: 150px;
    padding: 10px;
    float: left;
    border-radius: 15px;
}

</style>
