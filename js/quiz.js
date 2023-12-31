//inisiasi soal dalam quiz
const questions = [
    {
        question: "Siapakah Nabi terakhir dalam agama Islam?",
        optionA: "Nabi Adam",
        optionB: "Nabi Musa",
        optionC: "Nabi Isa",
        optionD: "Nabi Muhammad",
        correctOption: "optionD"
    },
    {
        question: "Berapa jumlah surat dalam Al-Quran?",
        optionA: "100 surat",
        optionB: "114 surat",
        optionC: "120 surat",
        optionD: "150 surat",
        correctOption: "optionB"
    },
    {
        question: "Apa nama bulan suci dalam kalender Islam?",
        optionA: "Bulan Rajab",
        optionB: "Bulan Syawal",
        optionC: "Bulan Ramadhan",
        optionD: "Bulan Muharram",
        correctOption: "optionC"
    },
    {
        question: "Apa nama kitab suci dalam agama Islam?",
        optionA: "Talmud",
        optionB: "Injil",
        optionC: "Vedas",
        optionD: "Al-Quran",
        correctOption: "optionD"
    },
    {
        question: "Apa nama kiblat (arah shalat) dalam Islam?",
        optionA: "Ka'bah",
        optionB: "Jerusalem",
        optionC: "Vatican City",
        optionD: "Bait Suci India",
        correctOption: "optionA"
    },
    {
        question: "Siapakah istri pertama Nabi Muhammad?",
        optionA: "Aisyah",
        optionB: "Khadijah",
        optionC: "Fatimah",
        optionD: "Safiyyah",
        correctOption: "optionB"
    },
    {
        question: "Apa nama bulan yang digunakan untuk menentukan awal bulan puasa Ramadhan?",
        optionA: "Bulan Sya'ban",
        optionB: "Bulan Dzulhijjah",
        optionC: "Bulan Muharram",
        optionD: "Bulan Rabi'ul Awal",
        correctOption: "optionA"
    },
    {
        question: "Berapa jumlah rukun Islam?",
        optionA: "3 rukun",
        optionB: "4 rukun",
        optionC: "5 rukun",
        optionD: "6 rukun",
        correctOption: "optionC"
    },
    {
        question: "Apa nama bulan yang menjadi bulan haji dalam agama Islam?",
        optionA: "Bulan Rajab",
        optionB: "Bulan Dzulhijjah",
        optionC: "Bulan Rabi'ul Awwal",
        optionD: "Bulan Ramadhan",
        correctOption: "optionB"
    },
    {
        question: "Siapakah pemimpin umat Islam setelah Nabi Muhammad wafat?",
        optionA: "Abu Bakar",
        optionB: "Ali",
        optionC: "Umar",
        optionD: "Usman",
        correctOption: "optionA"
    },
    {
        question: "Apa yang diucapkan oleh seorang Muslim ketika mendengar nama Nabi Muhammad disebut?",
        optionA: "Salam",
        optionB: "Subhanallah",
        optionC: "Salawat",
        optionD: "Takbir",
        correctOption: "optionC"
    },
    {
        question: "Berapa jumlah pilar utama (rukun) dalam ibadah haji?",
        optionA: "3 rukun",
        optionB: "4 rukun",
        optionC: "5 rukun",
        optionD: "6 rukun",
        correctOption: "optionB"
    },
    {
        question: "Apa nama kota suci yang menjadi tujuan ibadah haji?",
        optionA: "Madinah",
        optionB: "Makkah",
        optionC: "Jerusalem",
        optionD: "Karachi",
        correctOption: "optionB"
    },
    {
        question: "Apa nama surat yang dikenal sebagai 'Surat Pembebasan' dalam Al-Quran?",
        optionA: "Surat Al-Anfal",
        optionB: "Surat Al-Mumtahanah",
        optionC: "Surat Al-Fath",
        optionD: "Surat Al-Qalam",
        correctOption: "optionA"
    },
    {
        question: "Apa nama malam yang lebih baik dari seribu bulan dalam Islam?",
        optionA: "Malam Isra Mi'raj",
        optionB: "Malam Nuzul Al-Quran",
        optionC: "Malam Lailatul Qadar",
        optionD: "Malam Laylat al-Bara'ah",
        correctOption: "optionC"
    },
    {
        question: "Siapakah istri Nabi Ibrahim dalam Al-Quran?",
        optionA: "Aisyah",
        optionB: "Hajar",
        optionC: "Khadijah",
        optionD: "Safiyyah",
        correctOption: "optionB"
    },
    {
        question: "Apa nama hari raya besar yang dirayakan oleh umat Islam setelah berpuasa selama sebulan?",
        optionA: "Hari Raya Idul Fitri",
        optionB: "Hari Raya Idul Adha",
        optionC: "Hari Raya Maulid Nabi",
        optionD: "Hari Raya Waisak",
        correctOption: "optionA"
    },
    {
        question: "Apa nama anak Nabi Ibrahim yang juga merupakan nabi dalam Islam?",
        optionA: "Isaac",
        optionB: "Ismail",
        optionC: "Ishmael",
        optionD: "Isa",
        correctOption: "optionB"
    },
    {
        question: "Siapa nama istri Nabi Muhammad yang pertama kali mempercayainya sebagai nabi?",
        optionA: "Aisyah",
        optionB: "Khadijah",
        optionC: "Fatimah",
        optionD: "Safiyyah",
        correctOption: "optionB"
    },
    {
        question: "Pada ________ umat Islam wajib puasa satu bulan penuh.",
        optionA: "Akhir Bulan",
        optionB: "Bulan Ramadhan",
        optionC: "Bulan Haji",
        optionD: "Bulan Purnama",
        correctOption: "optionB"
    },
    {
        question: "Apa yang merupakan salah satu dari Lima Rukun Islam? Kecuali",
        optionA: "Menjalankan Puasa",
        optionB: "Menunaikan Haji",
        optionC: "Membayar Zakat",
        optionD: "Membaca Qur'an",
        correctOption: "optionD"
    },
    {
        question: "Apa nama kitab yang mengandung petunjuk dan ajaran dalam agama Islam, selain Al-Quran?",
        optionA: "Hadis",
        optionB: "Tafsir",
        optionC: "Fiqh",
        optionD: "Sunnah",
        correctOption: "optionA"
    },
    {
        question: "Apa nama surat yang terpanjang dalam Al-Quran?",
        optionA: "Surat Al-Fatihah",
        optionB: "Surat Al-Baqarah",
        optionC: "Surat Al-Ikhlas",
        optionD: "Surat Al-Kahf",
        correctOption: "optionB"
    }
];



