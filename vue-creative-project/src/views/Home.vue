<template>
  <div class="home">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <!-- <ClassData :singleClass="singleClass"/> -->
</template>

<script>
import ClassData from "../components/ClassData.vue"
export default {
  name: 'Home',
  components: {
    ClassData
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
  classes() {
    return this.ClassData.singleClass.filter(singleClass => singleClass.name.toLowerCase().search(this.searchText) >= 0 );
  }
}

}
</script>
