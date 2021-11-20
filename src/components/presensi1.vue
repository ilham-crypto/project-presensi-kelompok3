<template>
  <div id="q">
    <br />
    <div class="b">
      <form @submit.prevent="add" action="login.php" method="POST" id="g">
        <h3>Presensi infoDosen</h3>
        <p>
          <label><b>Materi Kulia:</b></label
          ><br />
          <textarea
            placeholder="Materi Kuliah..."
            type="text"
            v-model="form.materi"
            required
          ></textarea>
        </p>
        <p>
          <label><b>Tanggal:</b></label
          ><br />
          <input
            placeholder="Masukkan Nama..."
            type="date"
            v-model="form.tanggal"
            required
          />
        </p>
        <p>
          <label><b>picked:</b></label
          ><br />
          <input
            id="picked"
            value="picked"
            type="radio"
            v-model="form.picked"
            required
          />
        </p>
        <p>
          <label><b>Upload Foto:</b></label
          ><br />
          <input
            placeholder="Masukan Foto..."
            type="text"
            v-model="form.gambar"
            required
          />
        </p>
        <button
          type="submit"
          style="width: 210px"
          id="f"
          v-show="!updateSubmit"
        >
          Presensi
        </button>
        <button
          type="submit"
          style="width: 210px"
          id="f"
          v-show="updateSubmit"
          @click="update(form)"
        >
          Update
        </button>
      </form>
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
        alert("Presensi succes");
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
  margin-left: 325px;
}
.c {
  width: 900px;
  margin-left: 40px;
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
#z {
  margin-bottom: 5px;
}
</style>