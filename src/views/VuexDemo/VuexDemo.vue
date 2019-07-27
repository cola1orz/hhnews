<template>
  <div class="VuexDemo">
    <p>{{count}}</p>
    <van-button type="primary" @click="increment">加一</van-button>
    <van-button type="danger" @click="acsetcount">3秒后加100</van-button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'VuexDemo',
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['increment']),
    ...mapActions(['acsetcount'])
  }
}
</script>
<style lang="less">
button {
  width: 200px;
  height: 100px;
}
</style>