let shuffledQuestions = [] //empty array to hold shuffled selected questions
let isGameInProgress = false;

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            isGameInProgress = true; 
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    resetTime(); // Setel ulang waktu saat pertanyaan baru dimuat
    waktuSelesai = false; // Reset variabel waktuSelesai
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

    isGameInProgress = false;
}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
    window.location.reload();

}

// =======================================
// Inisialisasi variabel

let timeRemaining = 10;
const timeDisplay = document.getElementById("time-taken");
let waktuSelesai = false; 

function countdown() {
    if (timeRemaining > 0) {
        timeRemaining--;
        updateTimeDisplay();
        setTimeout(countdown, 1000);
    } else if (isGameInProgress && timeRemaining === 0) {
        handleTimeUp();
    }
}

function handleTimeUp() {
    const currentQuestion = shuffledQuestions[indexNumber];
    const currentQuestionAnswer = currentQuestion.correctOption;
    const options = document.getElementsByName("option");
    let correctOption = null;

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id;
        }
    });

    // Set warna latar belakang opsi yang benar menjadi hijau
    document.getElementById(correctOption).style.backgroundColor = "green";

    // Tandai jawaban sebagai salah
    wrongAttempt++;
    indexNumber++;

    // Delay sebelum berpindah ke pertanyaan berikutnya
    setTimeout(() => {
        questionNumber++;
        if (indexNumber <= 9) {
            NextQuestion(indexNumber);
            countdown()
        } else {
            handleEndGame();
        }
        resetOptionBackground();
    }, 1000);
}


// Fungsi untuk memperbarui tampilan waktu
function updateTimeDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  timeDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Panggil countdown() saat permainan dimulai atau event tertentu
countdown();

function resetTime() {
    timeRemaining = 10;
    updateTimeDisplay();
}
