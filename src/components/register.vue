<template>
  <div>
    <div class="kotak_login">
      <p class="tulisan_login">Silahkan Registrasi</p>
      <br />
      <form>
        <label>Nama Lengkap</label>
        <input
          type="text"
          name="username"
          v-model="username"
          class="form_login"
          placeholder="Username sesuai nama lengkap..."
        />
        <br />
        <label>Email</label>
        <input
          type="text"
          name="email"
          v-model="email"
          class="form_login"
          placeholder="Email..."
        />
        <label>NISN</label>
        <input
          type="text"
          name="nisn"
          v-model="nisn"
          class="form_login"
          placeholder="NISN..."
        />
        <br />
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          v-model="password"
          class="form_login"
          placeholder="Password .."
        />
        <br />
        <input
          type="button"
          @click="login()"
          class="tombol_login"
          value="LOGIN"
        />
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      username: "",
      email: "",
      nisn: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const payload = {
        username: this.username,
        email: this.email,
        nisn: this.nisn,
        password: this.password,
        role: "mahasiswa",
      };
      const register = await axios.post("http://localhost:3000/users", payload);
      var convertToString = JSON.stringify(register.data);
      sessionStorage.setItem("USER_DATA", convertToString);
      this.$router.push("/");
    },
  },
};
</script>
<style>
h1 {
  text-align: center;
  /*ketebalan font*/
  font-weight: 300;
}
.tulisan_login {
  text-align: center;
  /*membuat semua huruf menjadi kapital*/
  text-transform: uppercase;
}
.kotak_login {
  width: 350px;
  background: rgb(83, 224, 64);
  /*meletakkan form ke tengah*/
  margin: 80px auto;
  padding: 30px 20px;
}
label {
  font-size: 11pt;
}
.form_login {
  /*membuat lebar form penuh*/
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  font-size: 11pt;
  margin-bottom: 20px;
}
.tombol_login {
  background: #3373ff;
  color: white;
  font-size: 11pt;
  width: 100%;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
}
.link {
  color: #232323;
  text-decoration: none;
  font-size: 10pt;
}
</style>