import api from ".";

export const login = async (username,password)=>{
    console.log(username,password)
    try {
        const {data}= await api.post("/auth/login",{username,password})  
        return data.token
    } catch (error) {
        console.log(error);
    }
}

