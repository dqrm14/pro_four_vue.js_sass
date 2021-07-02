<template>
    <div class="sections">
        <div class="container">
            <div class="sec">
                <div class="left">
                    <img class="im" src="../../assets/islamic_books.jpg" alt="">
                </div>
                <div class="right">
                    <div class="top">
                        <img class="im" src="../../assets/novels.jpg" alt="">
                    </div>
                    <div class="bottom">
                        <img class="im" src="../../assets/since.jpg" alt="">
                    </div>
                </div>    
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'sections'
    }
</script>

<style lang="scss" scoped>
.im {
    width: 98%;
}
.sections {
    margin-top:100px ;
    .sec {
        display: flex;
        justify-content: space-between;
        
        

        .left {
            width: 50%;
            img {
                height:99.3%;
            }

        
        }

        .right {
            width: 50%;

            .bottom {

                img {
                    margin-top: 8.5px;
                }
            }
        }

        
    }
    @media (max-width: 992px){
            .sec{
            flex-direction: column;
            
            }
            .sec .left , .sec .right {
                width: 100%;
            }

            .sec .right img {
                margin-top:8.5px;
            }
        }
}

</style>