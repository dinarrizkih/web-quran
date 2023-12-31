function getURL(e) {
    const pageURL = window.location.search.substring(1);
    const urlVariable = pageURL.split("&");

    for (let i = 0; i < urlVariable.length; i++) {
        const parameterName = urlVariable[i].split("=");
        if (parameterName[0] == e) {
            return parameterName[1];
        }
    }
}

const nomorsurat = getURL("nomorsurat");
const loader = document.querySelector('.loader');
const error = `<div class="loader text-danger">Oppps Ada Masalah Nihh!</div>`;

const judulSurat = document.querySelector(".judul-surat");
const cardIsiSurat = document.querySelector('.card-isi-surat');

const cardLoading = document.querySelector('.card');

async function getSurat() {

    try {
        cardLoading.classList.add('hidden-loader');
        await getUiDetail(nomorsurat)
        loader.classList.add('hidden-loader');
        cardLoading.classList.remove('hidden-loader');

    } catch (err) {
        loader.classList.add('hidden-loader');
        cardIsiSurat.innerHTML = error;
        console.log(err);
    }

    function getUiDetail(nomorsurat){
        return fetch(`https://equran.id/api/v2/surat/${nomorsurat}`)
        .then((response) => response.json())
        .then((data) => {
            //Title Surat
            const titleSurat = document.querySelector('#title-surat');
            titleSurat.textContent = `Surat ${data.data.namaLatin}`

            //judul surat
            const cardJudulSurat = `
            <strong>${data.data.namaLatin} - ${data.data.nama} </strong>
            <p>${data.data.jumlahAyat} (${data.data.arti})</p>
                <button class="btn btn-primary audio-button-play">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                        <path 
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                    </svg>
                        Dengarkan
                </button>
                <button class="btn btn-danger hidden-button audio-button-pause">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stop-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z"/>
                    </svg>
                        Stop
                </button>
                <audio id="audio-tag" src ="${data.data.audioFull}"></audio>
        `;
            judulSurat.innerHTML = cardJudulSurat;

            // End Judul Surat

            //isi Surat
            const surat = data.data.ayat;
            let isiSurat = '';
            surat.forEach(s => {
                isiSurat += `
                <div class="card mb-3">
                    <div class="card-body">
                        <p>${s.nomorAyat}</p>
                        <h3 class="text-end mb-2">${s.teksArab}</h3>
                        <p>${s.teksLatin}</p>
                        <p>${s.teksIndonesia}</p>
                    </div>
                </div>
              `;
            });

            cardIsiSurat.innerHTML = isiSurat;

            //play and pause audio

            const buttonPlay = document.querySelector('.audio-button-play');
            const buttonPause = document.querySelector('.audio-button-pause');
            const audioSurat = document.querySelector('#audio-tag');
            audioSurat.src = data.data.audioFull["05"];


            //play
            buttonPlay.addEventListener('click', function () {
                buttonPlay.classList.add('hidden-button');
                buttonPause.classList.remove('hidden-button');
                audioSurat.play();
            });

            //pause
            buttonPause.addEventListener('click', function () {
                buttonPause.classList.add('hidden-button');
                buttonPlay.classList.remove('hidden-button');
                audioSurat.pause();
            });

        });
    }
}
getSurat();