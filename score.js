//buat kasih action button1
var button1 = document.getElementById("counter1");

// menampilkan jumlah makan
var p1s = document.getElementById("score1");
var score1 = 0;

// menampilkan jumlah or
var button2 = document.getElementById("counter2");
var p2s = document.getElementById("score2");
var score2 = 0;

var reset = document.getElementById("reset");

//menentukan hasil akhir(gemuk/kurusan) dari score siapa yang lebih tinggi
var winner = document.getElementById("winner");

//menentukan tujuan user (berpengaruh terhadap output)
var tujuan;
if (document.getElementById("form")[0].value) {
  tujuan = "naik";
} else if (document.getElementById("form")[1].value) {
  tujuan = "turun";
}

//variabel buat fungsi aksi button makan (button1) line 19-35
var tambah = function tambahbtn1(num) {
  var limit = document.getElementById("limit").value;
  score1++;
  // p1s.textContent = score1;

  p1s.textContent++;
  if (
    p1s.textContent + score2 === limit ||
    (p1s.textContent > score2 && p1s.textContent == limit)
  ) {
    p1s.classList.add("green");
    button1.setAttribute("disabled", true);
    button2.setAttribute("disabled", true);

    printWinner();
  }
};

button1.addEventListener("click", tambah);

//cara lain buat aksi button olahraga(button2), masukin funsgi kedalam parameter addEventListener
button2.addEventListener("click", function() {
  var limit = document.getElementById("limit").value;
  score2++;
  p2s.textContent = score2;
  if (score2 + score1 === limit || (score2 > score1 && score2 == limit)) {
    p2s.classList.add("green");
    button1.setAttribute("disabled", true);
    button2.setAttribute("disabled", true);

    printWinner();
  }
});

reset.addEventListener("click", function() {
  button1.removeAttribute("disabled");
  button2.removeAttribute("disabled");

  p1s.classList.remove("green");
  p2s.classList.remove("green");
  score1 = 0;
  score2 = 0;

  p1s.textContent = score1;
  p2s.textContent = score2;

  document.getElementById("limit").value = 5;
  winner.textContent = "";
});

// function printWinner(name) {
//   if (score1 > score2) {
//     winner.textContent = "Kamu Malah Gemukan, nih!";
//   } else if (score1 < score2) {
//     winner.textContent = "Kamu Kurusan!!";
//   } else {
//     winner.textContent = "Kamu tidak berubah...";
//   }
// }

//score1 = makan score2 = or
function printWinner(name) {
  // winner.textContent = tujuan;
  if (!tujuan) {
    winner.textContent = "Masukkan dulu body goal kamu!";
  } else if (score1 > score2 && tujuan === "turun") {
    winner.textContent = "Kamu Malah Gemukan, nih! Gagal Diet deh!";
  } else if (score1 < score2 && tujuan === "turun") {
    winner.textContent = "Kamu Kurusan!! Yey diet berhasil!";
  } else if (score1 > score2 && tujuan === "naik") {
    winner.textContent = "Kamu Gemukan!! Tujuan tercapai!";
  } else if (score1 < score2 && tujuan === "naik") {
    winner.textContent = "Aduh! Kamu malah kurusan...";
  } else {
    winner.textContent = "Kamu tidak berubah...";
  }
}
