<template>
  <div v-if="userRole === 'dosen' || userRole === 'admin'">
    <div class="container">
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">PROFILE DOSEN</h1>
            <p class="lead text-muted">Profil Dosen Kampus Binus</p>
          </div>
        </div>
      </section>
    </div>
    <div class="container">
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <center>
                  <img
                    src="https://2.bp.blogspot.com/-L7XarFPDPeo/TjQQbFAygNI/AAAAAAAAALE/NRIMNfEpURk/s1600/Pic-16+Hasil+Akhir.jpg"
                    width="200px"
                    height="270px"
                  />
                </center>
                <div class="card-body">
                  <center>
                    <p>Arif Budi Laksana</p>
                    <p>FAKULTAS TEKNIK INFORMATIKA</p>
                    <p>Jakarta, 19 Juni 1999</p>
                  </center>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  ></div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <center>
                  <img
                    src="https://2.bp.blogspot.com/-CTSn1GbPJgA/VZS1412CK3I/AAAAAAAAY-o/CA3s5thrcsc/s1600/DSCF1526%2Bmerah-biru.jpg"
                    width="200px"
                    height="270px"
                  />
                </center>

                <div class="card-body">
                  <center>
                    <p>Fitri Indah Cahyani</p>
                    <p>FAKULTAS DESAIN</p>
                    <p>Bekasi, 8 September 2000</p>
                  </center>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  ></div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <center>
                  <img
                    src="https://unm.ac.id/wp-content/uploads/2014/07/cow1.jpg"
                    width="200px"
                    height="270px"
                  />
                </center>

                <div class="card-body">
                  <center>
                    <p>Bagus Dwi Prasetyo</p>
                    <p>FAKULTAS EKONOMIKA DAN KOMUNIKASI</p>
                    <p>Bekasi, 11 February 2000</p>
                  </center>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "link",
  computed: {
    userRole() {
      return JSON.parse(sessionStorage.getItem("USER_DATA")).role;
    },
  },
  methods: {
    presensi() {
      this.$router.push("/presensi");
      // alert("cukkk");
    },
    statistik() {
      this.$router.push("/statistik");
    },
  },
};
</script>
<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>