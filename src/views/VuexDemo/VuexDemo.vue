<template>
  <div class="VuexDemo">
  <p>{{count}}</p>
  <button @click='increment'>+</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'VuexDemo',
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['increment'])
  }
}
</script>
