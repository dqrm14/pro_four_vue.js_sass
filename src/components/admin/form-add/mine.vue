<template>
    <div class="form">
        <form @submit.prevent="onSubmit()">
            <ul>
                <li>Prodact title :</li>

                <li><input type="text" name="prodact_title" id="" v-model="informitions.prodact"></li>
                
                <li>Price :</li>

                <li><input type="number" name="price" id="" v-model="informitions.price"></li>
                
                <li>img:</li>
                
                <li><input id="file" type="file" @change="addImg" ref="inputFile" accept="image/*"></li>
                
                <li v-for="ur in informitions.url" :key="ur"><img :src="ur" alt="" width="250"></li>
                
                <li>Discription :</li>
                
                <li><textarea type="sunject" cols="50" rows="15" name="discription" id="" v-model="informitions.discription"></textarea></li>
                
                <li><!--<router-link type="submit" to="/kids">click</router-link>--><button type="submit">submit</button></li>
                
            </ul>
        </form>
    </div>
</template>

<script>
import {db,fb} from '@/firebase/fire_all';

import router from '../../../router'

    export default {
        name:"addmine",

        data(){
            return{
                informitions:{
                    url:[]
                },

                data:[],
            }
        },
        methods:{
            /*    clear(){
                    this.$refs.inputFile.value = null
        },*/

        
    
        
            onSubmit(){
                
                db.collection('mine').add(this.informitions,).then(() => {
                    this.informitions.prodact = '',
                    this.informitions.price = '',
                    this.informitions.discription = '',
                    this.informitions.url = ''
                    this.$refs.inputFile.value = ''
                    router.push({
                    
                    name: "Adminmine",
                    })
                    
                }).catch((error)=>{
                    alert("error:",error)
                });
            },
    
                addImg(i){
                let file = i.target.files[0];

                var storageRef = fb.storage().ref('mine/'+file.name);
                
                let uploadTask = storageRef.put(file);

                uploadTask.on('state_changed',function(){},function() {},

                
                
                () => {
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=>{
                    this.informitions.url.push(downloadURL);
                        

                    console.log(file.name);

                        
                    });
                });
            }
        
    }
    }
</script>

<style lang="scss" scoped>

form {
        margin:0 auto;
    }

    input {
    padding: 10px;
    border: 1.5px solid #999;
    width: 430px;
    outline: none;
}
textarea {
    border: 1.5px solid #999;
    padding: 10px;
    outline: none;
}
button {
    outline: none;
    border: 1.5px solid #999;
    padding: 5px 20px;
}
</style>