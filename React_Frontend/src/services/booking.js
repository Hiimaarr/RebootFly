import api from '.';

export const createBooking = async (
  name,
  surname,
  dni,
  email,
  phone,
  userId
) => {
  try {
    const response = await api.post('/Bookings/:id', {
      params: { name, surname, dni, email, phone, userId },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
