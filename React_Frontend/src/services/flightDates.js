import api from '.';

export const flighDates = async (origin, destination) => {
    try {
        const response = await api.get('/Flights/dates', {
            params: { origin, destination }
        })
        return response.data;
    } catch (error) {
        console.log(error);
    }
}