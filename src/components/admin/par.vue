<template>
    <div class="bar">
        <ul>
            <li><router-link class="link" to="/"> <span class="title">الرئيسية</span></router-link> </li>
            <li><router-link class="link" to="/"> <span class="title">لوحة المعلومات</span></router-link> </li>
            <li><router-link class="link" to="/admin-islamic"> <span class="title">الكتب الاسلامية</span></router-link> </li>

            <li><router-link class="link" to="/admin-mine"> <span class="title">كتب الرئيسية</span></router-link> </li>   
            <li><router-link class="link" to="/"> <span class="title">الطلبات</span></router-link> </li>

        </ul>
    </div>
</template>

<script>
    export default {
        name:"bar"
    }
</script>

<style lang="scss" scoped>
.bar {
            background-color: rgb(52, 75, 51);
    height: 100%;
    width: 250px;
    box-shadow: 1px 0px 10px #888888;
    position: absolute;

    ul{

        li {

            color: #FFF;
            height: 50px;
            line-height: 1.8;
            cursor: pointer;
            position: relative;



            .link {
                color: #FFF;
                text-decoration: none;

                .title {
                    position: absolute;
                    background: brown;
                    width: 100%;
                    height: 100%;
                    padding: 10px;
                    background-color: rgb(52, 75, 51);

                    &:hover {
                    background-color: rgb(30, 59, 45); ;
                    }
                }
            }

        }
    }
}
</style>