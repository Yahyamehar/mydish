<template>
    <div>
      <section class="login-section section-ptb">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="eflux-login-form-area">
                <h2>Create an Account</h2>
                <p>Welcome! Please fill in the following details to create your account.</p>
  
                <form action="#" class="eflux-login-form">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="input-item">
                        <label for="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" placeholder="Enter your First Name" required />
                      </div>
                    </div>
  
                    <div class="col-lg-6">
                      <div class="input-item">
                        <label for="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" placeholder="Enter your Last Name" required />
                      </div>
                    </div>
  
                    <div class="col-lg-6">
                      <div class="input-item">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your Email Address" required />
                      </div>
                    </div>
  
                    <div class="col-lg-6">
                      <div class="input-item">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your Password" required />
                      </div>
                    </div>
                  </div>
  
                  <div>
                    <button type="submit" class="submit">Create Account</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
    /* Add your scoped styles here */
    /* For example: */
    h2 {
      color: #333;
    }
  
    p {
      color: #666;
      margin-bottom: 20px;
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
  </style>
  