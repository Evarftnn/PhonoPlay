function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6JlEP10zdFG":
        Script1();
        break;
      case "6QfF2CfjL9o":
        Script2();
        break;
      case "5WvygaW1lyd":
        Script3();
        break;
      case "5ea1VPDGA2D":
        Script4();
        break;
      case "6qyTuaNvFn6":
        Script5();
        break;
      case "6PajCOJdl2b":
        Script6();
        break;
      case "6LnJ09452EX":
        Script7();
        break;
      case "6RMHkX93ZHk":
        Script8();
        break;
      case "63BSrIYEMIA":
        Script9();
        break;
      case "671IFMlcKG0":
        Script10();
        break;
      case "6cRX0ETAmer":
        Script11();
        break;
      case "6WaQS5Vrwik":
        Script12();
        break;
      case "6UT51yYEagg":
        Script13();
        break;
      case "6bFwCcUnrfI":
        Script14();
        break;
      case "6Zbcd8A22QM":
        Script15();
        break;
      case "6Bf3cOxpdyq":
        Script16();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";
audio.load();
audio.play();
}

function Script2()
{
  // Cek apakah browser mendukung SpeechRecognition
if ('webkitSpeechRecognition' in window) {
  var recognition = new webkitSpeechRecognition();  // Membuat objek SpeechRecognition
  recognition.lang = 'en-US';  // Bahasa yang digunakan (bisa disesuaikan)
  recognition.continuous = false;  // Tidak akan terus menerus merekam
  recognition.interimResults = false;  // Hanya hasil akhir yang diambil

  recognition.onstart = function() {
    console.log("Perekaman dimulai...");
  };

  recognition.onresult = function(event) {
    // Mengambil hasil pengenalan suara dari event
    var userSpeech = event.results[0][0].transcript.toLowerCase();  // Mengambil hasil dan mengubahnya menjadi lowercase
    
    // Menyimpan hasil suara yang dikenali ke dalam variabel Storyline
    var player = GetPlayer();
    player.SetVar("userAnswer", userSpeech);  // Menyimpan hasil ke dalam variabel 'userAnswer'
    
    // Menampilkan hasil suara yang dikenali
    console.log("Suara yang dikenali: " + userSpeech);
  };

  recognition.onerror = function(event) {
    console.error("Kesalahan dalam perekaman: " + event.error);
  };

  recognition.onend = function() {
    console.log("Perekaman selesai.");
  };

  // Mulai perekaman saat tombol ditekan
  recognition.start();
} else {
  console.log("Speech Recognition tidak didukung di browser ini.");
}

}

function Script3()
{
  var userAnswer = GetPlayer().GetVar("userAnswer"); // Mendapatkan jawaban pengguna
var correctAnswer = "JamDinding"; // Jawaban yang benar
var isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase(); // Bandingkan jawaban pengguna dengan jawaban yang benar

if (isCorrect) {
    // Jika benar, set variabel isCorrect menjadi True
    GetPlayer().SetVar("isCorrect", true);
} else {
    // Jika salah, set variabel isCorrect menjadi False
    GetPlayer().SetVar("isCorrect", false);
}

}

function Script4()
{
  // Cek apakah browser mendukung SpeechRecognition
if ('webkitSpeechRecognition' in window) {
  var recognition = new webkitSpeechRecognition();  // Membuat objek SpeechRecognition
  recognition.lang = 'en-US';  // Bahasa yang digunakan (bisa disesuaikan)
  recognition.continuous = false;  // Tidak akan terus menerus merekam
  recognition.interimResults = false;  // Hanya hasil akhir yang diambil

  recognition.onstart = function() {
    console.log("Perekaman dimulai...");
  };

  recognition.onresult = function(event) {
    // Mengambil hasil pengenalan suara dari event
    var userSpeech = event.results[0][0].transcript.toLowerCase();  // Mengambil hasil dan mengubahnya menjadi lowercase
    
    // Menyimpan hasil suara yang dikenali ke dalam variabel Storyline
    var player = GetPlayer();
    player.SetVar("userAnswer", userSpeech);  // Menyimpan hasil ke dalam variabel 'userAnswer'
    
    // Menampilkan hasil suara yang dikenali
    console.log("Suara yang dikenali: " + userSpeech);
  };

  recognition.onerror = function(event) {
    console.error("Kesalahan dalam perekaman: " + event.error);
  };

  recognition.onend = function() {
    console.log("Perekaman selesai.");
  };

  // Mulai perekaman saat tombol ditekan
  recognition.start();
} else {
  console.log("Speech Recognition tidak didukung di browser ini.");
}

}

