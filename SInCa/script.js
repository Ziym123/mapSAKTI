// You can add your JavaScript code here
console.log("Welcome to");

document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('img[usemap="#image-map"]');
    // Detect which map is present
    let mapSelector = '';
    if (document.querySelector('map[name="image-map"]')) {
        mapSelector = 'map[name="image-map"] area';
    } else if (document.querySelector('map[name="sekolah-map"]')) {
        mapSelector = 'map[name="sekolah-map"] area';
    } else if (document.querySelector('map[name="asrama-map"]')) {
        mapSelector = 'map[name="asrama-map"] area';
    }
    const areas = document.querySelectorAll(mapSelector);

    // Info for each area (add more as needed)
    const areaInfo = {
        "Kawasan Perumahan": "Kawasan Perumahan",
        "Kawasan Memanah": "Kawasan Memanah",
        "Gelanggang Bola Jaring": "Gelanggang Bola Jaring",
        "Gelanggang Bola Keranjang": "Gelanggang Bola Keranjang",
        "Padang SAKTI": "Padang SAKTI",
        "Kebun belakang Aspuri": "Kebun belakang Aspuri",
        "Kawasan Asrama SAKTI": "Kawasan Asrama SAKTI",
        "Sekolah": "Sekolah: School Building",
        "Pagar Utama dan Pondok Pengawal": "Pagar Utama dan Pondok Pengawal",
        "Tanki Air": "Tanki Air",
        "Surau al-Jawaher": "Surau al-Jawaher",
        // SEKOLAH MAP
        "Bengkel RBT": "Bengkel RBT",
        "Blok C": "Blok C",
        "Blok B": "Blok B",
        "Blok A": "Blok A",
        "Cafeteria SAKTI": "Cafeteria SAKTI",
        "Dewan Seri Penawar": "Dewan Seri Penawar",
        "Pondok Bas": "Pondok Bas",
        "Pagar Utama SAKTI dan Pondok kawalan Keselamatan": "Pagar Utama & Pondok Kawalan",
        "Taman Sains SAKTI": "Taman Sains SAKTI",
        "Kawasan Gazebo Dhuha dan Meja Batu": "Gazebo Dhuha & Meja Batu",
        "Kebun": "Kebun",
        // ASRAMA MAP
        "Takraw": "Takraw",
        "Futsal / Bola Jaring / Bola Baling": "Futsal / Bola Jaring / Bola Baling",
        "Bola Tampar": "Bola Tampar: Volleyball Court",
        "Bola Keranjang": "Bola Keranjang",
        "Asrama Puteri": "Asrama Puteri",
        "Dewan Seri Balau / Dewan Makan": "Dewan Seri Balau / Dewan Makan",
        "Asrama Putera": "Asrama Putera",
        "Dataran Hicom": "Dataran Hicom",
        "Pondok": "Pondok"
    };

    const areaMoreInfo = {
        "Kawasan Perumahan": "Kawasan ini merupakan tempat tinggal staf dan guru.",
        "Kawasan Memanah": "Tempat latihan memanah untuk pelajar dan aktiviti kokurikulum.",
        "Gelanggang Bola Jaring": "Digunakan untuk aktiviti bola jaring dan latihan sukan.",
        "Gelanggang Bola Keranjang": "Tempat pelajar bermain bola keranjang.",
        "Padang SAKTI": "Padang utama untuk perhimpunan dan acara sukan.",
        "Kebun belakang Aspuri": "Kebun yang diusahakan oleh pelajar asrama puteri.",
        "Kawasan Asrama SAKTI": "Kawasan asrama untuk pelajar lelaki dan perempuan.",
        "Sekolah": "Bangunan utama untuk pembelajaran.",
        "Pagar Utama dan Pondok Pengawal": "Pintu masuk utama dan pondok pengawal keselamatan.",
        "Tanki Air": "Tanki air utama untuk kegunaan sekolah.",
        "Surau al-Jawaher": "Surau untuk pelajar dan staf beribadah.",
        "Bengkel RBT": "Bengkel Rekabentuk dan Teknologi untuk kelas praktikal.",
        "Blok C": `
        <strong>Tingkat satu:</strong> Bilik Darjah | Makmal Komputer | Tandas
        <br>
        <strong>Tingkat dua:</strong> Bilik Darjah | Makmal Sains | Tandas
        <br>
        <strong>Tingkat tiga:</strong> Bilik Darjah | Stor | Tandas
    `,
        "Blok B": `
        <strong>Tingkat satu:</strong> Bilik Darjah | Bilik Guru | Tandas
        <br>
        <strong>Tingkat dua:</strong> Bilik Darjah | Makmal Sains | Tandas
        <br>
        <strong>Tingkat tiga:</strong> Bilik Darjah | Stor | Tandas
    `,
        "Blok A": `
            <strong>Tingkat satu:</strong> Makmal Kimia dua | Makmal Kimia satu | Bilik Seni | Bilik suis | Tandas
            <br>
            <strong>Tingkat dua:</strong> Makmal Biologi | Makmal Fizik | Bilik Komputer | Bilik Guru | Tandas
            <br>
            <strong>Tingkat tiga:</strong> Bilik Darjah | Bilik Mesyuarat | Stor | Tandas
        `,
        "Cafeteria SAKTI": "Kantin sekolah untuk pelajar dan staf.",
        "Dewan Seri Penawar": "Dewan utama untuk acara rasmi.",
        "Pondok Bas": "Tempat menunggu bas sekolah.",
        "Pagar Utama SAKTI dan Pondok kawalan Keselamatan": "Pintu masuk utama sekolah.",
        "Taman Sains SAKTI": "Taman sains untuk aktiviti STEM.",
        "Kawasan Gazebo Dhuha dan Meja Batu": "Kawasan rehat dan belajar luar kelas.",
        "Kebun": "Kebun sekolah untuk projek pertanian.",
        "Takraw": "Gelanggang sepak takraw.",
        "Futsal / Bola Jaring / Bola Baling": "Gelanggang pelbagai guna.",
        "Bola Tampar": "Gelanggang bola tampar.",
        "Bola Keranjang": "Gelanggang bola keranjang.",
        "Asrama Puteri": "Asrama untuk pelajar perempuan.",
        "Dewan Seri Balau / Dewan Makan": "Dewan makan dan dewan serbaguna.",
        "Asrama Putera": "Asrama untuk pelajar lelaki.",
        "Dataran Hicom": "Dataran untuk perhimpunan dan aktiviti luar.",
        "Pondok": "Pondok rehat pelajar."
    };

    // Create info box if missing
    let infoBox = document.querySelector('.info-box');
    if (!infoBox) {
        infoBox = document.createElement('div');
        infoBox.className = 'info-box';
        document.body.appendChild(infoBox);
    }

    // Helper to get center of poly/rect
    function getAreaCenter(area) {
        let coords = area.coords.split(',').map(Number);
        let centerX = 0, centerY = 0;
        if (area.shape === "poly" && coords.length >= 2) {
            let xs = [], ys = [];
            for (let i = 0; i < coords.length; i += 2) {
                xs.push(coords[i]);
                ys.push(coords[i+1]);
            }
            centerX = xs.reduce((a,b)=>a+b,0)/xs.length;
            centerY = ys.reduce((a,b)=>a+b,0)/ys.length;
        } else if (area.shape === "rect" && coords.length === 4) {
            centerX = (coords[0] + coords[2]) / 2;
            centerY = (coords[1] + coords[3]) / 2;
        }
        return {x: centerX, y: centerY};
    }

    let enlarged = false;

    areas.forEach(area => {
        // Zoom and then open page for Sekolah and Asrama
        if (area.alt === "Sekolah" || area.alt === "Kawasan Asrama SAKTI") {
            area.addEventListener('click', function(e) {
                e.preventDefault();
                if (!img) return;
                const center = getAreaCenter(area);
                const scale = 2.2;
                const originX = (center.x / img.naturalWidth) * 100;
                const originY = (center.y / img.naturalHeight) * 100;
                img.style.transition = 'transform 0.4s cubic-bezier(.4,2,.6,1)';
                img.style.transformOrigin = `${originX}% ${originY}%`;
                img.style.transform = `scale(${scale})`;
                setTimeout(() => {
                    img.style.transform = '';
                    if (area.alt === "Sekolah") {
                        window.location.href = "sekolah.html";
                    } else {
                        window.location.href = "asrama.html";
                    }
                }, 400);
            });
        }

        area.addEventListener('mousemove', (e) => {
            if (!enlarged) {
                infoBox.innerHTML = `<strong>${areaInfo[area.alt] || area.title || "Info"}</strong>`;
                infoBox.style.opacity = 1;
                infoBox.style.fontSize = "1rem";
                infoBox.style.padding = "8px 14px";
                let x = e.pageX + 15;
                let y = e.pageY + 15;
                const boxRect = infoBox.getBoundingClientRect();
                if (x + boxRect.width > window.innerWidth) x = window.innerWidth - boxRect.width - 10;
                if (y + boxRect.height > window.innerHeight) y = window.innerHeight - boxRect.height - 10;
                infoBox.style.left = x + 'px';
                infoBox.style.top = y + 'px';
            }
        });
        area.addEventListener('mouseleave', () => {
            if (!enlarged) infoBox.style.opacity = 0;
        });

        area.addEventListener('click', (e) => {
            e.preventDefault();
            if (!enlarged) {
                infoBox.innerHTML = `
                    <strong>${areaInfo[area.alt] || area.title || "Info"}</strong>
                    <br>
                    <span style="font-size:0.95rem;display:block;margin-top:8px;color:#eee;">
                        ${areaMoreInfo[area.alt] || ""}
                    </span>
                `;
                infoBox.style.opacity = 1;
                infoBox.style.fontSize = "1.3rem";
                infoBox.style.padding = "16px 22px";
                let x = e.pageX + 15;
                let y = e.pageY + 15;
                const boxRect = infoBox.getBoundingClientRect();
                if (x + boxRect.width > window.innerWidth) x = window.innerWidth - boxRect.width - 10;
                if (y + boxRect.height > window.innerHeight) y = window.innerHeight - boxRect.height - 10;
                infoBox.style.left = x + 'px';
                infoBox.style.top = y + 'px';
                enlarged = true;
            } else {
                infoBox.style.opacity = 0;
                infoBox.style.fontSize = "1rem";
                infoBox.style.padding = "8px 14px";
                enlarged = false;
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('area') && enlarged) {
            infoBox.style.opacity = 0;
            infoBox.style.fontSize = "1rem";
            infoBox.style.padding = "8px 14px";
            enlarged = false;
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.querySelector('.menu-container');
    const menuBtn = document.querySelector('.menu-btn');
    if (menuBtn && menuContainer) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            menuContainer.classList.toggle('open');
        });
        document.addEventListener('click', () => {
            menuContainer.classList.remove('open');
        });
    }
});