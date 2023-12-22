<template>
    <div id="top-page" class="sticky-sidebar-home">
        <div class="page-layout home-layout">
            <div class="main-content-area">
                <!-- banner-section start -->
                <section class="banner-section d-flex align-items-center">
                    <div class="banner-content-area">
                        <div class="container">
                            <div class="banner-content">
                                <h6>Organic and fresh food</h6>
                                <h2>Get freshness delivered<br>on your doorstep.</h2>
                                <NuxtLink to="/about" class="banner-btn">Read More</NuxtLink>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- banner-section end -->
                <!-- trending product-section start -->
                <div>
                    <section class="trending-product-section">
                        <div class="container mt-5">
                            <div class="section-heading text-center">
                                <h4 class="heading-title">
                                    <span class="heading-circle green"></span> Our Products
                                </h4>
                            </div>
                            <br>
                            <div class="row">
                                <!-- Product Cards -->
                                <div v-for="product in products" :key="product.id" class="col-md-4 mb-4">
                                    <div class="card product-card">
                                        <!-- Display base64-encoded image -->
                                        <img :src="'data:image/jpeg;base64,' + product.product_image" alt="Product Image"
                                            class="card-img-top">
                                        <div class="card-body">
                                            <nuxt-link :to="`/${product.id}`">
                                                <h5 class="card-title">{{ product.product_name }}</h5>
                                            </nuxt-link>
                                            <p class="card-text">{{ product.short_description }}</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="price">${{ product.product_price }}</div>
                                                <!-- Add other buttons if needed -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <!-- trending product-section end -->

                <!-- testimonial-section start -->
                <section class="testimonial-section">
                    <div class="container">
                        <div class="section-heading">
                            <h4 class="heading-title"><span class="heading-circle"></span>About MyDish</h4>
                        </div>
                        <br>
                        <div class="section-wrapper">
                            <p><b>MyDish: Elevating Culinary Experiences with an Array of Gastronomic Delights</b>

                                <br> <b>Company Overview: </b>

                                Welcome to MyDish, a gastronomic haven based in Germany that transcends the boundaries of
                                culinary excellence. At MyDish, we are passionate about curating an extensive and diverse
                                menu, specializing in fish, vegetables, and meat dishes. Our commitment to delivering
                                unparalleled quality, innovative flavors, and a memorable dining experience makes us a
                                distinctive player in the culinary landscape.
                            </p>
                            <hr>
                            <p> <br> <b>Founding Principles:</b>

                                Founded on the principles of culinary innovation, quality ingredients, and an unwavering
                                dedication to customer satisfaction, MyDish is more than just a restaurant; it's a culinary
                                journey. Our founders envisioned a space where food enthusiasts could indulge in a symphony
                                of flavors, embracing the richness of the sea, the bounty of the land, and the savory notes
                                of expertly prepared meats. </p>
                        </div>
                    </div>
                </section>
                <!-- testimonial-section end -->

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const products = ref([]);

onMounted(async () => {
    try {
        // Make a GET request to your backend API endpoint that returns the product data
        const response = await axios.get('http://localhost:5000/api/products');
        console.log(response.data);

        // Assuming the response contains an array of products
        products.value = response.data.products; // Adjust if needed
    } catch (error) {
        console.error('Error fetching product data:', error.message);
    }
});
</script>

  
<style scoped>
/* Section Heading */
.heading-title {
    font-size: 2rem;
    font-weight: bold;
}

/* Product Card */
.product-card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Card Image */
.card-img-top {
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid #e0e0e0;
}

/* Card Title */
.card-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

/* Card Text */
.card-text {
    margin-bottom: 1rem;
    color: #555;
}

/* Text Muted */
.text-muted {
    color: #888;
}

/* Price */
.price {
    font-size: 1.25rem;
    font-weight: bold;
    color: #007bff;
}

/* Buttons */
.buttons {
    display: flex;
    gap: 1rem;
}

/* Add to Cart Button */
.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
}

/* Details Button */
.btn-outline-secondary {
    color: #6c757d;
    border-color: #6c757d;
}

/* Responsive Margin Bottom */
.mb-4 {
    margin-bottom: 1.5rem;
}

/* Center Section Heading */
.text-center {
    text-align: center;
}

@media (max-width: 767px) {
    .product-card {
        width: 100%;
        /* Adjust the width as needed */
    }
}
</style>

  