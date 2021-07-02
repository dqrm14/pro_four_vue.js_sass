<template>
    <div class="par_top">
        <div class="container">
            <div class="par">
                <span class="iconn"><router-link class="rtl" to="/"><img src="../../assets/icon.png" alt=""></router-link> </span>
                <ul class="ul_1">
                    <li><router-link id="a" to="/">الرئيسية</router-link></li>
                    <li class="section"> الاقسام
                        <ul class="ul_1_1" :class="{'dis_none':click}">
                            <li><router-link id="a" to="/islamic">كتب اسلامية</router-link></li>
                            <li>كتب علمية</li>
                        </ul>
                    </li>
                </ul>
                <ul class="ul_2">
                    <li class="cart_b">
                    <span class="lapl">    
                    <router-link to="/cart">
                    <font-awesome-icon
                        class="icon"
                        :icon="['fas', 'shopping-cart']"
                    />
                    </router-link>
                    
                    <span class="asd" v-if="$store.getters.totalnum >0">{{$store.getters.totalnum}}</span>
                    </span>
                    <ul class="ul_2_1" v-if="$store.getters.totalnum >0">
                        <router-link 
                        to="/cart">
                        <li v-for="item in this.$store.state.cart" :key="item.id">
                            <img width="100px" :src="item.productImage" alt="">
                            <h4>{{item.productName}}</h4>
                            <p>{{item.productPrice}}&nbsp;&nbsp;ج.م</p>
                        </li>
                        </router-link>
                        <p>{{$store.getters.totalPrice}}</p>

                    </ul>
                </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"par_top",
    data(){
        return{
            click:1,
        }
    },

    methods:{
    }
};
</script>
<style lang="scss" scoped>
/*glopal*/
#a {
    color: #999;
}
.dis_none {
    display:none;
}
.dis_block {
    display:block;
}
/*end glopal*/
.par_top {
    background: #F4C7AB;

    .par{

        display: flex;
        justify-content: space-between;
        padding: 10px 0;

        & span {
            flex-shrink: 3;
        }
        .iconn {
            display: flex;
            img{
                width: 50px;
            }

            .rtl {
                display: flex;
                
            }
        }
        
        .ul_1 {
            display: flex;
            justify-content: space-between;
            width: 15%;

            .section:hover .ul_1_1 {
                display: block;
            }

            li {
                position:relative;
                display: flex;
                align-items: center;
                font-size:20px;
                color: #999;
            }
        

            .ul_1_1{
                background: #FFF;
                position: absolute;
                top: 40px;
                width: 160px;
                padding: 5px 10px ;
                display: none;
                z-index: 1;
                border:1px solid #B2B8A3;

                li {
                    margin-bottom: 20px;
                }
            
            }

            

        }

        .ul_2 {
            position:relative;
            

            .cart_b {
            
            &:hover .ul_2_1 {
                display: block;
                
            }
            .lapl {
            
            position: relative;

            .icon {
                
                font-size: 25px;
                color: #551a8b;
            }
            .asd {
                position: absolute;
                background-color: #FFF;
                width: 20px;
                border-radius: 50%;
                right: -12px;
                text-align: center;
            }
            
            }
            
            }
            
            .ul_2_1 {
                display: none;
                position: absolute;
                background: #FFF;
                width: 200px;
                right:0;
                padding:10px;
                border-radius: 5px;
                z-index: 2;

                li {
                    padding-bottom: 5px;
                    border-bottom:1px solid #F4C7AB;
                    margin: 10px 0 ;
                }
            }

        }

        .icon {
            
            font-size: 25px;

            .lapl {
                position: relative;

                .asd {
                    position: absolute;
                    background-color: #FFF;
                    width: 20px;
                    border-radius: 50%;
                }
            }
        }

        @media (max-width: 992px){
                .ul_1{
                
                display: none;
            }
            }

        .ul_2 {

            display: flex;
            align-items: center;

        }
        .iconn {
            
            img{
                width: 50px;
            }
        }
    }
}

.lapl {
            
            position: relative;

            .icon {
                font-size: 25px;

                .asd {
                    position: absolute;
                    background-color: #FFF;
                    width: 20px;
                    border-radius: 50%;
                }
            }
        }
</style>