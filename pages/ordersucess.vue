<template>
    <!-- Product order success section start -->
    <section class="product-order-success-section section-ptb">
        <div class="container">
            <div class="product-order-success-container">
                <div class="product-order-success">
                    <div class="iconimage">
                        <img src="assets/images/checkicon.png" alt="icon">
                    </div>
                    <h2>Your order has been received. To See Your Order Detail you must need to Sign-in</h2>
                    <NuxtLink to="/signin" class="order-btn">View Order Details</NuxtLink>
                </div>
                <div class="order-description">
                    <ul class="order-info">
                        <li>
                            <h6>Your Order Number</h6>
                            <span>:</span>
                            <p>Order#{{ $route.query.orderNumber || 'N/A' }}</p>
                        </li>
                        <li>
                            <h6>Your Order Date </h6>
                            <span>:</span>
                            <p>{{ getCurrentDate() }}</p>
                        </li>
                        <li>
                            <h6>Price</h6>
                            <span>:</span>
                            <p>${{ $route.query.price || 'N/A' }}</p>
                        </li>
                        <li>
                            <h6>Tax (10%)</h6>
                            <span>:</span>
                            <p>${{ calculateTax($route.query.price) }}</p>
                        </li>
                        <li>
                            <h6>Total</h6>
                            <span>:</span>
                            <p>${{ calculateTotalAmount($route.query.price) }}</p>
                        </li>
                    </ul>
                    <NuxtLink to="/orderdetails" class="view-summery">View a summary of your order</NuxtLink>
                </div>
            </div>
        </div>
    </section>
    <!-- Product order success section end -->
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const getCurrentDate = () => {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

const calculateTax = (price) => {
    const taxPercentage = 10;
    const taxAmount = (price * taxPercentage) / 100;
    return taxAmount.toFixed(2);
};

const calculateTotalAmount = (price) => {
    const taxAmount = calculateTax(price);
    const totalAmount = parseFloat(price) + parseFloat(taxAmount);
    return totalAmount.toFixed(2);
};
</script>

<style scoped>
/* Your existing styles */
</style>
