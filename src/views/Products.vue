<template>
  <div class="products">
    <!-- /Header -->
    <div id="home" class="hero-area">
      <!-- Backgound Image -->
      <!-- <div class="bg-image bg-parallax overlay bgnet3" style="background-image:url(./img/architecture-blur-bridge-266044.jpg)"></div> -->
      <div class="bg-image bg-parallax123" :style="{'background-image': `url(${require('@/assets/images/about-slider.jpg')})`}">
		</div>
      <!-- /Backgound Image -->

      <div class="home-wrapper" data-animation="fadeInUp">
        <div class="container123 ct-one-plr">
          <div class="row">
            <div class="col-md-11">
              <div>
                <div id="owl-demo" class="owl-carousel owl-theme carousel-fade">
                  <div class="item">
                    <p class="h2 white-text">Products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="line-one white-one"></div>
      <div class="line-two white-two"></div>
      <div class="line-three white-three"></div>
      <div class="line-four white-four"></div>
      <div class="line-five white-five"></div>
    </div>

    <div id="about" class="section" style="padding-top:150px;">
      <!-- container -->
      <div class="container123 ct-one-plr">
        <div class="row opartners posr z9">
          <div class="col-md-12" data-animation="fadeInUp">
            <h2 class="mb30">
              OUR
              <span class="block">PRODUCTS</span>
            </h2>
            <p class="lead">
              Sanus Health Care focuses on pain management (Orals & Topicals), Nutritional and general medicines. Our
						vision is to be best in providing quality healthcare products and services towards a world of healthy and
						happy people.
            </p>
          </div>
          <div class="col-md-12 posr z9 pt30" data-animation="fadeInUp" style="background:#fff;">
            <ProductList/>
          </div>
        </div>
      </div>
      <div class="line-one ltgray-one"></div>
      <div class="line-two ltgray-two"></div>
      <div class="line-three ltgray-three"></div>
      <div class="line-four ltgray-four"></div>
      <div class="line-five ltgray-five"></div>
    </div>

    <div id="about" class="section">
      <!-- container -->
      <div class="container123 ct-one-plr">
        <div class="row opartners posr z9">
          <div class="col-md-8" data-animation="fadeInUp">
            <h2 class>
              OUR
              <span class="block">CULTURE</span>
            </h2>
            <div class="posr mt40">
              <p
                class="lead"
              >We have passion. We have ideas. We want to make a difference. It’s why we’re here.</p>
              <p
                class="lead"
              >We’re uniting our team around three powerful actions that we can all take every day across all roles and functions. By doing this together, we’re bringing out the best in all of us… And we’re achieving our purpose to make healthy possible for the people who need us most… patients.</p>

              <div class="posr mt50 block">
                <!-- <a class="rmore" href="/about">Read More</a> -->

                <!-- <a class="smore spritemore" href=""> <span> READMORE </span> </a> -->
              </div>
            </div>
          </div>
          <div class="col-md-4" data-animation="fadeInUp">
            <div class="row text-center">
              <div class="col-md-12 mt40">
                <p>
                  <img src="@/assets/images/our-culture.png" class="img-fluid" width="100%">
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="line-one ltgray-one"></div>
      <div class="line-two ltgray-two"></div>
      <div class="line-three ltgray-three"></div>
      <div class="line-four ltgray-four"></div>
      <div class="line-five ltgray-five"></div>
    </div>

    <div class="section ptn" style="margin-bottom:-112px;">
      <div class="row">
        <div
          class="col-md-6 red-label-left dflex phn"
          style="    background-image: linear-gradient(to right, #0b5684, #1d8cbc);width:55vw;"
        >
          <div class="mvauto label-box">
            <p class="mbn">WANT TO KNOW MORE ABOUT US</p>
            <a href="/about">
              <h1 class="mbn">About Us</h1>
            </a>
          </div>
        </div>
        <div
          class="col-md-6 red-label-right dflex phn"
          style="    background-image: linear-gradient(to right, #0b5684, #1d8cbc);width:55vw;"
        >
          <div class="mvauto label-box right text-right">
            <p class="mbn">WANT TO GET TO KNOW US ?</p>
            <a href="/contact">
              <h1 class="mbn">Contact us</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ProductList from '@/components/ProductsListComponent.vue'
export default {
  name: 'productlist',
  components: {
    ProductList
  }
}
</script>
