import {defineStore} from "pinia";

export const useUserStore = defineStore('user',{
    state(){
        return {
            username : '',
            useremail : '',
            userSignTime :'',
            id : 0,
            token:''
        }
    },
    actions:{
        setId(id){
            this.id = id;
        },
        setToken(token){
            this.token = token;
        },
        setUserDetails({ username, email, create_time}) {
            this.username = username;
            this.userSignTime = create_time;
            this.useremail = email;
        }
    }
})
