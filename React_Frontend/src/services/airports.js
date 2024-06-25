import api from '.';

export const getAirports = async () => {
    try {
        const response = await api.get('/Airport');
        return response.data;
    } catch (error) {
        console.log(error); 
    }
}