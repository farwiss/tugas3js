function dataPerson() {
  let forms = document.getElementById("frm");
  let nama = forms.nama.value;

  // tugas
  // lengkapi kode berikut dan tampilkan hasilnya ada pada html
  // 1. isisan nama
  // 2. isian pekerjaan
  // 3. isian hobby
  let pekerjaan = forms.pekerjaan.value;
  let hobby = forms.hobby.value;
  let input = `
  <table border="2">
  <tr><th>Selamat Datang ${nama}</th></tr> 
  <tr><td>Pekerjaan: ${pekerjaan}</td></tr> 
  <tr><td>Hobby: ${hobby}</td></tr>
  </table>
  `;
  let no_input = "<h2>Maaf anda belum memasukkan data yang dibutuhkan</h2>";
  let hasil = nama && pekerjaan && hobby != "" ? input : no_input;

  document.getElementById("hasil").innerHTML = hasil;
}