function Script5()
{
  var userAnswer = GetPlayer().GetVar("userAnswer"); // Mendapatkan jawaban pengguna
var correctAnswer = "JamDinding"; // Jawaban yang benar
var isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase(); // Bandingkan jawaban pengguna dengan jawaban yang benar

if (isCorrect) {
    // Jika benar, set variabel isCorrect menjadi True
    GetPlayer().SetVar("isCorrect", true);
} else {
    // Jika salah, set variabel isCorrect menjadi False
    GetPlayer().SetVar("isCorrect", false);
}

}

function Script6()
{
  let isDetecting = true; // Variabel kontrol untuk menghentikan deteksi

(async function () {
    // Membuat elemen kamera
    const video = document.createElement('video');
    video.id = 'camera';
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = '300px'; // Lebar video
    video.style.height = '344px'; // Tinggi video
    video.style.position = 'absolute';
    video.style.top = '40%'; // 40% dari atas layar
    video.style.left = '50%'; // 50% dari kiri layar
    video.style.transform = 'translate(-50%, -50%)';
    video.style.zIndex = '1000';
    document.body.appendChild(video);

    // Membuat elemen canvas
    const canvas = document.createElement('canvas');
    canvas.id = 'overlay';
    canvas.width = 300; // Lebar canvas
    canvas.height = 344; // Tinggi canvas
    canvas.style.position = 'absolute';
    canvas.style.top = '40%'; // 40% dari atas layar
    canvas.style.left = '50%'; // 50% dari kiri layar
    canvas.style.transform = 'translate(-50%, -50%)';
    canvas.style.zIndex = '1001';
    document.body.appendChild(canvas);

    // Membuat tombol berhenti
    const stopButton = document.createElement('button');
    stopButton.innerText = 'Berhenti';
    stopButton.style.position = 'absolute';
    stopButton.style.top = '65%'; // Tepat di bawah video dan canvas
    stopButton.style.left = '50%'; // 50% dari kiri layar
    stopButton.style.transform = 'translate(-50%, -50%)';
    stopButton.style.padding = '10px 20px';
    stopButton.style.backgroundColor = '#8B4513'; // Warna coklat
    stopButton.style.color = '#ffffff'; // Teks putih
    stopButton.style.border = 'none';
    stopButton.style.borderRadius = '5px';
    stopButton.style.cursor = 'pointer';
    stopButton.style.zIndex = '1002';
    document.body.appendChild(stopButton);

    // Tambahkan event listener untuk tombol berhenti
    stopButton.addEventListener('click', () => {
        isDetecting = false; // Menghentikan loop deteksi
        video.srcObject.getTracks().forEach(track => track.stop()); // Matikan kamera
        document.body.removeChild(video); // Hapus elemen video
        document.body.removeChild(canvas); // Hapus elemen canvas
        document.body.removeChild(stopButton); // Hapus tombol berhenti
        console.log('Deteksi dihentikan.');
    });

    // Mulai kamera
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;

    // Load model Coco-SSD
    const model = await cocoSsd.load();
    console.log('Model Coco-SSD loaded');

    // Fungsi untuk mendeteksi objek
    async function detectObjects() {
        const ctx = canvas.getContext('2d');

        while (isDetecting) {
            const predictions = await model.detect(video);

            // Bersihkan canvas sebelum menggambar ulang
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            predictions.forEach(prediction => {
                const [x, y, width, height] = prediction.bbox; // Batas kotak
                const label = prediction.class; // Nama objek
                const score = prediction.score.toFixed(2); // Tingkat keyakinan

                // Filter hanya untuk objek "bottle"
                if (label === 'bottle') {
                    // Gambar kotak untuk botol
                    ctx.strokeStyle = 'green';
                    ctx.lineWidth = 2;
                    ctx.strokeRect(x, y, width, height);

                    // Gambar label untuk botol
                    ctx.fillStyle = 'green';
                    ctx.font = '16px Arial';
                    ctx.fillText(`${label} (${score})`, x, y > 10 ? y - 5 : 10);

                    // Kirim label ke variabel Storyline
                    const player = GetPlayer();
                    player.SetVar('detectedObject', label); // Simpan nama objek
                }
            });

            await tf.nextFrame();
        }
    }

    detectObjects();
})();

}

