import {defineStore} from "pinia";

export const useUserStore = defineStore('user',{
    state(){
        return {
            username : '',
            useremail : '',
            registerDate :'',
            id : 0,
            token:'',
            avatar:''
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
            this.registerDate = create_time;
            this.useremail = email;
        }
    }
})
