<template>

    <div>
        <SLIDER></SLIDER>
        <SECTIONS></SECTIONS>
        <CURDS></CURDS>
    </div>
</template>

<script>

    import SLIDER from "../../components/landing.vue/slider";
    import SECTIONS from "../../components/landing.vue/sections";
    import CURDS from "../../components/landing.vue/curds";



    export default {
    name: "landing",

    components: {
    
        SLIDER,
        SECTIONS,
        CURDS
    },
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