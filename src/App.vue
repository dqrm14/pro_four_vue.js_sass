<template>

  <div>
  
    <router-view></router-view>

  </div>
</template>

<script>



export default {
  name: "App",
  components:{

  }

};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  outline: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
p {
  line-height: 1.5;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Work Sans", sans-serif;
  font-family: 'Tajawal', sans-serif;
  width: 100%;
  background: #FFF5EB;
}

button {
  cursor: pointer;
}
/*e small*/
@media (max-width: 768px) {
  .container {
    width: 85%;
    margin: 0 auto;
  }
}

/* small*/
@media (min-width: 700px) {
  .container {
    width: 50%;
    margin: 0 auto;
  }
}

/*medium*/
@media (min-width: 992px) {
  .container {
    width: 970px;
    margin: 0 auto;
  }
}

/*larg*/
@media (min-width: 1200px) {
  .container {
    width: 80%;
    margin: 0 auto;
  }
}








</style>
