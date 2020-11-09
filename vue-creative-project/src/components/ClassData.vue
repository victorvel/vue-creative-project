<template>
<div class="wrapper">
  <div class="classlist">
    <div class="singleClass" v-for="aClass in classes" :key="aClass.id">
      <div class="info">
        <h1>{{singleClass.name}}</h1>
        <p>{{singleClass.classNum}}</p>
      </div>
      <div class="prerequisite">
        <h2>{{singleClass.prerequisite}}</h2>
        <button class="auto" @click= "addToCart(aClass)">Add to Cart</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'ClassData',
    props: {
      products: Array
    }
  }
</script>