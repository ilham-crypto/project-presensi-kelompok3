<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/beranda"
          ><img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCLCQ5e9ESwB_VI6WuGhkMee022dBjzUkuLQ&usqp=CAU"
            width="100px"
            height="90px"
            style="border-radius: 50%"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/beranda"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/tentang">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">Contact</a>
            </li>
            <div class="w3-dropdown-hover">
              <button class="w3-button" v-if="logout !== null">Profil</button>
              <div class="w3-dropdown-content w3-bar-block w3-border">
                <a
                  href="/pm"
                  class="w3-bar-item w3-button"
                  v-if="roles === 'mahasiswa'"
                  >Mahasiswa</a
                >
                <a
                  href="/pd"
                  class="w3-bar-item w3-button"
                  v-if="roles === 'dosen'"
                  >Dosen</a
                >
                <a
                  href="/pa"
                  class="w3-bar-item w3-button"
                  v-if="roles === 'admin'"
                  >Admin</a
                >
              </div>
            </div>
            <div class="w3-dropdown-hover">
              <button class="w3-button" v-if="logout !== null">
                Infomasi Perkuliahan
              </button>
              <div class="w3-dropdown-content w3-bar-block w3-border">
                <a
                  href="/pm1"
                  class="w3-bar-item w3-button"
                  v-if="roles === 'mahasiswa'"
                  >Mahasiswa</a
                >
                <a
                  href="/pd1"
                  class="w3-bar-item w3-button"
                  v-if="roles === 'dosen'"
                  >Dosen</a
                >
                <a
                  href="/pa1"
                  class="w3-bar-item w3-button"
                  v-if="roles === 'admin'"
                  >Admin</a
                >
              </div>
            </div>
          </ul>
          <a
            class="btn btn-outline-danger my-2 my-sm-0"
            style="margin-left: 600px"
            v-if="logout === null"
            href="/login"
          >
            Login</a
          >

          <a
            class="btn btn-outline-danger my-2 my-sm-0"
            style="margin-left: 600px"
            v-if="logout !== null"
            @click="out"
            href="/"
          >
            Logout</a
          >
        </div>
      </div>
    </nav>
    <router-view></router-view>
    <!-- Footer -->
    <footer class="text-center text-lg-start bg-light text-muted">
      <!-- Section: Social media -->
      <section
        class="
          d-flex
          justify-content-center justify-content-lg-between
          p-4
          border-bottom
        "
      >
        <!-- Left -->
        <div class="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <!-- Left -->

        <!-- Right -->
        <div>
          <a
            href="https://www.facebook.com/universitasbinanusantara/"
            class="me-4 text-reset"
            target="t_blank"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          &nbsp; &nbsp;
          <a
            href="https://twitter.com/binus_univ"
            target="t_blank"
            class="me-4 text-reset"
          >
            <i class="fab fa-twitter"></i>
          </a>

          &nbsp; &nbsp;
          <a
            href="https://www.instagram.com/binusuniversityofficial/?hl=en"
            class="me-4 text-reset"
            target="t_blank"
          >
            <i class="fab fa-instagram"></i>
          </a>

          &nbsp; &nbsp;
          <a
            href="https://id.linkedin.com/school/binus-international/"
            class="me-4 text-reset"
            target="t_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
        <!-- Right -->
      </section>
      <!-- Section: Social media -->

      <!-- Section: Links  -->
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <!-- Grid row -->
          <div class="row mt-3">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <!-- Content -->
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>University Me
              </h6>
              <p>
                <a href="/beranda"
                  ><img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCLCQ5e9ESwB_VI6WuGhkMee022dBjzUkuLQ&usqp=CAU"
                    width="100px"
                    height="90px"
                    style="border-radius: 50%"
                /></a>
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">MENU</h6>
              <li><a href="/beranda" class="text-reset">Home</a></li>
              <li><a href="/tentang" class="text-reset">About</a></li>
              <li><a href="/contact" class="text-reset">Contact</a></li>
              <li><a href="/login" class="text-reset">Login</a></li>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i class="fas fa-phone-alt"> &nbsp;</i>021 297791100 Ext : 7081
                <br /><i class="fas fa-school"></i> Binus @Alam Sutera
              </p>
              <p>
                <i class="fas fa-phone-alt"> &nbsp;</i>022 20568888 Ext : 7822
                <br /><i class="fas fa-school"></i> Binus @Bandung
              </p>
              <p>
                <i class="fas fa-phone-alt"> &nbsp;</i>021 29285588 Ext : 7918
                <br /><i class="fas fa-school"></i> Binus @Bekasi
              </p>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
      </section>
      <!-- Section: Links  -->

      <!-- Copyright -->
      <div
        class="text-center p-4"
        style="background-color: rgba(0, 0, 0, 0.05)"
      >
        © 2021
        <a class="text-reset fw-bold" href="https://mdbootstrap.com/"
          >MDBootstrap.com</a
        >
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      roles: "",
      logout: {},
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    out() {
      sessionStorage.clear();
    },
    getUser() {
      let user = JSON.parse(sessionStorage.getItem("USER_DATA"));
      this.roles = user === null ? "" : user.role;
      this.logout = user;
    },
  },
  userRole() {
    return JSON.parse(sessionStorage.getItem("USER_DATA")).role;
  },
};
</script>