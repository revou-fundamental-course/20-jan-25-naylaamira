// Mengambil referensi elemen form dan input
let form = document.querySelector('form');
let beratInput = document.getElementById('input-berat-badan');
let usiaInput = document.getElementById('input-usia');
let tinggiInput = document.getElementById('input-tinggi-badan');
let hasilBMI = document.getElementById('hasil-bmi');
let hasilContainer = document.getElementById('info-bmi');
let resetButton = document.querySelector('button[type="reset"]');

// Mengambil elemen deskripsi hasil
let kategoriText = document.getElementById('kategori');
let rangeText = document.getElementById('range');
let deskripsiText = document.getElementById('deskripsi');
let rekomendasiText = document.getElementById('rekomendasi');
let saranText = document.getElementById('saran');

// Fungsi untuk menghitung BMI
function hitungBMI(berat, tinggi) {
    return berat / (tinggi * tinggi);
}

// Fungsi untuk mendapatkan kategori BMI
function getKategoriBMI(bmi) {
    if (bmi < 18.5) {
        return {
            kategori: "Berat Badan Kurang",
            range: "Hasil BMI di bawah 18.5",
            deskripsi: "Anda memiliki berat badan kurang dari normal.",
            rekomendasi: "Konsumsi makanan bergizi dan berolahraga secara teratur.",
            saran: "Disarankan untuk menaikkan berat badan hingga batas normal."
        };
    } else if (bmi >= 18.5 && bmi < 23) {
        return {
            kategori: "Berat Badan Normal",
            range: "Hasil BMI di antara 18.5 dan 23",
            deskripsi: "Anda memiliki berat badan ideal.",
            rekomendasi: "Pertahankan pola makan sehat dan olahraga teratur.",
            saran: "Anda dalam kondisi sehat, tetap jaga keseimbangan tubuh."
        };
    } else if (bmi >= 23 && bmi < 25) {
        return {
            kategori: "Berat Badan Lebih",
            range: "Hasil BMI di antara 23 dan 25",
            deskripsi: "Anda memiliki berat badan berlebih.",
            rekomendasi: "Kurangi asupan kalori dan tingkatkan aktivitas fisik.",
            saran: "Disarankan untuk menurunkan berat badan hingga batas normal."
        };
    } else {
        return {
            kategori: "Obesitas",
            range: "Hasil BMI di atas 25",
            deskripsi: "Anda termasuk dalam kategori obesitas.",
            rekomendasi: "Konsultasikan dengan ahli gizi untuk pola hidup sehat.",
            saran: "Sangat dianjurkan untuk menurunkan berat badan hingga batas normal."
        };
    }
}

// Event listener untuk form submission
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah reload halaman

    let berat = parseFloat(beratInput.value);
    let tinggi = parseFloat(tinggiInput.value) / 100; // Konversi cm ke meter

    // Validasi input
    if (!berat || !tinggi || berat <= 0 || tinggi <= 0) {
        alert('Mohon masukkan berat dan tinggi badan yang valid.');
        return;
    }

    // Hitung BMI
    let bmi = hitungBMI(berat, tinggi);
    let roundedBMI = Math.round(bmi * 10) / 10; // Pembulatan 1 desimal

    // Dapatkan kategori BMI
    let hasilKategoriBMI = getKategoriBMI(bmi);

    // Perbarui tampilan hasil
    hasilBMI.textContent = roundedBMI;
    kategoriText.textContent = hasilKategoriBMI.kategori;
    rangeText.textContent = hasilKategoriBMI.range;
    deskripsiText.textContent = hasilKategoriBMI.deskripsi;
    rekomendasiText.textContent = hasilKategoriBMI.rekomendasi;
    saranText.textContent = hasilKategoriBMI.saran;
});

// Fungsi untuk reset form
resetButton.addEventListener('click', function() {
    form.reset();
    hasilBMI.textContent = '0';
    kategoriText.textContent = '';
    rangeText.textContent = '';
    deskripsiText.textContent = '';
    rekomendasiText.textContent = '';
    saranText.textContent = '';
});
