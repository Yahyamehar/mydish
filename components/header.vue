<template>
    <header class="header">
        <div class="header-top">
            <div class="mobile-header d-flex justify-content-between align-items-center d-xl-none">
                <NuxtLink to="/" class="logo"><img src="assets/mydish.jpeg" alt="logo" height="70" width="70"
                        style="border-radius: 34px;"></NuxtLink>

                <!-- search select -->
                <div class="text-center mobile-search">
                    <button type="button" data-toggle="modal" data-target="#search-select-id"><i
                            class="fas fa-search"></i></button>
                </div>

                <!-- menubar -->
                <div>
                    <button class="menu-bar" type="button" data-toggle="modal" data-target="#menu-id">
                        Home<i class="fas fa-caret-down"></i>
                    </button>
                </div>

            </div>
            <div class="d-none d-xl-flex row align-items-center">
                <div class="col-5 col-md-2">
                    <NuxtLink to="/" class="logo"><img src="assets/mydish.jpeg" alt="logo" height="70" width="70"
                            style="border-radius: 34px;"></NuxtLink>
                </div>
                <div class="col-5 col-md-9 col-lg-5">

                    <div class="select-search-option d-none d-md-flex">
                        <form action="#" class="search-form">
                            <input type="text" name="search" placeholder="Search for Products">
                            <button class="submit-btn"><i class="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>
                <div class="col-2 col-md-1 col-lg-5">
                    <ul class="site-action d-none d-lg-flex align-items-center justify-content-between  ml-auto">
                        <li class="site-phone" @click="confirmCall">
                            <a><i class="fas fa-phone"></i> +49 56895656</a>
                        </li>
                        <li class="site-help">
                            <NuxtLink to="contact"><i class="fas fa-question-circle"></i> Help & More</NuxtLink>
                        </li>
                        <li class="my-account d-none"><a class="dropdown-toggle" href="#" role="button" id="myaccount"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i
                                    class="fas fa-user mr-1"></i> My Account</a>
                            <ul class="submenu dropdown-menu" aria-labelledby="myaccount">
                                <li><a href="profile.html">Profile</a></li>
                                <li><a href="#">Sign Out</a></li>
                            </ul>
                        </li>
                        <li class="signin-option">
                            <NuxtLink to="/signin"><i class="fas fa-user mr-2"></i>Sign In</NuxtLink>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
        <hr>

        <!-- <-- Header Bottom -->
        <div class="header-bottom">
            <div class="row m-0 align-items-center mega-menu-relative">
                <div class="col-md-2 p-0 d-none d-xl-block">
                </div>
                <div class="col-md-10">
                    <div class="menu-area d-none d-xl-flex justify-content-between align-items-center">
                        <ul class="menu d-xl-flex flex-wrap list-unstyled">
                            <li class="item-has-children">
                                <NuxtLink to="/">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/myorder">My Order</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/about">About Us</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/contact">Contact Us</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/dashboard">My Dashboard</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import Swal from 'sweetalert2';


const confirmCall = () => {
  Swal.fire({
    title: 'Do you want to make a call?',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
    icon: 'question',
  }).then((result) => {
    if (result.isConfirmed) {
      // Implement the logic to make a call
      window.location.href = "/contact";
    }
  });
};

</script>

<style scoped></style>