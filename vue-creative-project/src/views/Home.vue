<template>
  <div class="home">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
    <ClassData :classes="classes" />
  </div>
</template>

<script>
import ClassData from "../components/ClassData.vue";
export default {
  name: "Home",
  components: {
    ClassData,
  },
  data() {
    return {
      searchText: "",
    };
  },
  computed: {
    classes() {
      return this.data.ClassData.filter(
        aClass => aClass.name.toLowerCase().search(this.searchText) >= 0
      );
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>