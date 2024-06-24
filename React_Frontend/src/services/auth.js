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

export const insertFly = async (code,departuretime,arrivaltime,status,capacity,occupedplaces,price)=>{
    try {
        const {data}= await api.post("/Flights",{code,departuretime,arrivaltime,status,capacity,occupedplaces,price})
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

