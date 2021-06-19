import Vue from 'vue'
import Main from "@/views/Main";
import Test from "@/views/Test";
import VueRouter from "vue-router";
import Login from "@/views/Login2";
import Admin from "@/views/Admin";
import AddAgentAdmin from "@/views/AddAgentAdmin";
import CheckAgent from "@/views/CheckAgent";
import CheckAgentMessage from "@/views/CheckAgentMessage";
import CheckWage from "@/views/CheckWage";
import time from "@/views/time";
Vue.use(VueRouter);
export default new VueRouter({
    routes:[{
         path:'/main',
         component:Main
    },
        {
            path:'/test',
            component:Test
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/admin',
            component:Admin
        },
        {
            path:'/addagentadmin',
            component:AddAgentAdmin
        },
        {
            path:'/checkagent',
            component:CheckAgent
        },
        {
            path:'/checkagentmessage',
            component:CheckAgentMessage
        },
        {
            path:'/checkwage',
            component:CheckWage
        },
        {
            path:'/test2',
            component:time
        }
    ]
});