function Script7()
{
  // Cek apakah browser mendukung SpeechRecognition
if ('webkitSpeechRecognition' in window) {
  var recognition = new webkitSpeechRecognition();  // Membuat objek SpeechRecognition
  recognition.lang = 'en-US';  // Bahasa yang digunakan (bisa disesuaikan)
  recognition.continuous = false;  // Tidak akan terus menerus merekam
  recognition.interimResults = false;  // Hanya hasil akhir yang diambil

  recognition.onstart = function() {
    console.log("Perekaman dimulai...");
  };

  recognition.onresult = function(event) {
    // Mengambil hasil pengenalan suara dari event
    var userSpeech = event.results[0][0].transcript.toLowerCase();  // Mengambil hasil dan mengubahnya menjadi lowercase
    
    // Menyimpan hasil suara yang dikenali ke dalam variabel Storyline
    var player = GetPlayer();
    player.SetVar("userAnswer", userSpeech);  // Menyimpan hasil ke dalam variabel 'userAnswer'
    
    // Menampilkan hasil suara yang dikenali
    console.log("Suara yang dikenali: " + userSpeech);
  };

  recognition.onerror = function(event) {
    console.error("Kesalahan dalam perekaman: " + event.error);
  };

  recognition.onend = function() {
    console.log("Perekaman selesai.");
  };

  // Mulai perekaman saat tombol ditekan
  recognition.start();
} else {
  console.log("Speech Recognition tidak didukung di browser ini.");
}

}

function Script8()
{
  var userAnswer = GetPlayer().GetVar("userAnswer"); // Mendapatkan jawaban pengguna
var correctAnswer = "Buku itu untuk belajar"; // Jawaban yang benar
var isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase(); // Bandingkan jawaban pengguna dengan jawaban yang benar

if (isCorrect) {
    // Jika benar, set variabel isCorrect menjadi True
    GetPlayer().SetVar("isCorrect", true);
} else {
    // Jika salah, set variabel isCorrect menjadi False
    GetPlayer().SetVar("isCorrect", false);
}

}

function Script9()
{
  // Cek apakah browser mendukung SpeechRecognition
if ('webkitSpeechRecognition' in window) {
  var recognition = new webkitSpeechRecognition();  // Membuat objek SpeechRecognition
  recognition.lang = 'en-US';  // Bahasa yang digunakan (bisa disesuaikan)
  recognition.continuous = false;  // Tidak akan terus menerus merekam
  recognition.interimResults = false;  // Hanya hasil akhir yang diambil

  recognition.onstart = function() {
    console.log("Perekaman dimulai...");
  };

  recognition.onresult = function(event) {
    // Mengambil hasil pengenalan suara dari event
    var userSpeech = event.results[0][0].transcript.toLowerCase();  // Mengambil hasil dan mengubahnya menjadi lowercase
    
    // Menyimpan hasil suara yang dikenali ke dalam variabel Storyline
    var player = GetPlayer();
    player.SetVar("userAnswer", userSpeech);  // Menyimpan hasil ke dalam variabel 'userAnswer'
    
    // Menampilkan hasil suara yang dikenali
    console.log("Suara yang dikenali: " + userSpeech);
  };

  recognition.onerror = function(event) {
    console.error("Kesalahan dalam perekaman: " + event.error);
  };

  recognition.onend = function() {
    console.log("Perekaman selesai.");
  };

  // Mulai perekaman saat tombol ditekan
  recognition.start();
} else {
  console.log("Speech Recognition tidak didukung di browser ini.");
}

}

