//ambil tanggal hari ini

const getDate = new Date();
const getYear = getDate.getFullYear();
const getMonth = getDate.getMonth() + 1;
const getDay = getDate.getDate();

function bulan() {
    if (getMonth < 10) {
        bulan = `0${getMonth}`;
    } else {
        bulan = getMonth
    }
    return bulan
}

function hari() {
    if (getDay < 10) {
        hari = `0${getDay}`;
    } else {
        hari = getDay
    }
    return hari;
}

const tanggal = `${getYear}-${bulan()}-${hari()}`;

const tampilKota = document.querySelector('.judul-kota');
tampilKota.textContent = localStorage.judulkota;

function getJadwalSholat() {
    fetch('https://api.banghasan.com/sholat/format/json/jadwal/kota/' + parseInt(localStorage.idkota) + '/tanggal/' + tanggal)
        .then(response => response.json())
        .then(data => {
            const jadwal = data.jadwal.data;
            document.querySelector('.imsak').textContent = jadwal.imsak;
            document.querySelector('.subuh').textContent = jadwal.subuh;
            document.querySelector('.terbit').textContent = jadwal.terbit;
            document.querySelector('.dzuhur').textContent = jadwal.dzuhur;
            document.querySelector('.ashar').textContent = jadwal.ashar;
            document.querySelector('.maghrib').textContent = jadwal.maghrib;
            document.querySelector('.isya').textContent = jadwal.isya;
            document.querySelector('.tanggal').textContent = jadwal.tanggal;
        });
}

//pilih Lokasi
const inputSearch = document.querySelector('.input-search');
const cardList = document.querySelector('.card-list');

inputSearch.addEventListener('keyup', function () {
    const valueSearch = inputSearch.value.length;

    if (valueSearch > 0) {
        cardList.classList.remove('hidden-list');

        fetch('https://api.banghasan.com/sholat/format/json/kota')
            .then(response => response.json())
            .then(response => {
                const kota = response.kota;
                let listKota = '';
                kota.forEach(k => {
                    listKota += `<a href="#" data-idkota= "${k.id}"id="nama-kota" class="list-group-item list-group-item-action">${k.nama}</a>
                `;
                });
                const namaKota = document.querySelector('.card-list');
                namaKota.innerHTML = listKota;

                //ketika kota diklik
                const isiKota = document.querySelectorAll('#nama-kota');
                isiKota.forEach(kota => {

                    const filterText = inputSearch.value.toLowerCase();
                    const itemText = kota.firstChild.textContent.toLowerCase();

                    if (itemText.indexOf(filterText) != -1) {
                        kota.setAttribute("style", "display: block");
                    } else {
                        kota.setAttribute("style", "display: none !important");
                    }

                    kota.addEventListener('click', function () {
                        const idkota = this.dataset.idkota;
                        const judulKota = this.textContent;
                        window.localStorage.setItem('idkota', idkota);
                        window.localStorage.setItem('judulkota', judulKota);
                        namaKota.classList.add('hidden-list');
                        inputSearch.value = '';
                        location.reload();
                        alert(`Kota ${judulKota} berhasil dipilih`)
                    });
                });
            });


    } else {
        cardList.classList.add('hidden-list');
        console.log('tidak ok');
    }
});


getJadwalSholat();