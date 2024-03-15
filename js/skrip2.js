function dataPerson() {
  // jika memakai const
  const forms = document.getElementById("frm");
  const person = {
    nama: forms.nama.value,
    pekerjaan: forms.pekerjaan.value,
    hobby: forms.hobby.value,
  };

  // tugas
  // lengkapi kode berikut dan tampilkan hasilnya ada pada html
  // 1. isisan nama
  // 2. isian pekerjaan
  // 3. isian hobby
  //   let pekerjaan = forms.pekerjaan.value;
  //   let hobby = forms.hobby.value;
  const input = `
    <table border="2">
    <tr><th>Selamat Datang ${person.nama}</th></tr> 
    <tr><td>Pekerjaan: ${person.pekerjaan}</td></tr> 
    <tr><td>Hobby: ${person.hobby}</td></tr>
    </table>
    `;
  const no_input = "<h2>Maaf anda belum memasukkan data yang dibutuhkan</h2>";
  const hasil = person.nama && person.pekerjaan && person.hobby != "" ? input : no_input;

  document.getElementById("hasil").innerHTML = hasil;
}
