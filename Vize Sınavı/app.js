// Veriseti
var users = [
    {
        name: "Atakan Adalı",
        photo: "img3.png",
        desc: "Full Stack Developer",
        skills: ["HTML", "CSS", "Javascript"]
    },
    {
        name: "Furkan Çakmaker",
        photo: "img1.jpg",
        desc: "Back-End Developer",
        skills: ["Javascript", "Python"]
    },
    {
        name: "Elif Uğurel",
        photo: "img2.jpg",
        desc: "Front-End Developer",
        skills: ["HTML", "CSS", "Bootstrap"]
    }
]

document.getElementById("textbox").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        arama();
    }
});

function gerigit() {
    document.getElementById("ilkKisim").style.display = "block";
    document.getElementById("ikinciKisim").style.display = "none";
    document.getElementById("textbox").value = "Yeni isim giriniz:";
    document.getElementById("textbox").select();
}

function arama() {
    var isimArama = document.getElementById("textbox").value.toUpperCase();
    var kontrol = false;
    if (isimArama.trim() === "") {
        alert("Lütfen boş bırakmayınız ve bir isim giriniz!");
        document.getElementById("textbox").value = "Lütfen boş bırakmayınız ve bir isim giriniz:";
        document.getElementById("textbox").select();
        return;
    }
    for (var i = 0; i < users.length; i++) {
        if (users[i].name.toUpperCase() === isimArama) {
            kontrol = true;
            document.getElementById("KullaniciIsmi").textContent = users[i].name;
            document.getElementById("desc").textContent = users[i].desc;
            document.getElementById("resim").src = "img/" + users[i].photo;
            document.getElementById("resim").alt = "img/" + users[i].photo;
            var yetenekList = document.getElementById("yetenek");
            yetenekList.textContent = "";
            for (var j = 0; j < users[i].skills.length; j++) {
                var yetenek = document.createElement("li");
                yetenek.textContent = users[i].skills[j];
                yetenekList.appendChild(yetenek);
            }
            document.getElementById("ilkKisim").style.display = "none";
            document.getElementById("ikinciKisim").style.display = "block";
        
            break;
        }
    }
    if (kontrol === false) {
        alert("Girdiğiniz isim doğru değildir");
    }
}