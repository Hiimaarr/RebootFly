import api from '.'

export const searchFlights = async (origin, destination, date, returnDate) => {
    try {
        const response = await api.get('/Flights/search', {params: {origin, destination, date, returnDate}
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}