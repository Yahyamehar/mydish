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
                                        <img :src="product.image" alt="Product Image" class="card-img-top">
                                        <div class="card-body">
                                            <nuxt-link :to="`/products/${product.id}`">      <h5 class="card-title">{{ product.name }}</h5></nuxt-link>
                                            <p class="card-text">{{ product.description }}</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <div class="price">{{ product.price }}</div>
                                                <div class="buttons">
                                                   
                                                    

                                                </div>
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





        <!-- product-details-popup start -->
        <section id="product-details-popup" class="product-details-popup">
            <div class="modal-overlay" onclick="closeModal()"></div>
            <div class="container">
                <div class="product-zoom-info-container">
                    <div id="closed-modal" class="closed-modal" onclick="closeModal()">X</div>
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="product-zoom-area">
                                <span class="batch">30%</span>
                                <div class="cart-btn-toggle d-lg-none">
                                    <span class="cart-btn"><i class="fas fa-shopping-cart"></i> Cart</span>

                                    <div class="price-btn">
                                        <div class="price-increase-decrese-group d-flex">
                                            <span class="decrease-btn">
                                                <button type="button" class="btn quantity-left-minus" data-type="minus"
                                                    data-field="">-
                                                </button>
                                            </span>
                                            <input type="text" name="quantity" class="form-controls input-number" value="1">
                                            <span class="increase">
                                                <button type="button" class="btn quantity-right-plus" data-type="plus"
                                                    data-field="">+
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-slick">
                                    <div><img src="assets/images/product-detail/01.jpg" alt=""
                                            class="img-fluid blur-up lazyload image_zoom_cls-0"></div>
                                    <div><img src="assets/images/product-detail/02.jpg" alt=""
                                            class="img-fluid blur-up lazyload image_zoom_cls-1"></div>
                                    <div><img src="assets/images/product-detail/03.jpg" alt=""
                                            class="img-fluid blur-up lazyload image_zoom_cls-2"></div>
                                    <div><img src="assets/images/product-detail/01.jpg" alt=""
                                            class="img-fluid blur-up lazyload image_zoom_cls-3"></div>
                                    <!-- <div><img src="assets/images/product-detail/02.jpg" alt=""
                                        class="img-fluid blur-up lazyload image_zoom_cls-4"></div> -->
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="slider-nav">
                                            <div><img src="assets/images/product-detail/01.jpg" alt=""
                                                    class="img-fluid blur-up lazyload"></div>
                                            <div><img src="assets/images/product-detail/02.jpg" alt=""
                                                    class="img-fluid blur-up lazyload"></div>
                                            <div><img src="assets/images/product-detail/03.jpg" alt=""
                                                    class="img-fluid blur-up lazyload"></div>
                                            <div><img src="assets/images/product-detail/01.jpg" alt=""
                                                    class="img-fluid blur-up lazyload"></div>
                                            <!-- <div><img src="assets/images/product-detail/02.jpg" alt=""
                                                class="img-fluid blur-up lazyload"></div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="product-details-content">
                                <a class="wish-link" href="#">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart"
                                        class="svg-inline--fa fa-heart fa-w-16" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512">
                                        <path
                                            d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z">
                                        </path>
                                    </svg>
                                </a>
                                <a href="#" class="cata">Catagory</a>
                                <h2>Product Title Here</h2>
                                <p class="quantity">1kg</p>
                                <h3 class="price">$329 <del>$400</del></h3>
                                <div class="price-increase-decrese-group d-flex">
                                    <span class="decrease-btn">
                                        <button type="button" class="btn quantity-left-minus" data-type="minus"
                                            data-field="">-
                                        </button>
                                    </span>
                                    <input type="text" name="quantity" class="form-controls input-number" value="1">
                                    <span class="increase">
                                        <button type="button" class="btn quantity-right-plus" data-type="plus"
                                            data-field="">+
                                        </button>
                                    </span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque penas et magnis dis parturient montes, nascetur
                                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                                <div class="d-flex justify-content-end">
                                    <a href="#" class="buy-now">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- product-details-popup end -->


        <!-- mobile-footer -->
        <div class="mobile-footer d-flex justify-content-between align-items-center d-xl-none">
            <button class="info" type="button" data-toggle="modal" data-target="#siteinfo1"><i
                    class="fas fa-info-circle"></i></button>

            <div class="footer-cart">
                <a onclick="cartopen()" href="#" class="d-flex align-items-center"><span class="cart-icon"><i
                            class="fas fa-shopping-cart"></i><span class="count">3</span></span> <span
                        class="cart-amount ml-2">$560.00</span></a>
            </div>

            <div class="footer-admin-area">
                <!-- <span class="user-admin">
                <i class="fas fa-user"></i>
            </span> -->
                <button class="user-admin" type="button" data-toggle="modal" data-target="#useradmin1"><i
                        class="fas fa-user"></i></button>
            </div>
        </div>
        <!-- mobile-footer -->



        <div id="popup" class="popup" style="display: none">
            <div class="popup-overlay"></div>
            <div class="popup-wrapper">
                <div class="popupbox">
                    <a href="https://www.google.com/"><img src="assets/images/popup.png" alt="popup"></a>
                    <button class="popup-close"><img src="assets/images/popup-close.png" alt="popup-close"></button>
                </div>
            </div>
        </div>

        <a href="#top-page" class="to-top js-scroll-trigger"><span><i class="fas fa-arrow-up"></i></span></a>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import image1 from './assets/pro1.jpg';
import image2 from './assets/pro3.jpg';
import image3 from './assets/pro2.jpg';

const products = ref([
    {
        id: 1,
        name: 'Salmon Fish',
        description: 'Delicious and nutritious food with a perfect blend of flavors.',
        image: image1,
        sale: true,
        new: false,
        price: '$8.00'
    },
    {
        id: 2,
        name: 'Sushi',
        description: 'Delicious and nutritious food with a perfect blend of flavors.',
        image: image2,
        sale: false,
        new: true,
        price: '$15.00'
    },
    {
        id: 3,
        name: 'Vegitable',
        description: 'Delicious and nutritious food with a perfect blend of flavors.',
        image: image3,
        sale: true,
        new: false,
        price: '$12.50'
    }
]);

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

  