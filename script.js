const texts = [
    "Halooo Selamat datang",
    "Halooo Miyaa",
    "Makasih yaa udah buka website akuu",
    "Maakasih ya udah jadi orangg terbaik di hidup akuu",
    "makasih udah mau bertahan selama ini",
    "jangan pergi yaaa :(, akuu gatau kalo gaada kamu aku gimana",
    "okeei?",
    "Secape apapun kamu jangan pernah nyerah yaa",
    "kalo kamu ada masalah cerita ke aku, Chat aku okeii?",
    "Aku disini buat kamu",
    "Maaf ya kalo masih banyak sifat yang engga kamu suka di dalam diri akuu",
    "aslinyaa aku sesayang itu sama kamuu",
    "Kamu itu LUCU,GEMES, CANTIIIK",
    "huhuhu",
	"kapan yaa bisa call lagii :(",
	"hehehehehehe :D",
    "okeii udahh yaaa",
    "makasihh udah baca website inii miyaa",
    "Byeee"
];

let currentIndex = 0;

function changeText() {
    const bodyElement = document.body;
    const contentElement = document.getElementById('content');
    const textElement = document.getElementById('main-text');

    if (currentIndex < texts.length - 1) {
        currentIndex++;
        // Hapus kelas 'fade' sebelum menambahkan teks baru
        textElement.classList.remove('fade');
        textElement.textContent = texts[currentIndex];
        // Tambahkan kelas 'fade' kembali
        setTimeout(() => textElement.classList.add('fade'), 10);
        bodyElement.style.backgroundColor = getRandomColor();
    } else {
        currentIndex = 0;
        bodyElement.style.backgroundColor = getRandomColor();
        showCuteCatImage();
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function showCuteCatImage() {
    const catImage = document.createElement('img');
    catImage.src = 'KUCING LUCU.jpg';
    catImage.alt = 'Kucing Imut';
    catImage.style.width = '300px';
    catImage.style.height = 'auto';

    const contentElement = document.getElementById('content');
    contentElement.innerHTML = '';
    contentElement.appendChild(catImage);
}