function Script10()
{
  var userAnswer = GetPlayer().GetVar("userAnswer"); // Mendapatkan jawaban pengguna
var correctAnswer = "Buku itu untuk belajar"; // Jawaban yang benar
var isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase(); // Bandingkan jawaban pengguna dengan jawaban yang benar

if (isCorrect) {
    // Jika benar, set variabel isCorrect menjadi True
    GetPlayer().SetVar("isCorrect", true);
} else {
    // Jika salah, set variabel isCorrect menjadi False
    GetPlayer().SetVar("isCorrect", false);
}

}

function Script11()
{
  // Cek apakah browser mendukung Web Speech API
if ('webkitSpeechRecognition' in window) {
    // Membuat instance SpeechRecognition
    var recognition = new webkitSpeechRecognition();

    // Set properti pengenalan suara
    recognition.lang = 'id-ID'; // Bahasa Indonesia, sesuaikan jika diperlukan
    recognition.interimResults = false; // Hanya ambil hasil final
    recognition.maxAlternatives = 1; // Ambil alternatif pertama hasil pengenalan suara

    // Mulai perekaman suara
    recognition.start();

    // Ketika perekaman selesai dan suara dikenali
    recognition.onresult = function(event) {
        // Ambil teks hasil pengenalan suara
        var transcript = event.results[0][0].transcript;

        // Kirim teks ke variabel 'userAnswer' di Articulate Storyline
        var player = GetPlayer(); // Mendapatkan instance player
        player.SetVar("userAnswer", transcript); // Simpan teks ke variabel userAnswer

        // Debugging: Tampilkan teks di konsol browser
        console.log("Hasil pengenalan suara:", transcript);
    };

    // Tangani error jika ada
    recognition.onerror = function(event) {
        console.error("Error pengenalan suara:", event.error);
    };
} else {
    alert("Browser ini tidak mendukung Web Speech API.");
}
}

function Script12()
{
  // Buat elemen <canvas> secara dinamis
const canvas = document.createElement('canvas');
canvas.id = 'voiceVisualizer';
canvas.width = 70; // Sesuaikan ukuran lebar canvas
canvas.height = 35; // Sesuaikan ukuran tinggi canvas
canvas.style.border = '2px solid #000'; // Tambahkan border untuk menyesuaikan estetika
canvas.style.position = 'absolute'; // Atur posisi absolut untuk penempatan bebas
canvas.style.top = '70%'; // Sesuaikan posisi vertikal
canvas.style.left = '40%'; // Sesuaikan posisi horizontal
canvas.style.transform = 'translate(-50%, -50%)'; // Pusatkan canvas di slide
canvas.style.zIndex = '1000'; // Pastikan canvas muncul di atas elemen lainnya
document.body.appendChild(canvas); // Menambahkan canvas ke dalam DOM

// Konfigurasi AudioContext dan AnalyserNode
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
analyser.fftSize = 256;

const dataArray = new Uint8Array(analyser.frequencyBinCount);

// Tangkap suara dari mikrofon
navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
    const source = audioContext.createMediaStreamSource(stream);
    source.connect(analyser);

    // Gambar visualisasi ke dalam canvas
    const canvasCtx = canvas.getContext('2d');
    function draw() {
        requestAnimationFrame(draw);

        // Ambil data amplitudo suara
        analyser.getByteTimeDomainData(dataArray);

        // Bersihkan canvas sebelum menggambar ulang
        canvasCtx.fillStyle = 'blue';
        canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

        // Gambar garis amplitudo suara
        canvasCtx.lineWidth = 2;
        canvasCtx.strokeStyle = 'white';

        canvasCtx.beginPath();
        const sliceWidth = canvas.width / dataArray.length;
        let x = 0;

        for (let i = 0; i < dataArray.length; i++) {
            const v = dataArray[i] / 128.0;
            const y = (v * canvas.height) / 2;

            if (i === 0) {
                canvasCtx.moveTo(x, y);
            } else {
                canvasCtx.lineTo(x, y);
            }

            x += sliceWidth;
        }

        canvasCtx.lineTo(canvas.width, canvas.height / 2);
        canvasCtx.stroke();
    }

    draw();
}).catch((err) => {
    console.error("Error mengakses mikrofon: ", err);
});
}

