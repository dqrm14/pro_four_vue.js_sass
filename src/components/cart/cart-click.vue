<template>
    <div >
        <font-awesome-icon
                            @click="addToCart()"
                            class="icon"
                            :icon="['fas', 'shopping-cart']"
                        />
    </div>
</template>

<script>
    export default {
        

        props: {
            name: String,
            price: String,
            image: Array,
            pId: String
        },
        data(){
            return{
                item :{
                    productName: this.name,
                    productImage: this.image,
                    productPrice: this.price,
                    productId: this.pId,
                    productQuantity: 1,
                }
            }
        },

        methods:{
            addToCart(){
                this.$store.commit('addToCart', this.item)
            }

            }
        }
</script>

<style lang="scss" scoped>
.icon {
                color: #fc5959;
                margin: 15px 0;
                background: rgba(72, 207, 83, 0.267);
                width: 50px;
                height: 50px;
                padding: 7px;
                border-radius: 50px;
                cursor: pointer;
}


</style>