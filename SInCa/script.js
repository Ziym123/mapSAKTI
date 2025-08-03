// You can add your JavaScript code here
console.log("Welcome to");

document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('img[usemap="#image-map"]');
    const areas = document.querySelectorAll('map[name="image-map"] area');

    const areaInfo = {
        "Kawasan Perumahan": "Kawasan Perumahan: Residential Area",
        "Kawasan Memanah": "Kawasan Memanah: Archery Zone",
        "Gelanggang Bola Jaring": "Gelanggang Bola Jaring: Netball Court",
        "Gelanggang Bola Keranjang": "Gelanggang Bola Keranjang: Basketball Court",
        "Padang SAKTI": "Padang SAKTI: Main Field",
        "Kebun belakang Aspuri": "Kebun belakang Aspuri: Aspuri's Backyard Garden",
        "Kawasan Asrama SAKTI": "Kawasan Asrama SAKTI: SAKTI Dormitory Area",
        "Sekolah": "Sekolah: School Building",
        "Pagar Utama dan Pondok Pengawal": "Pagar Utama dan Pondok Pengawal: Main Gate & Guardhouse",
        "Tanki Air": "Tanki Air: Water Tank",
        "Surau al-Jawaher": "Surau al-Jawaher: Mosque"
    };

    const areaMoreInfo = {
        "Kawasan Perumahan": "Area ini merupakan kawasan perumahan untuk staf dan guru.",
        "Kawasan Memanah": "Tempat latihan memanah untuk pelajar dan aktiviti kokurikulum.",
        "Gelanggang Bola Jaring": "Gelanggang untuk bola jaring, digunakan semasa waktu sukan.",
        "Gelanggang Bola Keranjang": "Gelanggang bola keranjang untuk pelajar dan pertandingan.",
        "Padang SAKTI": "Padang utama untuk perhimpunan, sukan dan aktiviti luar.",
        "Kebun belakang Aspuri": "Kebun yang diusahakan oleh pelajar asrama puteri.",
        "Kawasan Asrama SAKTI": "Kawasan asrama untuk pelajar lelaki dan perempuan.",
        "Sekolah": "Bangunan sekolah utama untuk pembelajaran.",
        "Pagar Utama dan Pondok Pengawal": "Pintu masuk utama dan pondok pengawal keselamatan.",
        "Tanki Air": "Tanki air utama untuk kegunaan sekolah.",
        "Surau al-Jawaher": "Surau untuk pelajar dan staf beribadah."
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
            // Don't show info box for Sekolah/Asrama click (handled above)
            if (area.alt === "Sekolah" || area.alt === "Kawasan Asrama SAKTI") return;
            e.preventDefault();
            if (!enlarged) {
                infoBox.innerHTML = `<strong>${areaInfo[area.alt] || area.title || "Info"}</strong><br><span>${areaMoreInfo[area.alt] || ""}</span>`;
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