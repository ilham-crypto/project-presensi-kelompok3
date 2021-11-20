<template>
  <div
    v-if="
      userRole === 'mahasiswa' || userRole === 'dosen' || userRole === 'admin'
    "
  >
    <h2>Profil Mahasiswa</h2>
    <br />
    <!-- awal profil mahaSiswa -->
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
      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel2"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel2">
                Profil Fitri Indah Cahyani
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="bungkus" style="margin-left: 50px">
              <div class="one">
                <p>Nama &nbsp;&nbsp;&nbsp;:</p>
                <p>Nomor Induk Mahasiswa&nbsp;&nbsp;&nbsp;:</p>
                <p>Perguruan Tinggi&nbsp;&nbsp;&nbsp; :</p>
                <p>Jenis Kelamin&nbsp;&nbsp;&nbsp;:</p>
                <p>Status Mahasiswa Saat ini&nbsp;&nbsp;&nbsp; :</p>
                <p>Status Awal MahaSiswa&nbsp;&nbsp;&nbsp;:</p>
              </div>
              <div class="two">
                <p>&nbsp;&nbsp;&nbsp;Fitri Indah Cahyani</p>
                <p>&nbsp;&nbsp;&nbsp;24627215318</p>
                <p>&nbsp;&nbsp;&nbsp;Universitas BINUSA</p>
                <p>&nbsp;&nbsp;&nbsp;Perempuan</p>
                <p>&nbsp;&nbsp;&nbsp;Aktif</p>
                <p>&nbsp;&nbsp;&nbsp;Peserta Didik Baru</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br /><br /><br /><br />
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
