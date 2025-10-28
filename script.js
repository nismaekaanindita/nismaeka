function kirimPesan() {
  const nama = document.getElementById("nama").value.trim();
  const kelas = document.getElementById("kelas").value.trim();
  const pesan = document.getElementById("pesan").value.trim();
  const status = document.getElementById("status");

  if (nama === "" || kelas === "" || pesan === "") {
    status.style.color = "red";
    status.innerText = "⚠️ Harap isi semua kolom sebelum mengirim.";
    return;
  }

  // Simulasi pengiriman pesan (belum ada database)
  status.style.color = "green";
  status.innerText = ✅ Terima kasih ${nama}! Pesan kamu sudah dikirim ke guru BK.;

  // Kosongkan form setelah terkirim
  document.getElementById("nama").value = "";
  document.getElementById("kelas").value = "";
  document.getElementById("pesan").value = "";
}
