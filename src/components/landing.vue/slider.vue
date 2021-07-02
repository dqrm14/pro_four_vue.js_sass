<template>
    <v-carousel class="slid" cycle :show-arrows="false" height="600px">
        <v-carousel-item
        
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        ></v-carousel-item>
    </v-carousel>
</template>

<script>
    export default {
        data () {
        return {
            items: [
            {
                src: 'https://cdn-cgiac.nitrocdn.com/wPseOUIDKwfwoBwNunqSiZZPVVauXeiJ/assets/static/optimized/rev-8ba7924/wp-content/uploads/2012/10/%D8%A7%D9%84%D9%83%D8%AA%D8%A8-%D8%A7%D9%84%D8%B9%D8%B4%D8%B1%D8%A9-%D8%A7%D9%84%D8%A3%D9%83%D8%AB%D8%B1-%D8%AA%D8%A3%D8%AB%D9%8A%D8%B1%D8%A7%D9%8B-%D9%81%D9%89-%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE-%D8%A7%D9%84%D8%A8%D8%B4%D8%B1%D9%8A%D8%A9-1536x864.jpg',
            },
            {
                src: 'https://www.sayidy.net/sites/default/files/styles/1400x795/public/main/articles/shutterstock_91528463.jpg?itok=86Wjt6m7',
            },
            {
                src: 'https://media-exp1.licdn.com/dms/image/C4D1BAQGnhNI7B0sQjQ/company-background_10000/0/1559203494294?e=2159024400&v=beta&t=xYRMcv_VoZqRk5L4AAOvcdC68EpyNGIS86r83adM65Q',
            },
            {
                src: 'https://cdn.sotor.com/thumbs/fit630x300/38039/1599903870/%D8%A7%D9%82%D8%AA%D8%A8%D8%A7%D8%B3%D8%A7%D8%AA_%D9%85%D9%86_%D9%83%D8%AA%D8%A8.jpg',
            },
            {
                src: 'https://e3arabi.com/wp-content/uploads/2019/11/shutterstock_258971177-780x470.jpg',
            },
            {
                src: 'https://modo3.com/thumbs/fit630x300/75894/1485262196/%D8%A3%D9%86%D9%88%D8%A7%D8%B9_%D8%A7%D9%84%D9%83%D8%AA%D8%A8.jpg',
            },
            ],
        }
        },
    }
</script>
<style lang="scss" scoped>
.slid {
    margin-top: 100px;
}
</style>