<template>
  <div>
    <van-button type="danger" class="btn">默认按钮</van-button>
    <h4>HOME</h4>
    <router-link to="/VuexDemo">To VuexDemo</router-link>
    <hr />
    <router-link to="/login">To login</router-link>
  </div>
</template>
<script>
export default {
  name: 'HomeIndex'
}
</script>
<style lang="less">
.btn{
    width: 750px;
}
</style>
