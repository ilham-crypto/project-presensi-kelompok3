<template>
  <div class="c">
    <h3>Statistik Dosen</h3>
    <table class="table" id="d">
      <thead class="thead-dark">
        <tr>
          <th>No</th>
          <th>Materi Siswa</th>
          <th>Tanggal Kuliah</th>
          <th>Kehadiran</th>

          <th>Action</th>
        </tr>
      </thead>
      <tbody class="table-light">
        <tr v-for="user in infoDosen" :key="user.id">
          <td scope="row">
            <b>{{ user.id }}</b>
          </td>
          <td>{{ user.materi }}</td>
          <td>{{ user.tanggal }}</td>
          <td>
            {{ user.picked }}
          </td>

          <td>
            <!-- <button class="btn btn-success" @click="edit(user)">
              Perpanjangan
            </button> -->
            &nbsp;
            <button class="btn btn-danger" @click="del(user)">Hapus</button>
          </td>
        </tr>
      </tbody>
    </table>
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
        materi: "",
        tanggal: "",
        picked: "",
        persentase: "",
      },
      infoDosen: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/infoDosen")
        .then((res) => {
          this.infoDosen = res.data; //respon dari rest api dimasukan ke infoDosen
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/infoDosen", this.form).then((res) => {
        this.load();
        this.form.materi = "";
        this.form.tanggal = "";
        this.form.picked = "";
        this.form.persentase = "";
      });
    },
    edit(user) {
      this.updateSubmit = true;
      this.form.id = user.id;
      this.form.materi = user.materi;
      this.form.tanggal = user.tanggal;
      this.form.picked = user.picked;
      this.form.persentase = user.persentase;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/infoDosen/" + form.id, {
          materi: this.form.materi,
          tanggal: this.form.tanggal,
          picked: this.form.picked,
          persentase: this.form.persentase,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.materi = "";
          this.form.tanggal = "";
          this.form.picked = "";
          this.form.persentase = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios.delete("http://localhost:3000/infoDosen/" + user.id).then((res) => {
        this.load();
        let index = this.infoDosen.indexOf(form.materi);
        this.infoDosen.splice(index, 1);
      });
    },
  },
};
</script>

<style>
#a {
  background-color: rgb(63, 201, 255);
  font-family: "Courier New";
}
#q {
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 30px;
  margin-top: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 20px;
  background-color: rgb(83, 180, 255);
}
.b {
  display: flex;
  text-align: left;
  padding-left: 30px;
}
.c {
  width: 900px;
  margin-left: 250px;
  margin-right: 40px;
  padding-top: 20px;
  text-align: center;
}
#f {
  background-color: rgb(60, 171, 255);
}
#e {
  border: 2px dashed black;
  text-align: center;
  border-radius: 35px;
  margin-right: 150px;
  margin-left: 150px;
  margin-top: 150;
}
#g {
  border: 2px dashed black;
  text-align: center;
  padding: 15px;
  border-radius: 35px;
  margin-left: 120px;
  margin-top: 150;
}
</style>