function Script13()
{
  // Ambil nilai variabel dari Storyline
var player = GetPlayer(); // Mendapatkan player instance dari Storyline
var correctAnswer = player.GetVar("correctAnswer"); // Mengambil nilai jawaban yang benar dari Storyline
var userAnswer = player.GetVar("userAnswer"); // Mengambil hasil transkrip jawaban pengguna

// Pastikan teks tidak sensitif terhadap huruf besar/kecil
correctAnswer = correctAnswer.trim().toLowerCase();
userAnswer = userAnswer.trim().toLowerCase();

// Perbandingan jawaban
if (userAnswer === correctAnswer) {
    // Jika jawaban benar
    player.SetVar("isCorrect", true); // Set variabel 'isCorrect' ke True di Storyline
    console.log("Jawaban pengguna BENAR:", userAnswer);
} else {
    // Jika jawaban salah
    player.SetVar("isCorrect", false); // Set variabel 'isCorrect' ke False di Storyline
    console.log("Jawaban pengguna SALAH:", userAnswer);
}
}

function Script14()
{
  // Cek apakah browser mendukung SpeechRecognition
if ('webkitSpeechRecognition' in window) {
  var recognition = new webkitSpeechRecognition();  // Membuat objek SpeechRecognition
  recognition.lang = 'en-US';  // Bahasa yang digunakan (bisa disesuaikan)
  recognition.continuous = false;  // Tidak akan terus menerus merekam
  recognition.interimResults = false;  // Hanya hasil akhir yang diambil

  recognition.onstart = function() {
    console.log("Perekaman dimulai...");
  };

  recognition.onresult = function(event) {
    // Mengambil hasil pengenalan suara dari event
    var userSpeech = event.results[0][0].transcript.toLowerCase();  // Mengambil hasil dan mengubahnya menjadi lowercase
    
    // Menyimpan hasil suara yang dikenali ke dalam variabel Storyline
    var player = GetPlayer();
    player.SetVar("userAnswer", userSpeech);  // Menyimpan hasil ke dalam variabel 'userAnswer'
    
    // Menampilkan hasil suara yang dikenali
    console.log("Suara yang dikenali: " + userSpeech);
  };

  recognition.onerror = function(event) {
    console.error("Kesalahan dalam perekaman: " + event.error);
  };

  recognition.onend = function() {
    console.log("Perekaman selesai.");
  };

  // Mulai perekaman saat tombol ditekan
  recognition.start();
} else {
  console.log("Speech Recognition tidak didukung di browser ini.");
}

}

function Script15()
{
  var userAnswer = GetPlayer().GetVar("userAnswer"); // Mendapatkan jawaban pengguna
var correctAnswer = "Di"; // Jawaban yang benar
var isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase(); // Bandingkan jawaban pengguna dengan jawaban yang benar

if (isCorrect) {
    // Jika benar, set variabel isCorrect menjadi True
    GetPlayer().SetVar("isCorrect", true);
} else {
    // Jika salah, set variabel isCorrect menjadi False
    GetPlayer().SetVar("isCorrect", false);
}

}

