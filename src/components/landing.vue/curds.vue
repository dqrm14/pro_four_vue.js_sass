<template>
    <div class="curds">
        <div class="container">
            <div class="curd">
                <div class="cu" v-for="da in data" :key="da.it">
                    <img :src="da.url" alt="">
                    <h1>كتاب الكتروني</h1>
                    <h3>{{da.prodact}}</h3>
                    <p>{{da.price}}&nbsp;&nbsp;ج.م</p>
                    <CARTCLICK :name="da.prodact"
                        :price="da.price" 
                        :image="da.url"
                        :pId="da.key"></CARTCLICK>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import {db} from '@/firebase/fire_all';

import CARTCLICK from "../..//components/cart/cart-click"

    export default {
        name:'curds',
        components:{
            
            CARTCLICK
        },
        data(){
            return {
                data:[],
                
            }
        },
        created () {
            db.collection('mine').onSnapshot((querySnapshot) => {
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

</style>