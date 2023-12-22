<template>
    <div>
        <section class="admin-page-section d-flex align-items-center">
            <div class="aps-wrapper w-100">
                <div class="container">
                    <div class="row justify-content-center justify-content-md-start">
                        <div class="admin-content-area">
                            <div class="admin-thumb">
                                <img src="assets/homeimg.jpg" alt="">
                                <a href="#" class="image-change-option"><i class="fas fa-camera"></i></a>
                            </div>
                            <div class="admin-content">
                                <h4 class="name">{{ user.username }}</h4>
                                <p class="desc">Welcome back {{ user.username }} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
                <div class="dashboard-body">
                    <div class="profile">
                        <h5 class="title">Your Profile <span title="Edit Profile" id="edit" class="edit" data-toggle="modal"
                                data-target="#edit-form1"><i class="fas fa-edit"></i></span></h5>

                        <ul class="list-profile-info list-unstyled">
                            <li>
                                <span class="title">Username</span>
                                <span class="desc">{{ user.username }}</span>
                            </li>
                            <li>
                                <span class="title">Email</span>
                                <span class="desc">{{ user.email }}</span>
                            </li>
                            <li>
                                <span class="title">Mobile</span>
                                <span class="desc">{{ user.mobile }}</span>
                            </li>
                            <!-- Add other user information fields here -->
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';

const user = ref({
    username: '', // Assuming you want to display the first_name and last_name as the username
    email: '',
    mobile: '',
    // Add other user information fields here
});

onMounted(() => {
    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData) {
        // Set user data
        user.value = {
            username: `${userData.first_name} ${userData.last_name}`,
            email: userData.email,
            mobile: userData.phonenumber,
            // Add other user information fields here
        };
    }
});
</script>
  
<style scoped>/* Add your styles here */</style>
  