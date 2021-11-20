<template>
  <div id="q">
    <br />
    <h3>Pengecekan kephadiran</h3>
    <label><b>Kehadiran:</b></label
    ><br />
    <input value="✓" type="radio" v-model="form.picked2" required /><br /><br />
    <button
      type="submit"
      style="width: 210px"
      id="f"
      v-show="!updateSubmit"
      @click="update(form)"
    >
      Update
    </button>
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
        picked2: "",
      },
      infoMahasiswa: "",
      updateSubmit: false,
    };
  },
  methods: {
    async update(form) {
      const id = this.$route.params.id;
      const userEdit = await axios.get(
        "http://localhost:3000/infoMahasiswa/" + id
      );
      return axios
        .put("http://localhost:3000/infoMahasiswa/" + id, {
          nama: userEdit.data.nama,
          tanggal: userEdit.data.tanggal,
          picked: userEdit.data.picked,
          persentase: "",
          gambar: userEdit.data.gambar,
          picked2: this.form.picked2,
        })
        .then((res) => {
          alert("Sukses Edit");
          this.$router.push("/statistik2");
        })
        .catch(() => {
          alert("Error");
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
  width: auto;
  text-align: center;
  border-radius: 20px;
  background-color: rgb(83, 180, 255);
}
.b {
  text-align: center;
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