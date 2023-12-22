<!-- [id].vue -->

<template>
    <div>
      <div class="goback-container">
        <NuxtLink to="/" class="goback-button">
          <span></span>
        </NuxtLink>
      </div>
      <section class="product-zoom-info-section section-ptb">
        <div class="container">
          <div class="product-zoom-info-container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <img :src="productDetails.image" alt="Product Image">
              </div>
              <div class="col-lg-6">
                <div class="product-details-content">
                  <a class="wish-link" href="#">
                    <!-- Your existing heart icon code -->
                  </a>
                  <a href="#" class="cata">Category</a>
                  <h2>{{ productDetails.name }}</h2>
                  <p class="quantity">{{ productDetails.quantity }}</p>
                  <h3 class="price">{{ productDetails.price }} <del>$15</del></h3>
                  <div class="price-increase-decrease-group">
                    <button @click="decrementQuantity" class="btn quantity-left-minus" data-type="minus"
                      data-field="">-</button>
                    <input type="text" name="quantity" class="form-controls input-number" :value="quantity" readonly>
                    <button @click="incrementQuantity" class="btn quantity-right-plus" data-type="plus"
                      data-field="">+</button>
                  </div>
                  <p>{{ productDetails.description }}</p>
                  <div class="d-flex justify-content-end">
                    <nuxt-link to="/detailform" class="buy-now">  Wanna Eat - {{ formatCurrency(totalPrice) }}</nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="description-review-area section-ptb">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="food-description">
                <h3>Description</h3>
                <p>{{ productDetails.descriptions }}</p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="food-ingredients">
                <h3>Ingredients</h3>
                <ul>
                  <li>{{ productDetails.ingredients1 }}</li>
                  <hr>
                  <li>{{ productDetails.ingredients2 }}</li>
                  <hr>
                  <li>{{ productDetails.ingredients3 }}</li>
                  <hr>
                  <li>{{ productDetails.ingredients4 }}</li>
                  <hr>
  
                  <!-- Add more ingredients as needed -->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { ref } from 'vue';
  import image1 from './assets/pro1.jpg';
  import image2 from './assets/pro3.jpg';
  import image3 from './assets/pro2.jpg';
  
  const route = useRoute();
  
  // Simulate a function to retrieve product details based on ID
  const getProductDetails = (productId) => {
    // Replace this with your actual data or API call
    const products = [
      {
        id: 1,
        name: 'Salmon Fish',
        description: 'Delicious and nutritious food with a perfect blend of flavors.',
        image: image1,
        sale: true,
        new: false,
        price: '$8.00',
        ingredients1: 'Freshly caught seafood - High in Omega-3 fatty acids for heart health',
        ingredients2: 'Fragrant herbs and spices - Packed with antioxidants and anti-inflammatory properties',
        ingredients3: 'Tuna Fish - Premium grade, responsibly sourced, rich in protein and essential vitamins',
        ingredients4: 'Locally sourced vegetables - Nutrient-rich, supporting local farmers',
        descriptions: 'Savor the exquisite flavors of our Pan-Seared Salmon with Lemon Dill Sauce, a culinary delight that celebrates the rich and buttery texture of salmon. This dish is a perfect harmony of simplicity and sophistication, bringing together high-quality salmon fillets with a zesty lemon dill sauce.'
      },
      {
        id: 2,
        name: 'Sushi',
        description: 'Delicious and nutritious food with a perfect blend of flavors.',
        image: image2,
        sale: false,
        new: true,
        price: '$15.00',
        ingredients1: 'Freshly caught seafood - High in Omega-3 fatty acids for heart health',
        ingredients2: 'Fragrant herbs and spices - Packed with antioxidants and anti-inflammatory properties',
        ingredients3: 'Tuna Fish - Premium grade, responsibly sourced, rich in protein and essential vitamins',
        ingredients4: 'Locally sourced vegetables - Nutrient-rich, supporting local farmers',
        descriptions: 'Our Assorted Sushi Platter is a testament to the art of Japanese culinary craftsmanship, where precision meets creativity to deliver a feast for the senses. Whether you are a sushi connoisseur or a newcomer to this culinary tradition, this platter promises an unforgettable journey through the delicate and delightful world of sushi.',
      },
      {
        id: 3,
        name: 'Vegetable',
        description: 'Delicious and nutritious food with a perfect blend of flavors.',
        image: image3,
        sale: true,
        new: false,
        price: '$12.50',
        ingredients1: 'Leafy greens - Excellent source of vitamins and minerals',
        ingredients2: 'Fragrant herbs and spices - Packed with antioxidants and anti-inflammatory properties',
        ingredients3: 'Tuna Fish - Premium grade, responsibly sourced, rich in protein and essential vitamins',
        ingredients4: 'Locally sourced vegetables - Nutrient-rich, supporting local farmers',
        descriptions: 'Chicken Preparation We start with premium chicken breast, thinly sliced to ensure quick and even cooking.The chicken is marinated in a flavorful blend of soy sauce, garlic, and ginger, infusing it with a savory umami essence.This ensures each bite of chicken is tender, juicy, and packed with the rich flavors of the marinade.Vegetable Medley:A vibrant medley of vegetables takes center stage in this stir - fry.Crisp broccoli florets, thinly sliced bell peppers, matchstick carrots, and snow peas contribute a riot of colors and textures.These vegetables not only add visual appeal but also provide an array of nutrients, making the dish both wholesome and visually enticing.',
      }
    ];
  
    return products.find(product => product.id === Number(productId)) || {};
  };
  
  const productDetails = getProductDetails(route.params.id);
  const quantity = ref(1);
  
  const incrementQuantity = () => {
    if (quantity.value < 10) {
      quantity.value += 1;
      updateTotalPrice(); // Call the function to update the total price
    }
  };
  
  const decrementQuantity = () => {
    if (quantity.value > 1) {
      quantity.value -= 1;
      updateTotalPrice(); // Call the function to update the total price
    }
  };
  
  const totalPrice = ref(parseFloat(productDetails.price.slice(1))); // Initialize with the base price
  
  const updateTotalPrice = () => {
    totalPrice.value = parseFloat(productDetails.price.slice(1)) * quantity.value;
  };
  
  const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
  };
  </script>
  
  
  
  
  <style lang="scss" scoped>
  .goback-container {
    text-align: center;
    margin-top: 20px;
  }
  
  .goback-button {
    width: 40px;
    height: 40px;
    background-color: #3498db;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;
    position: relative;
    display: inline-block;
    overflow: hidden;
  }
  
  .goback-button span {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 2px;
    background-color: #fff;
    display: block;
  }
  
  .goback-button:hover {
    background-color: #2980b9;
  }
  
  .product-zoom-info-section {
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
  
    .product-details-content {
      /* Add any additional styling for the product details */
    }
  }
  
  .price-increase-decrease-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 120px;
  }
  
  .decrease-btn,
  .increase {
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;
  }
  
  .input-number {
    width: 40px;
    text-align: center;
    font-size: 16px;
  }
  </style>