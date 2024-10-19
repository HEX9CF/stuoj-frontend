    import {createRouter,createWebHistory} from "vue-router";
    import linker1 from "@/router/linker1.vue";
    import linker2 from "@/router/linker2.vue";
    import linker3 from "@/router/linker3.vue";




const router = createRouter({
    history:createWebHistory(),
    routes:[{
        path :'/linker1',
        component: linker1,
    },
        {
            path :'/linker2',
            component: linker2,
        },
        {
            path :'/linker3',
            component: linker3,
        },{
            path :'/',
            component: linker1,
        }]
})
     export default router