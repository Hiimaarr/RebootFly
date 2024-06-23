import api from ".";

export const login = async (username,password)=>{
    try {
        const result= await api.post("/auth/login",{username,password})  
    } catch (error) {
        console.log(error);
    }
}

