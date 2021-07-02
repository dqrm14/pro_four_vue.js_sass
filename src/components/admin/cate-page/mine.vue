<template>
    <div class="islamic">
        <h1>كتب الصفحة الرئيسية</h1>
        <ul >
            <li class="add"><router-link class="ass"  to="/add-item-mine"><span>add</span></router-link></li>
        </ul>
        <router-view></router-view>

        <div class="table">
            <table >
                    <tr>
                        <th>num</th>
                        <th>title</th>
                        <th>price</th>
                        <th>img</th>
                        <th>change</th>
                    </tr>
                    <tr v-for="info in data" :key="info.it">
                        <td>{{info.key}}</td>
                        <td>{{info.prodact}}</td>
                        <td>{{info.price}}</td>
                        <td><img width="100" :src="info.url" alt=""></td>
                        <td><button @click="change(info.key)" >change</button>
                        <button @click="delet(info.key)" >delet</button> </td>
                    </tr>
                    
                </table>
        </div>
    </div>
</template>

<script>
import {db,fb} from '@/firebase/fire_all';
import router from '../../../router'
//import firebase from '@/firebase/fire_all';
//import {storage} from '@/firebase/fire_all';


    export default {
        name:"adminmine",
        
        data(){
            return {
                informitions:{
                    url:[]
                },

                data:[],
                
                

            }
        },

        storgColection(){
            return { kids: db.collection('mine')};
        },
        
        //in cum data

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
            },

            change(change){
                router.push({name:'changemine', params: {id:change}})
            },

            delet (id) {

            db.collection("mine").doc(id).delete().then(() => {

            console.log("Document successfully deleted!");

            }).catch((error) => {
                
                console.error("Error removing document: ", error);
            });

            }
        }
    } 
</script>

<style lang="scss" scoped>
.islamic {
    text-align: center;

    h1 {
        margin-top:50px;
    }

    .add {
        
        width: 100px;
        margin: 20px auto;

        .ass {
            border: 1px solid rgba(84, 218, 102, 0.795);
            padding: 5px 20px;
            margin: 20px auto;
        }
    }    
    .table {

            margin: 20px auto 200px auto;
            text-align: center;
            width: 85%;
            table {
                

                td {
                    width: 20%;
                }
                th {
                    width: 20%;
                    overflow: hidden;
                }
            }

            table , th, td {
            border: 1px solid black;
        }
    }
}    
button {
    outline: none;
    border: 1.5px solid #999;
    padding: 5px 20px;
}
</style>