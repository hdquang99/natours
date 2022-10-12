/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51LmSsQDzI7PWK1t83Nwye78XB7UFcJXVeJym9uoWqLo2Z6TDmmhdCYbJ17u1GAQF4S6gcNIuCzC46PK9sriLj17100p1I5CiGA'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:4000/api/v1/bookings/checkout-session/5c88fa8cf4afda39709c2955',
    });
    console.log(session);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
