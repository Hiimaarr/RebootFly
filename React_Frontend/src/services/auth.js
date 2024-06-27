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

export const insertFly = async (code,departure_time,arrival_time,status,capacity,occupiedPlaces,price)=>{
    try {
        const {data}= await api.post("/Flights",{code,departure_time,arrival_time,status,capacity,occupiedPlaces,price})
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

export const flightInfoToBack = async (origin,destination,date,returnDate)=>{
    try {
        const {data}= await api.post("/Flights/search",{origin,destination,date,returnDate})
        return data
    } catch (error) {
        console.log(error);
    }
}

