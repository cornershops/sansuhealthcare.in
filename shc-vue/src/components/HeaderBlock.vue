  <template>
     <!-- Header -->
    <header id="header">
      <div class="container ct-one-plr" style="padding-top:10px;">
        <div class="navbar-header">
          <!-- Logo -->
          <div class="navbar-brand">
            <a class="logo" href="index.html">
              <img src="@/assets/logo.png" alt="logo">
            </a>
          </div>
          <!-- /Logo -->

          <!-- Mobile toggle -->
          <button class="navbar-toggle">
            <span></span>
          </button>
          <!-- /Mobile toggle -->
        </div>

        <!-- Navigation -->
        <nav id="nav">
          <ul class="main-menu nav navbar-nav navbar-right" style="margin-top:10px;">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/about">About Us</router-link>
            </li>
            <li>
              <router-link to="/products">Products</router-link>
            </li>
            <li>
              <router-link to="/contact">Contact</router-link>
            </li>
          </ul>
        </nav>
        <!-- /Navigation -->
      </div>
      <div class="line-one ltgray-one"></div>
      <div class="line-two ltgray-two"></div>
      <div class="line-three ltgray-three"></div>
      <div class="line-four ltgray-four"></div>
      <div class="line-five ltgray-five"></div>
    </header>
    <!-- /Header -->
  </template>
