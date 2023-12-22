<template>
    <!-- dashboard-section start -->
    <section class="dashboard-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="form-item billing-item bg-color-white box-shadow p-3 p-lg-5 border-radius5">
                        <h6>Billing Detail</h6>
                        <form action="#" class="billing-form">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="input-item">
                                        <label>First Name*</label>
                                        <input type="text" name="name">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="input-item">
                                        <label>Last Name*</label>
                                        <input type="text" name="name">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="input-item">
                                        <label>Address*</label>
                                        <input type="text" placeholder="Write your address" name="address">
                                        <input type="text" name="address">
                                    </div>
                                    <div class="input-item">
                                        <label>Postal Code*</label>
                                        <input type="text" placeholder="0000-000" name="postal-code">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="input-item">
                                        <label>Email*</label>
                                        <input type="text" placeholder="***@**.**" name="email">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="input-item">
                                        <label>Mobile*</label>
                                        <input type="text" placeholder="+49 0000 000" name="mobile">
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="form-item payment-item bg-color-white box-shadow p-3 p-lg-5 border-radius5">
                        <h6>Payment</h6>

                        <form action="#" class="payment-form">

                            <div class="input-item radio">
                                <input type="radio" name="payment" value="check payment">
                                <label>Check Payment</label>
                            </div>

                            <div class="input-item radio">
                                <input type="radio" name="payment" value="cash on delivary">
                                <label>Cash on delivary</label>
                            </div>

                            <div class="input-item radio">
                                <input type="radio" name="payment" value="paypal">
                                <label>Paypal</label>
                            </div>
                        </form>
                        <div class="payment-image">
                            <img src="assets/images/payment/01.png" alt="payment">
                        </div>
                        <div class="text-right">
                            <NuxtLink to="/ordersucess" class="place-order-btn">Place Order</NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="cart-item sitebar-cart bg-color-white box-shadow p-3 p-lg-5 border-radius5">

                        <div class="cart-footer">

                            <div class="cart-total">
                                <p class="saving d-flex justify-content-between">
                                    <span>Total Savings</span>
                                    <span></span>
                                </p>
                                <p class="total-price d-flex justify-content-between">
                                    <span>Total</span>
                                    <span></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- dashboard-section end -->
</template>
  
  
<script setup>

</script>
  
<style scoped>
    
    
</style>
  