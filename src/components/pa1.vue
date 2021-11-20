<template>
  <div class="container" v-if="userRole === 'admin'">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1>Admin</h1>
          <br />
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
              @click="statistik1()"
            >
              Statistik Dosen
            </button>
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
              @click="statistik()"
            >
              Statistik Siswa
            </button>
          </div>
        </div>
      </div>
    </section>
    <div class="cardd">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-wkicYt-lTVZvKdTh5eGYkRmqr9NuxHWQg&usqp=CAU"
        alt="John"
        style="width: 80%"
      />
      <h1>ILHAM SANTOSO</h1>
      <p class="titlee">CEO & Founder, Example</p>
      <p>Harvard University</p>
      <div class="buttonn">Contact</div>
    </div>
    <br />
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
    statistik1() {
      this.$router.push("/statistik1");
      // alert("cukkk");
    },
    statistik() {
      this.$router.push("/statistik");
      // alert("cukkk");
    },
  },
};
</script>
<style>
.cardd {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.titlee {
  color: grey;
  font-size: 18px;
}

.buttonn {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

.button:hover,
a:hover {
  opacity: 0.7;
}
</style>
