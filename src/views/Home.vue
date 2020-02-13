<template>
  <div class="home">
    <div class="section posr" style="padding-top:10px;padding-bottom:0px;">
		<div class="line-one ltgray-one"></div>
		<div class="line-two ltgray-two"></div>
		<div class="line-three ltgray-three"></div>
		<div class="line-four ltgray-four"></div>
		<div class="line-five ltgray-five"></div>
	</div>
	<div id="hero-wrapper" style="display:none;">
		<div class="carousel-wrapper">
			<div id="hero-carousel" class="carousel slide carousel-fade">
				<ol class="carousel-indicators">
					<li data-target="#hero-carousel" data-slide-to="0" class="active"></li>
					<li data-target="#hero-carousel" data-slide-to="1"></li>
					<li data-target="#hero-carousel" data-slide-to="2"></li>
					<li data-target="#hero-carousel" data-slide-to="3"></li>
					<li data-target="#hero-carousel" data-slide-to="4"></li>
					<li data-target="#hero-carousel" data-slide-to="5"></li>
				</ol>
				<div class="carousel-inner">
					<div class="item active">
						<img src="img/architecture-blur-bridge-266044.jpg">
						<div class="carousel-caption">
							<h3>Third slide label</h3>
							<p> Mechanical Engineering </p>
						</div>
					</div>
					<div class="item">
						<img src="img/architecture-blur-bridge-266044.jpg">
						<div class="carousel-caption">
							<h3>Third slide label</h3>
							<p>Electrical Engineering</p>
						</div>
					</div>
					<div class="item">
						<img src="img/architecture-blur-bridge-266044.jpg">
					</div>
					<div class="item">
						<img src="img/architecture-blur-bridge-266044.jpg">
					</div>
				</div>
				<a class="left carousel-control" href="#hero-carousel" data-slide="prev">
					<i class="fa fa-chevron-left left"></i>
				</a>
				<a class="right carousel-control" href="#hero-carousel" data-slide="next">
					<i class="fa fa-chevron-right right"></i>
				</a>
			</div>
		</div>
	</div>
	<!-- Home -->
	<div id="home" class="hero-area">

		<!-- Backgound Image -->
		<div class="bg-image bg-parallax123" :style="{'background-image': `url(${require('@/assets/images/home-slider.jpg')})`}">
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
				<div class="col-md-4 pr1vw" data-animation="fadeInUp">
					<h3>WELCOME TO </h3>
					<h2 class="">Sanus Health Care </h2>
					<p class="lead pt30" style="font-size:1.3vw;line-height:1.5em;">
						Sanus Health Care Private Ltd is a professionally managed progressive pharmaceutical marketing company head
						quartered at Hyderabad, Telangana, India. We at Sanus Health Care formulate, develop and commercialize
						medicines with the AIM to provide affordable medicine needs to all.

						Sanus Health Care focuses on pain management (Orals & Topicals), Nutritional and general medicines. Our
						vision is to be best in providing quality healthcare products and services towards a world of healthy and
						happy people.
					</p>
					<div class="posr mt50 block">
						<a class="rmore" href="aboutus.html"> Read More
						</a>
					</div>
				</div>
				<div class="col-md-4" data-animation="fadeInUp">
					<div class="about-img">
						<img src="@/assets/images/research-development.jpg" alt="">
						<h2 class="pt40 pb30"> RESEARCH & <span class="block"> DEVELOPMENT </span> </h2>
						<p>Sanus Health Care Private Ltd is a professionally managed progressive pharmaceutical marketing company
							head quartered at Hyderabad, Telangana, India. We at Sanus Health Care formulate, develop and
							commercialize medicines with the AIM to provide affordable medicine needs to all. </p>
					</div>
				</div>
				<div class="col-md-4" data-animation="fadeInUp">
					<div class="about-img">
						<img src="@/assets/images/our-manufacturing.jpg" alt="">
						<h2 class="pt40 pb30"> OUR <span class="block"> MANUFACTURING </span> </h2>
						<p>Sanus Health Care Private Ltd is a professionally managed progressive pharmaceutical marketing company
							head quartered at Hyderabad, Telangana, India. We at Sanus Health Care formulate, develop and
							commercialize medicines with the AIM to provide affordable medicine needs to all.</p>
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
	<div id="about" class="section" style="padding-top:50px;">
		<!-- container -->
		<div class="container123 ct-one-plr">
			<div class="row opartners posr z9">
				<div class="col-md-12">
					<h2 class=""> OUR <span class="block">PRODUCTS</span> </h2>
				</div>
			</div>
			<div class="row opartners posr z9 mt40">
				<div class="col-md-4 pr1vw" data-animation="fadeInUp">

					<p class="lead">Sanus Health Care Private Ltd is a professionally managed progressive pharmaceutical marketing
						company head quartered at Hyderabad, Telangana, India. We at Sanus Health Care formulate, develop and
						commercialize medicines with the AIM to provide affordable medicine needs to all. </p>

					<div class="posr block mt50">
						<a class="rmore" href="aboutus.html"> Read More
						</a>
					</div>
				</div>
				<div class="col-md-8" data-animation="fadeInUp">
					<div class="about-img">
						<img src="@/assets/images/our-products.png" alt="">
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

	<div id="about" class="section">
		<!-- container -->
		<div class="container123 ct-one-plr">

			<div class="row opartners posr z9 dflex">
				<div class="col-md-12">
					<h2 class=""> QUALITY <span class="block"> ASSURANCE </span> </h2>
				</div>
			</div>
			<div class="row opartners posr z9 dflex mt40">
				<div class="col-md-4" data-animation="fadeInUp">

					<div class="posr">
						<img src="@/assets/images/quality.png" width="100%" />

					</div>

				</div>
				<div class="col-md-4" data-animation="fadeInUp">
					<p style="font-size:1vw;line-height:1.4vw;" class="lead">
						Sanus Health Care Private Ltd is a professionally managed progressive pharmaceutical marketing company head
						quartered at Hyderabad, Telangana, India. We at Sanus Health Care formulate, develop and commercialize
						medicines with the AIM to provide affordable medicine needs to all.</p>
					<p style="font-size:1vw;line-height:1.4vw;" class="lead">
						Sanus Health Care Private Ltd is a professionally managed progressive pharmaceutical marketing company head
						quartered at Hyderabad, Telangana, India. We at Sanus Health Care formulate, develop and commercialize
						medicines with the AIM to provide affordable medicine needs to all.</p>
					<p style="font-size:1vw;line-height:1.4vw;" class="lead">
						Sanus Health Care Private Ltd is a professionally managed progressive pharmaceutical marketing company head
						quartered at Hyderabad, Telangana, India. We at Sanus Health Care formulate, develop and commercialize
						medicines with the AIM to provide affordable medicine needs to all.</p>
				</div>
				<div class="col-md-4" data-animation="fadeInUp">
					<div class="row text-center">
						<div class="col-md-12">
							<p><img src="@/assets/images/group200.svg" height="100" /></p>
							<!-- <figcaption>Quality Control</figcaption> -->
						</div>
						<div class="col-md-12 mt40">
							<p><img src="@/assets/images/group201.svg" height="100" /></p>
							<!--   <figcaption>Quality Assurance</figcaption> -->
						</div>
						<div class="col-md-12 mt40">
							<p><img src="@/assets/images/group202.svg" height="100" /></p>
							<!--  <figcaption>Microbiological Testing</figcaption> -->
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
					<p class="mbn"> WANT TO GET TO KNOW US ? </p>
					<a href="contact.html">
						<h1 class="mbn"> Contact us </h1>
					</a>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
</script>
