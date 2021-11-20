<template>
  <div v-if="userRole === 'mahasiswa'">
    <div class="container">
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">PROFILE MAHASISWA</h1>
            <p class="lead text-muted">Profil Mahasiswa Kampus Binus</p>
          </div>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
              @click="presensi()"
            >
              Presensi
            </button>
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
              @click="statistik()"
            >
              Statistik
            </button>
          </div>
        </div>
      </section>
    </div>
    <div class="bungkus">
      <!-- Button trigger modal -->

      <!-- Modal -->

      <div class="ones">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGACNGsTp6pJJZOxLFdAYNR58Hkup_JtE4w&usqp=CAU"
          width="190px"
          height="240px"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal2"
        />
        <div class="nama">
          <h4><b>Fitri Indah Cahyani</b> <br />"Fakultas Desain"</h4>
        </div>
      </div>

      <!-- Modal -->
    </div>
    <br /><br /><br /><br />
  </div>
</template>
<style scoped>
.bungkus {
  display: flex;
  margin: auto;
  width: auto;
}
h2 {
  background-color: whitesmoke;
  text-align: center;
}

img {
  width: 340px;
  margin-left: 50px;
  height: 400px;
  padding: 80px;
  margin-top: -50px;
}
.ones {
  width: 450px;
  margin-left: 450px;
  border: 1px solid none;
  background-color: rgb(236, 236, 236);
}
.nama {
  border: 1px solid none;
  margin-top: -70px;
  width: 325px;
  text-align: center;
  margin-left: 60px;
  background-color: #dadada;
}
.one {
  text-align: right;
}
.two {
  text-align: left;
}
</style>

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