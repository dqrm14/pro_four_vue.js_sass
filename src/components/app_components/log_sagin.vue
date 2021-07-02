<template>
  <div class="log_sagin">
    <div class="container">
      <div class="log">
        <a href>login  </a><span>&nbsp;|&nbsp;</span> <a href>  signin</a>
      </div>
    </div>   
  </div>
</template>

<script>
export default {
  name: "log_sagin",

  data() {
    return {
      mas: 55,
    };
  },
};
</script>

<style lang="scss" scoped>
.log_sagin {
  background: #B2B8A3;
  padding: 10px 0;

  .log {
    display: flex;
    justify-content: flex-end


  }
}

</style>
