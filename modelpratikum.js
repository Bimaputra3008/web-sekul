
document.addEventListener("DOMContentLoaded", function () {

    // =================================
    // 1. NAVIGASI SINGLE PAGE
    // =================================

    const navLinks = document.querySelectorAll(".nav-link");
    const pages = document.querySelectorAll(".page");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const targetPage = this.dataset.page;

            // Menghilangkan halaman aktif
            pages.forEach(function (page) {
                page.classList.remove("active");
            });

            // Menghilangkan menu aktif
            navLinks.forEach(function (nav) {
                nav.classList.remove("active");
            });

            // Menampilkan halaman yang dipilih
            document.getElementById(targetPage).classList.add("active");

            // Mengaktifkan navbar
            this.classList.add("active");

        });

    });


    // =================================
    // 2. VALIDASI FORM PENDAFTARAN
    // =================================

    const formPendaftaran = document.getElementById("formPendaftaran");
    const inputNama = document.getElementById("nama");
    const inputPassword = document.getElementById("password");
    const errorPassword = document.getElementById("errorPassword");
    const selectJurusan = document.getElementById("jurusan");


    // CEK PASSWORD SAAT DIKETIK

    inputPassword.addEventListener("input", function () {

        const jumlahHuruf = inputPassword.value.length;

        if (jumlahHuruf > 0 && jumlahHuruf < 8) {

            errorPassword.textContent =
                "⚠️ Password kurang panjang (" +
                jumlahHuruf + "/8 karakter)";

            errorPassword.style.color = "#dc2626";
            inputPassword.style.borderColor = "#dc2626";

        } else if (jumlahHuruf >= 8) {

            errorPassword.textContent =
                "✅ Password sudah aman";

            errorPassword.style.color = "#16a34a";
            inputPassword.style.borderColor = "#16a34a";

        } else {

            errorPassword.textContent = "";
            inputPassword.style.borderColor = "#cbd5e1";

        }

    });


    // CEK DATA SAAT FORM DIKIRIM

    formPendaftaran.addEventListener("submit", function (event) {

        if (inputPassword.value.length < 8) {

            alert(
                "Gagal Mendaftar! Password wajib minimal 8 karakter."
            );

            event.preventDefault();
            inputPassword.focus();

            return;
        }

        const jurusanDipilih =
            selectJurusan.options[
                selectJurusan.selectedIndex
            ].text;

        const yakin = confirm(

            "Cek kembali data pendaftaranmu:\n\n" +

            "Nama    : " + inputNama.value + "\n" +

            "Jurusan : " + jurusanDipilih + "\n\n" +

            "Klik OK jika data sudah benar."

        );

        if (!yakin) {
            event.preventDefault();
        }

    });


    // =================================
    // 3. RESET FORM
    // =================================

    formPendaftaran.addEventListener("reset", function () {

        errorPassword.textContent = "";

        inputPassword.style.borderColor = "#cbd5e1";

    });


    // =================================
    // 4. EFEK INPUT FORM
    // =================================

    const semuaKotak = document.querySelectorAll(
        "#formPendaftaran input, " +
        "#formPendaftaran select, " +
        "#formPendaftaran textarea"
    );

    semuaKotak.forEach(function (kotak) {

        kotak.addEventListener("focus", function () {

            if (
                kotak.type !== "radio" &&
                kotak.type !== "checkbox"
            ) {

                kotak.style.transform = "scale(1.01)";

            }

        });

        kotak.addEventListener("blur", function () {

            kotak.style.transform = "scale(1)";

        });

    });

});
