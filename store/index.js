// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    orders: [
      {
        id: 1,
        orderNumber: 'Order#48376837',
        date: '09/21/2020',
        totalPrice: 'USD 2342',
        items: '02 items',
        status: 'pending',
      },
      // Add more orders as needed
    ],
  },
  getters: {
    getOrders: (state) => state.orders,
  },
});
