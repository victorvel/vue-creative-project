<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('Fall')" href="#" class="pure-menu-link">Fall</a></li>
      <li class="pure-menu-item"><a @click="select('Winter')" href="#" class="pure-menu-link">Winter</a></li>
      <li class="pure-menu-item"><a @click="select('Spring')" href="#" class="pure-menu-link">Spring</a></li>
      <li class="pure-menu-item"><a @click="select('Summer')" href="#" class="pure-menu-link">Summer</a></li>
    </ul>
  </div>
  <class-data :singleClass="singleClass" />
</div>
</template>

<script>
import ClassData from "../components/ClassData.vue"
export default {
  name: 'Browse',
  components: {
    ClassData
  },
  data() {
    return {
      whenTaught: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.ClassData.filter(singleClass => singleClass === this.whenTaught);
    }
  },
  methods: {
    select(whenTaught) {
      this.whenTaught = whenTaught;
    }
  }
}
</script>