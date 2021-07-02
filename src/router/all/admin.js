import Admin from "../../views/admin/admin";
/*main peage*/
import AdminIslamic from "../../components/admin/cate-page/islamic";
import Adminmine from "../../components/admin/cate-page/mine.vue";







import AddIslamic from "../../components/admin/form-add/islamic";
import changeislamic from "../../components/admin/form-change/islamic";


import Addmine from "../../components/admin/form-add/mine.vue";
import changemine from "../../components/admin/form-change/mine.vue";




export default[
    {
        path: "/admin",
        component: Admin,
        name: "admin",
        meta:{
            requiresAuth:true
        },
        children: [
            
            {
            path: "/admin-islamic",
            component: AdminIslamic,
            name: "AdminIslamic",
            children: [
                {
                path: "/add-item-islamic",
                component: AddIslamic,
                name: "AddIslamic",
                },
                {   
                path: "/change/item/islamic",
                component: changeislamic,
                name: "changeislamic",
            }
            ]
            },


            {
                path: "/admin-mine",
                component: Adminmine,
                name: "Adminmine",
                children: [
                    {
                    path: "/add-item-mine",
                    component: Addmine,
                    name: "Addmine",
                    },
                    {   
                    path: "/change/item/mine",
                    component: changemine,
                    name: "changemine",
                }
                ]
                },
                
            
        ]
    }
]

