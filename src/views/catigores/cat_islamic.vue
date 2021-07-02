<template>
<div>
    <LOGSIGIN></LOGSIGIN>
    <PARTOP></PARTOP>
        <div class="curds">
            <div class="container">
                <div class="curd">
                    <div class="cu" v-for="da in data" :key="da.it">
                        <img :src="da.url" alt="">
                        <h1>كتاب الكتروني</h1>
                        <h3>{{da.prodact}}</h3>
                        <p>{{da.price}}&nbsp;&nbsp;ج.م</p>
                        <!--<font-awesome-icon
                            @click="addToCart(da.key)"
                            class="icon"
                            :icon="['fas', 'shopping-cart']"
                        />-->
                        <CARTCLICK :name="da.prodact"
                        :price="da.price" 
                        :image="da.url"
                        :pId="da.key"></CARTCLICK>
                    </div>
                </div>
            </div>
        </div>
        <FOOTERONE></FOOTERONE>
        <FOOTERTWO></FOOTERTWO>
        <PARRESPONSEV class="par_responsev"></PARRESPONSEV>
</div>        
</template>


<script>
import {db} from '@/firebase/fire_all';
/*import router from '@/router'*/


import LOGSIGIN from "../../components/app_components/log_sagin";
import PARTOP from "../../components/app_components/par_top";
import FOOTERONE from "../../components/app_components/footer_1";
import FOOTERTWO from "../../components/app_components/footer_2";
import PARRESPONSEV from "../../components/global/par_responsev";
import CARTCLICK from "../../components/cart/cart-click"



    export default {
        name:'cat_islamic',
        
        components:{
            LOGSIGIN,
            PARTOP,
            FOOTERONE,
            FOOTERTWO,
            PARRESPONSEV,
            CARTCLICK
        },
        data(){
            return {
                data:[],
                
            }
        },
        created () {
            db.collection('islamic').onSnapshot((querySnapshot) => {
                this.data = [];
                querySnapshot.forEach((doc) => {
                    this.data.push({
                        key: doc.id,
                        discription: doc.data().discription,
                        price: doc.data().price,
                        prodact: doc.data().prodact,
                        url: doc.data().url
                    });
                });
            });
        },

        methods:{

            addToCart(a){
                this.$store.commit('addToCart', a)
            }/*
            addtovuex(k,n,p){
                this.$store.commit('addToCart',{ k,n,p})
            }
            /*torequest(employee){
                router.push({ name: 'SendReq', params: { id: employee ,cat:'kids' }})

            }*/
        }
    }
</script>

<style lang="scss" scoped>
/*

#FFF5EB
#DEEDF0
#F4C7AB
#B2B8A3
*/

.curds {

    .curd {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;


        
        .cu {
            width: 30%;
            text-align: center;
            margin-top:150px;
            border: 1px solid #b2b8a344;
            border-radius: 5px;

            img {
                width: 100%;
            }
            h1 {
                margin: 15px 0;
            }
            h3 {
                margin-bottom:10px;
            }
            p {
                font-weight: bold;
                font-size: 25px;
            }
            .icon {
                color: #fc5959;
                margin: 15px 0;
            }

        }
    }

    @media (max-width: 992px){
            .curd {
            flex-direction: column;
            
            }
            .curd .cu {
                width: 100%;
            }

            
        }
}

.par_responsev {
    display: none;
    }

@media (max-width: 992px) {
    .par_responsev {
    display: block;
}
}

</style>