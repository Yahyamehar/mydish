<template>
    <div>
        <div class="go-back-container">
            <NuxtLink to="/userdashbord">
                <button class="go-back-button">Go Back</button>
            </NuxtLink>
        </div>
        <!-- dashboard-section start -->
        <section class="dashboard-section">
            <div class="container">
                <div class="track-order-item bg-color-white">
                    <div class="d-flex justify-content-between track-number-link align-items-center">
                        <div>
                            <h6 class="order-number">Order#48376837</h6>
                            <p class="date">09/21/2020</p>
                            <p class="price">USD 2342</p>
                        </div>
                        <div>
                            <NuxtLink to="/track" class="order-btn">Track Order</NuxtLink>
                        </div>
                    </div>
                    <div class="order-details">
                        <div class="order-details-head">
                            <h6>Order Details</h6>
                        </div>
                        <div class="order-details-container">
                            <div class="order-details-item d-flex flex-wrap align-items-center justify-content-between">
                               
                            </div>

                            <div class="order-details-item d-flex flex-wrap align-items-center justify-content-between">
                               
                            </div>

                            <div class="order-details-item d-flex flex-wrap align-items-center justify-content-between">
                                
                            </div>
                        </div>
                    </div>
                    <div class="track-order-info">
                        <ul class="to-list">
                            <li class="d-flex flex-wrap justify-content-between">
                                <span class="t-title">Sub Total</span>
                                <span class="desc">$2.0</span>
                            </li>
                            <li class="d-flex flex-wrap justify-content-between">
                                <span class="t-title">Delevary Fee</span>
                                <span class="desc">$2.0</span>
                            </li>
                            <li class="d-flex flex-wrap justify-content-between">
                                <span class="t-title">Discount</span>
                                <span class="desc">$2.0</span>
                            </li>
                            <li class="inc-vat d-flex flex-wrap justify-content-between">
                                <span class="t-title">Total(inc) Vat</span>
                                <span class="desc">$2.0</span>
                            </li>
                        </ul>
                    </div>
                    <div class="delevary-time">
                        <p>Ddelevary Time 10 may, 10am - 12am</p>
                    </div>
                    <div class="track-order-footer">
                        <p>Helpline - <NuxtLink to="/contact">Call Us</NuxtLink></p>
                    </div>
                </div>
            </div>
        </section>
        <!-- dashboard-section end -->
    </div>
</template>

<script setup>

</script>


<style scoped>

.go-back-container {
    text-align: center;
    margin-top: 20px;
}

.go-back-button {
    background-color: #3498db;
    color: #fff;
    padding: 15px 30px;
    border: 2px solid #3498db;
    border-radius: 8px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.go-back-button:hover {
    background-color: #2980b9;
    color: #fff;
}

</style>