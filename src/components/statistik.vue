<template>
  <div class="app">
    <div class="border2">
      <h2>Tabel Statistik Mahasiswa {{ absens.username }}</h2>
      <table v-if="absens.role === 'mahasiswa' || absens.role === 'dosen'">
        <thead>
          <tr>
            <th>No</th>
            <th>Tanggal Kuliah</th>
            <th>Absen</th>
          </tr>
        </thead>
        <tbody v-for="(mahasiswa, index) in absens.absen" :key="index">
          <tr>
            <td>{{ mahasiswa.id }}</td>
            <td>{{ mahasiswa.tanggal }}</td>
            <td>{{ mahasiswa.picked }}</td>
            <td v-if="absens.role === 'dosen'">{{ mahasiswa.picked2 }}</td>
          </tr>
        </tbody>
      </table>
      <table v-if="absens.role !== 'mahasiswa'">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Mahasiswa</th>
            <th>Tanggal Kuliah</th>
            <th>Absen</th>
            <th>Gambar</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody v-for="user in info" :key="user.id">
          <tr>
            <td>{{ user.id + 1 }}</td>
            <td>{{ user.nama }}</td>
            <td>{{ user.tanggal }}</td>
            <td>{{ user.picked }}</td>
            <td>
              <img :src="user.gambar" height="100px" />
            </td>
            <td>
              <button
                style="
                  background-color: green;
                  color: white;
                  width: 60px;
                  padding: 5px;
                  border: 1px solid white;
                "
                @click="edit(user)"
              >
                Edit</button
              ><br />
              <button
                style="
                  background-color: red;
                  color: white;
                  width: 60px;
                  padding: 5px;
                  border: 1px solid white;
                "
                @click="del(user)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <p>presentase {{ presentase }}</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      form: {
        id: "",
        nama: "",
        tanggal: "",
        picked: "",
        gambar: "",
      },
      info: "",
      presentase: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  computed: {
    absens() {
      return JSON.parse(sessionStorage.getItem("USER_DATA"));
    },
  },
  methods: {
    daysInMonth(month, year) {
      return new Date(year, month, 0).getDate();
    },
    load() {
      const kalender = new Date();
      this.presentase =
        Math.floor(
          (this.absens.absen.length /
            new Date(
              kalender.getFullYear(),
              kalender.getMonth(),
              0
            ).getDate()) *
            100
        ) + "%";
    },
  },
};
</script>

<style>
.app {
  border: 1px solid black none;
  /* background-color: rgb(97, 97, 97); */
  height: 1073px;
  /* color: white; */
}
/* .pr {
  display: flex;
}
.border1 {
  width: 30%;
  padding: 10px;
  background-color: none;
} */
.border2 {
  width: 40%;
  padding: 10px;
  margin-left: 30px;
}
table {
  text-align: center;
  border: 1px solid white;
  padding: 20px;
  width: 800px;
  border-collapse: collapse;
  background-color: white;
}
th {
  border: 1px solid white;
  height: 70px;
  background-color: #333;
  color: white;
}
td {
  border: 1px solid black none;
  text-align: center;
  color: black;
}
input,
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
button[type="submit"] {
  width: 100%;
  background-color: lightskyblue;
  color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button[type="button"] {
  width: 100%;
  background-color: lightskyblue;
  color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>