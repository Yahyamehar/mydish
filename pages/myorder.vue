<template>
    <div>
        <section id="dashboard-nav" class="dashboard-section">
            <div class="container">
                <ul class="dashbord-nav d-lg-flex flex-wrap align-items-center justify-content-between">
                    <li>
                        <NuxtLink to="/myorder"><i class="far fa-list-alt"></i>Your Orders</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/track"><i class="fas fa-shipping-fast"></i>Track Orders</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/profile"><i class="far fa-user"></i>Your Profile</NuxtLink>
                    </li>
                </ul>
            </div>

            <div class="container">
                <div class="dashboard-body bg-color-white p-4 p-md-5">
                    <div class="row">
                        <div class="col-12">
                            <div class="order-head mb-3">
                                <h5>My Orders</h5>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="orders-container">
                                <div class="order-item">
                                    <table class="table table-responsive1">
                                        <thead>
                                            <tr>
                                                <th class="px-3">My Orders</th>
                                                <th class="text-center">Items</th>
                                                <th class="text-right pr-5">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="px-3 py-4">
                                                    <div>
                                                        <h6 class="order-number">Order#48376837</h6>
                                                        <p class="date">09/21/2020</p>
                                                        <p class="price">USD 2342</p>
                                                    </div>
                                                </td>
                                                <td class="text-center">
                                                    <div>
                                                        02items
                                                    </div>
                                                </td>
                                                <td class="text-right pr-5">
                                                    <div class="pending">
                                                        pending
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="px-3">
                                                    <div>
                                                        <a href="track-order-single.html">Track Order</a>
                                                    </div>
                                                </td>
                                                <td class="text-right px-4" colspan="2">
                                                    <div>
                                                        <a class="view-details" href="order-details.html">View Details</a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="wallet-item">
                                <div class="order-item">
                                    <table class="table table-responsive1">
                                        <thead>
                                            <tr>
                                                <th class="px-3">My Wallet</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="px-3 py-4">
                                                    <div>
                                                        <p class="my-balance">My Balance</p>
                                                        <h6 class="credits">Credits $100</h6>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="text-right px-4">
                                                    <div>
                                                        <a class="view-details" href="order-details.html">View Details</a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

</script>

<style scoped></style>