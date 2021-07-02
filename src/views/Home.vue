<template>
  <div>
    <LOGSIGIN></LOGSIGIN>
    <PARTOP></PARTOP>
    <LANDING></LANDING>
    <FOOTERONE></FOOTERONE>
    <FOOTERTWO></FOOTERTWO>
    <PARRESPONSEV class="par_responsev"></PARRESPONSEV>

  </div>
</template>

<script>
import LOGSIGIN from "../components/app_components/log_sagin";
import PARTOP from "../components/app_components/par_top";
import LANDING from "./landing/landing"
import FOOTERONE from "../components/app_components/footer_1";
import FOOTERTWO from "../components/app_components/footer_2";
import PARRESPONSEV from "../components/global/par_responsev";


export default {
  name: "home",
  components:{
    LOGSIGIN,
    PARTOP,
    LANDING,
    FOOTERONE,
    FOOTERTWO,
    PARRESPONSEV,
  }

};
</script>
<style lang="scss" scoped>
.par_responsev {
  display: none;
}
@media (max-width: 992px) {
  .par_responsev {
  display: block;
}
}
</style>