<template>
 <div class="card-group" v-for="product in products" :key="product.id">
  <div class="card">
    <div class="card-body">
         <img :src="product.productImageURL" alt="img1">
      <h5 class="card-title">{{product.productName}}</h5>
      <p class="card-text">{{product.productPrice}}</p>
      <p class="card-text"><small class="text-muted">{{product.productDescription}}</small></p>
    </div>
  </div>
 
</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      products: [
        {
          productDescription: "yellow car",
          productImageURL:
            "https://imgd.aeplcdn.com/1056x594/cw/ec/21724/Audi-R8-Right-Front-Three-Quarter-66713.jpg?v=201711021421&q=75&wm=1",
          productName: "Audi R8",
          productPrice: 30000000,
          _id: 1,
        },
        {
          productDescription: "Noise waterproof",
          productImageURL:
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRNaFTikHdmmnujKVg08SDtAWk1buqJfeVNkWDlWHybY16cVgWdXlpgOsXce7w5vIPN1AQBxuqmwWh778KavBZ4739duMa4s_A0fWJ1diw0gPYl3x7NkXR_&usqp=CAE",
          productName: "Smart Watch",
          productPrice: 2000,
          _id: 2,
        },
        {
          productDescription: "Gaming mouse 25000 dpi ",
          productImageURL:
            "https://m.media-amazon.com/images/I/61M7B24YNEL._SL1500_.jpg",
          productName: "Viper Ultimate Wireless",
          productPrice: 7999,
          _id: 3,
        }
      ],
    };
  },
};
</script>

<style>
  .card{
    margin-top: 30px;
    /* margin-left: 150px; */
    box-shadow: 5px 10px 8px #888888;
  }
  img{
    width: 250px;
    height: 200px;
  }
  .card-group{
    margin-left: 25%;
    width: 50%;
  }
</style>
