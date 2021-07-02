<template>
    <div class="admin">
        <Bar class="bar"></Bar>
        <TopPar></TopPar>
        <div class="vew">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Bar from "../../components/admin/par";
import TopPar from "../../components/admin/par-top"

    export default {
        name:"Admin",
        components:{
            Bar,
            TopPar
        }
    }
</script>

<style lang="scss" scoped>
.bar {
position: fixed;
    height: 100%;
    
}
.vew {
    position: absolute;
    width: calc(100% - 250px);
    right: 0;
    bottom: 0;
    padding: 10px;
    height:calc(100% - 50px) ;
}
</style>