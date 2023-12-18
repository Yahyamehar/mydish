<template>
    <section class="login-section section-ptb">
        <div class="container">
            <p class="login-intro">
                Welcome to Our Store! To make a purchase, please sign in to your account. If you are a new customer,
                you can <NuxtLink to="signup" class="signup-link">sign up here</NuxtLink>.
            </p>
            <div class="row align-items-center">
                <div class="col-lg-6 mb--30 mb-lg-0">
                    <div class="eflux-login-form-area">
                        <h2>Login</h2>
                        <p>Welcome back! Please sign in to your account.</p>

                        <form action="#" class="eflux-login-form">
                            <div class="input-item">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Enter your Email Address"
                                    required />
                            </div>

                            <div class="input-item">
                                <label for="password">Password</label>
                                <input type="password" id="password" name="password" placeholder="Enter your Password"
                                    required />
                            </div>

                            <div>
                                <button type="submit" class="submit">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="new-customer-container">
                        <h2>New Customer</h2>
                        <div class="new-customer-box">
                            <h6>Create a New Account</h6>
                            <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be
                                able to
                                order from our shop. To start shopping, click register.</p>
                            <NuxtLink to="signup" class="signup-btn">Sign Up</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
  
<script setup lang="ts"></script>
  
<style scoped>
h2 {
    color: #333;
}

p {
    color: #666;
    margin-bottom: 20px;
}

.eflux-login-form {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.input-item {
    margin-bottom: 20px;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button.submit {
    background-color: #3498db;
    color: #fff;
    padding: 15px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s ease;
}

button.submit:hover {
    background-color: #2980b9;
}

.new-customer-container {
    margin-top: 20px;
}

.new-customer-box {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.signup-btn {
    display: inline-block;
    margin-top: 10px;
    background-color: #2ecc71;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    text-decoration: none;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.signup-btn:hover {
    background-color: #27ae60;
}

.signup-link {
    color: #e74c3c; /* Use a different color for the link, you can change it */
    font-weight: bold;
    text-decoration: underline;
}

.signup-link:hover {
    color: #c0392b; /* Darker color on hover, you can change it */
    text-decoration: none;
}
</style>
  