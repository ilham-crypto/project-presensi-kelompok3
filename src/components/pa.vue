<template>
  <div class="container" v-if="userRole === 'admin'">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">Album example</h1>
          <p class="lead text-muted">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don’t simply skip over it entirely.
          </p>
          <p>
            <a href="#" class="btn btn-primary my-2">Main call to action</a>
            <a href="#" class="btn btn-secondary my-2">Secondary action</a>
          </p>
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