function Script16()
{
  let isDetecting = true; // Variabel kontrol untuk menghentikan deteksi

(async function () {
    // Membuat elemen kamera
    const video = document.createElement('video');
    video.id = 'camera';
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = '300px'; // Lebar video
    video.style.height = '344px'; // Tinggi video
    video.style.position = 'absolute';
    video.style.top = '40%'; // 40% dari atas layar
    video.style.left = '50%'; // 50% dari kiri layar
    video.style.transform = 'translate(-50%, -50%)';
    video.style.zIndex = '1000';
    document.body.appendChild(video);

    // Membuat elemen canvas
    const canvas = document.createElement('canvas');
    canvas.id = 'overlay';
    canvas.width = 300; // Lebar canvas
    canvas.height = 344; // Tinggi canvas
    canvas.style.position = 'absolute';
    canvas.style.top = '40%'; // 40% dari atas layar
    canvas.style.left = '50%'; // 50% dari kiri layar
    canvas.style.transform = 'translate(-50%, -50%)';
    canvas.style.zIndex = '1001';
    document.body.appendChild(canvas);

    // Membuat tombol berhenti
    const stopButton = document.createElement('button');
    stopButton.innerText = 'Berhenti';
    stopButton.style.position = 'absolute';
    stopButton.style.top = '65%'; // Tepat di bawah video dan canvas
    stopButton.style.left = '50%'; // 50% dari kiri layar
    stopButton.style.transform = 'translate(-50%, -50%)';
    stopButton.style.padding = '10px 20px';
    stopButton.style.backgroundColor = '#8B4513'; // Warna coklat
    stopButton.style.color = '#ffffff'; // Teks putih
    stopButton.style.border = 'none';
    stopButton.style.borderRadius = '5px';
    stopButton.style.cursor = 'pointer';
    stopButton.style.zIndex = '1002';
    document.body.appendChild(stopButton);

    // Tambahkan event listener untuk tombol berhenti
    stopButton.addEventListener('click', () => {
        isDetecting = false; // Menghentikan loop deteksi
        video.srcObject.getTracks().forEach(track => track.stop()); // Matikan kamera
        document.body.removeChild(video); // Hapus elemen video
        document.body.removeChild(canvas); // Hapus elemen canvas
        document.body.removeChild(stopButton); // Hapus tombol berhenti
        console.log('Deteksi dihentikan.');
    });

    // Mulai kamera
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;

    // Load model Coco-SSD
    const model = await cocoSsd.load();
    console.log('Model Coco-SSD loaded');

    // Fungsi untuk mendeteksi objek
    async function detectObjects() {
        const ctx = canvas.getContext('2d');

        while (isDetecting) {
            const predictions = await model.detect(video);

            // Bersihkan canvas sebelum menggambar ulang
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            predictions.forEach(prediction => {
                const [x, y, width, height] = prediction.bbox; // Batas kotak
                const label = prediction.class; // Nama objek
                const score = prediction.score.toFixed(2); // Tingkat keyakinan

                // Filter hanya untuk objek "bottle"
                if (label === 'bottle') {
                    // Gambar kotak untuk botol
                    ctx.strokeStyle = 'green';
                    ctx.lineWidth = 2;
                    ctx.strokeRect(x, y, width, height);

                    // Gambar label untuk botol
                    ctx.fillStyle = 'green';
                    ctx.font = '16px Arial';
                    ctx.fillText(`${label} (${score})`, x, y > 10 ? y - 5 : 10);

                    // Kirim label ke variabel Storyline
                    const player = GetPlayer();
                    player.SetVar('detectedObject', label); // Simpan nama objek
                }
            });

            await tf.nextFrame();
        }
    }

    detectObjects();
})();

}

