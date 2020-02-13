<template>
    <div class="contact">
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
									<p class="h2 white-text">Contact</p>
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
	<!-- About -->
	<div id="about" class="section" style="padding-top:150px;">
		<!-- container -->
		<div class="container123 ct-one-plr">

			<div class="row opartners posr z9">
				<div class="col-md-4" data-animation="fadeInUp">
					<h2 class=""> FEEL FREE <span class="block">TO MAKE</span> </h2>
					<p class="white mb5">
						sanushealthcare ,
					</p>
					<p class="mbn lh20" style="color:#797979;">--- </p>
					<div class="pb15 pt30">
						<p class="mbn" style="color:#797979;line-height:normal;">
							Email
						</p>
						<a href="mailto:#info@sanushealthcare.in" class="pln mail">info@sanushealthcare.in</a>
					</div>
					<div class="pb15">
						<p class="mbn" style="color:#797979;line-height:normal;">
							Mobile
						</p>
						<a href="tel:+91 99858 33357" class="pln mail">+91 99858 33357</a>
					</div>
				</div>
				<div class="col-md-8" data-animation="fadeInUp">
					<div class="about-img">
						<img src="@/assets/images/map.jpg" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="section ptn" style="margin-bottom:-112px;">
		<div class="row">
			<div class="col-md-6 red-label-left dflex phn"
				style="    background-image: linear-gradient(to right, #0b5684, #1d8cbc);width:55vw;">
				<div class="mvauto label-box">
					<p class="mbn">KNOW MORE ABOUT PRODUCTS</p>
					<a href="products.html">
						<h1 class="mbn"> Products </h1>
					</a>
				</div>
			</div>
			<div class="col-md-6 red-label-right dflex phn"
				style="    background-image: linear-gradient(to right, #0b5684, #1d8cbc);width:55vw;">
				<div class="mvauto label-box right text-right">
					<p class="mbn"> WANT TO KNOW MORE ABOUT US ? </p>
					<a href="about.html">
						<h1 class="mbn"> About Us </h1>
					</a>
				</div>
			</div>
		</div>
	</div>
    </div>
</template>
