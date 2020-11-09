<template>
<div class="wrapper">
  <div class="classlist">
    <div class="singleClass" v-for="singleClass in classlist" :key="singleClass.id">
      <div class="info">
        <h1>{{singleClass.name}}</h1>
        <p>{{singleClass.classNum}}</p>
      </div>
      <div class="prerequisite">
        <h2>{{singleClass.prerequisite}}</h2>
        <button class="auto" @click= "addToCart(singleClass)">Add to Cart</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'class-data',
    props: {
      products: Array
    }
  }
</script>