<template>
    <div>


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
  
<style scoped>
/* Add your styles here */
</style>
  