<template>
    <div> 
        <section id="dashboard-nav" class="dashboard-section">
                <div class="container">
                    <ul class="dashbord-nav d-lg-flex flex-wrap align-items-center justify-content-between">
                        <li><NuxtLink to="/myorder"><i class="far fa-list-alt"></i>Your Orders</NuxtLink></li>
                        <li><NuxtLink to="/track"><i class="fas fa-shipping-fast"></i>Track Orders</NuxtLink></li>
                        <li><NuxtLink to="/profile"><i class="far fa-user"></i>Your Profile</NuxtLink></li>
                    </ul>
                </div>

                <div class="container">
                    <div class="dashboard-body">
                        <div class="profile">
                            <h5 class="title">Your Profile <span title="Edit Profile" id="edit" class="edit" data-toggle="modal" data-target="#edit-form1"><i class="fas fa-edit"></i></span></h5>

                            <ul class="list-profile-info list-unstyled">
                                <li>
                                    <span class="title">Your Name</span>
                                    <span class="desc">Jhone Doe</span>
                                </li>
                                <li>
                                    <span class="title">Email</span>
                                    <span class="desc">jhondoe@gmail.com</span>
                                </li>
                                <li>
                                    <span class="title">Mobile</span>
                                    <span class="desc">000 111 122 333</span>
                                </li>
                                <li>
                                    <span class="title">Website</span>
                                    <span class="desc">jhondow.com</span>
                                </li>
                                <li>
                                    <span class="title">City</span>
                                    <span class="desc">San Bruno</span>
                                </li>
                                <li>
                                    <span class="title">State</span>
                                    <span class="desc">California</span>
                                </li>
                                <li>
                                    <span class="title">Zip</span>
                                    <span class="desc">94066</span>
                                </li>
                                <li>
                                    <span class="title">Country</span>
                                    <span class="desc">USA</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>