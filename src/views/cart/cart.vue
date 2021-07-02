<template>
    <div>
        <LOGSIGIN></LOGSIGIN>
        <PARTOP></PARTOP>
                <div class="container">

            <!-- Modal -->
                    <div class="curd">
                        <div class="cu" v-for="item in this.$store.state.cart" :key="item.id">
                            <img :src="item.productImage"  alt="">
                            <h1>كتاب الكتروني</h1>
                            <h3>{{item.productName}}</h3>
                            <p>{{item.productPrice}}&nbsp;&nbsp;ج.م</p>
                            <div class="qnt">{{item.productQuantity}}&nbsp;: الكمية</div>
                            <button class="btn" @click="$store.commit('removeFromCart',item)">حذف</button>
                        
                        </div>
                    </div>
                    <div class="total">{{$store.getters.totalPrice}} : اجمالي السعر </div>
                </div>
        <FOOTERONE></FOOTERONE>
        <FOOTERTWO></FOOTERTWO>
        <PARRESPONSEV class="par_responsev"></PARRESPONSEV>
    </div>
</template>

<script>
import LOGSIGIN from "../../components/app_components/log_sagin";
import PARTOP from "../../components/app_components/par_top";
import FOOTERONE from "../../components/app_components/footer_1";
import FOOTERTWO from "../../components/app_components/footer_2";
import PARRESPONSEV from "../../components/global/par_responsev";
    export default {
        name:'cart',

        components:{
            LOGSIGIN,
            PARTOP,
            FOOTERONE,
            FOOTERTWO,
            PARRESPONSEV,
        }
    }
</script>

<style lang="scss" scoped>
.par_responsev {
    display: none;
}
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
            padding-bottom: 10px;

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
            .btn {
                color: #fc5959;
                font-weight:bold ;
                border: 1px solid #fc5959;
                margin:10px 0;
                padding: 5px 10px ;
            }

        }
}
.total {
    text-align: center;
    padding: 30px 0;
    background: #40f16d44;
    font-size: 25px;
    margin-top:50px;
}

    @media (max-width: 992px){
            .curd {
            flex-direction: column;
            
            }
            .curd .cu {
                width: 100%;
            }

            
        }
@media (max-width: 992px) {
    .par_responsev {
    display: block;
}
}
</style>



