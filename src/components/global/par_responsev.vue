<template>
    <div class="links">
        <div class="fixd" :class="{'none':no}">
            <div class="catigores">
            <span class="titl">ألأقسام</span> 

            <ul class="pearnt">
                

                    
                    <ul class="section">
                    <span class="name" @click="sactio_5()">
                        <router-link to="/"> الرئيسية</router-link>
                        
                    </span>
                        
                        
                    
                </ul>

                    <ul class="section">
                    <span class="name" @click="sactio_5()">
                        <router-link to="/islamic"> الكتب ألأسلامية</router-link>
                    </span>    
                </ul>
            </ul>
            </div>  
        </div> 
        <ul class="a">
            <li @click="ul_all()" class="a-1"><font-awesome-icon class="icon" :icon="['fas', 'bars']" /></li>

           
        </ul>

    </div>
</template>

<script>
export default {

    data(){
        return{
            no: true,
            se_1:true,
            se_2:true,
            se_3:true,
            se_4:true,
            se_5:true,
        }
    },

    methods:{
        ul_all(){
            this.no =! this.no
        },
        sactio_1(){
            this.se_1 =! this.se_1
        },
        sactio_2(){
            this.se_2 =! this.se_2
        },
        sactio_3(){
            this.se_3 =! this.se_3
        },
        sactio_4(){
            this.se_4 =! this.se_4
        },
        sactio_5(){
            this.se_5 =! this.se_5
        }
    }
    
}
</script>

<style lang="scss" scoped>
.none {
    display: none;
}
.links{
    .fixd {
        top: 0;
        text-align: center;        
        position: absolute;
    
        .catigores {
            background: #fff;
            width: 100%;
            height: calc(100vh - 60px);
            position: fixed;
            z-index: 10000;
            overflow: auto;
            padding: 50px 0 50px 0;

            .titl {
                font-size: 30px;
                display: block;
                margin-bottom: 30px;
            }

            .name {
                font-size: 20px;
            }
            .section {
                padding: 10px 120px;

                .section_2 {
                    display: none;   
                }

                .icon {
                    float: right;
                }

                .line {
                    line-height: 2;
                }
                .title {
                    font-size: 19px;
                    font-family: Rubik, Arial, Helvetica, sans-serif;
                }
            
            }   



        }
    }    
        .a {

        width: 100%;
        height: 60px;
        background: rgb(226, 226, 226);
        z-index: 1000;
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        .a {

            font-size: 30px;
        }
    


    }
}    
</style>