// GALERİYE SCROLL
const scrollBtn = document.getElementById("scrollGalleryBtn");
const gallery = document.getElementById("gallery");

if (scrollBtn && gallery) {
    scrollBtn.addEventListener("click", () => {
        gallery.scrollIntoView({ behavior: "smooth" });
    });
}

// MÜZİK
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
let playing = false;

if (musicBtn && bgMusic) {
    musicBtn.addEventListener("click", () => {
        if (!playing) {
            bgMusic.play().catch(()=>{});
            musicBtn.textContent = "🎵 Müzik Dursun";
            playing = true;
        } else {
            bgMusic.pause();
            musicBtn.textContent = "🎵 Müzik Başlasın";
            playing = false;
        }
    });
}

// GİZLİ MESAJ
const secretBtn = document.getElementById("secretBtn");
const secretMsg = document.getElementById("secretMessage");
const closeSecret = document.getElementById("closeSecret");

if (secretBtn && secretMsg) {
    secretBtn.addEventListener("click", () => {
        secretMsg.classList.remove("hidden");
    });

    closeSecret.addEventListener("click", () => {
        secretMsg.classList.add("hidden");
    });

    secretMsg.addEventListener("click", (e) => {
        if (e.target === secretMsg) {
            secretMsg.classList.add("hidden");
        }
    });
}

// MEKTUPLAR
const letterCards = document.querySelectorAll(".letter-card");
const letterModal = document.getElementById("letterModal");
const closeModal = document.getElementById("closeModal");
const letterTitle = document.getElementById("letterTitle");
const letterText = document.getElementById("letterText");

const letters = {
    1: {
        title: "Seni Neden Seviyorum?",
        text: `Seni çok seviyorum çünkü sen benim en iyi arkadaşım, sırdaşım, ablam, kardeşim ve hayatımdaki en değerli insansın. İyiki varsın sevdiğim.`
    },
    2: {
        title: "Seninle Gurur Duyduğum Şeyler",
        text: `Pes etmeyen yanın, kalbinin güzelliği, sadakatin ve en önemlisi her zaman yanımda olmanla gurur duyuyorum aşkım.`
    },
    3: {
        title: "Mini Bir Teşekkür",
        text: `Yanımda olduğun her gün için, beni anladığın her an için ve beni desteklediğin her saniye için sana sonsuz kez teşekkür ederim aşkım.`
    }
};

letterCards.forEach(card => {
    card.addEventListener("click", () => {
        const key = card.getAttribute("data-letter");
        letterTitle.textContent = letters[key].title;
        letterText.textContent = letters[key].text;
        letterModal.classList.remove("hidden");
    });
});

closeModal.addEventListener("click", () => {
    letterModal.classList.add("hidden");
});

letterModal.addEventListener("click", (e) => {
    if (e.target === letterModal) {
        letterModal.classList.add("hidden");
    }
});
