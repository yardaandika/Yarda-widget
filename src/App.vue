<template>
  <div id="app">
    <header class="bg-dark py-3">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
          <router-link to="/" class="navbar-brand">WIDGET</router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Cuaca</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/location" class="nav-link"
                  >Lokasi</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/stopwatch" class="nav-link"
                  >Stopwatch</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/tictactoe" class="nav-link"
                  >Tic Tac Toe</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/photo" class="nav-link">Photo</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div class="container py-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: "App",
  mounted() {
    // Inisialisasi Navbar Toggler
    $(".navbar-toggler").on("click", function () {
      $(this).toggleClass("true");
    });
  },
};
</script>

<style>
#app {
  text-align: center;
}

header {
  background: #333;
  padding: 20px;
}

.navbar-brand {
  font-size: 24px;
  color: aqua;
}

.navbar-toggler {
  border: none;
  outline: navajowhite;
}

.nav-item {
  margin-right: 10px;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #aaa;
}

.container {
  max-width: 960px;
  margin: 0 auto;
}

.py-4 {
  padding-top: 0rem;
  padding-bottom: 2rem;
}
</style>