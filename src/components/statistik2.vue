<template>
  <div class="c">
    <h3>Statistik Kehadiran Mahasiswa</h3>
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Kehadiran 1</th>
          <th>Kehadiran 2</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody v-for="user in infoMahasiswa" :key="user.id">
        <tr>
          <td>{{ user.id }}</td>
          <td>{{ user.picked }}</td>
          <td>{{ user.picked2 }}</td>
          <td>
            <button
              style="
                background-color: green;
                color: white;
                width: 60px;
                padding: 5px;
                border: 1px solid white;
              "
              @click="edit(user.id)"
            >
              Edit
            </button>
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
        picked: "",
        picked2: "",
      },
      infoMahasiswa: "",
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
    userAbse() {
      return JSON.parse(sessionStorage.getItem("USER_DATA"));
    },
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/infoMahasiswa")
        .then((res) => {
          this.infoMahasiswa = res.data; //respon dari rest api dimasukan ke infoMahasiswa
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios
        .post("http://localhost:3000/infoMahasiswa", this.form)
        .then((res) => {
          this.load();
          this.form.picked = "";
          this.form.picked2 = "";
        });
    },
    edit(user) {
      this.$router.replace({ name: "edit", params: { id: user } });
    },
    update(form) {
      return axios
        .put("http://localhost:3000/infoMahasiswa/" + form.id, {
          picked: this.form.picked,
          picked2: this.form.picked2,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.picked = "";
          this.form.picked2 = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios
        .delete("http://localhost:3000/infoMahasiswa/" + user.id)
        .then((res) => {
          this.load();
          let index = this.infoMahasiswa.indexOf(form.id);
          this.infoMahasiswa.splice(index, 1);
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
