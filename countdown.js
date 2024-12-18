// Hedef tarih başlangıçta sabit bir tarih olarak tanımlanıyor
let targetDate = new Date("2025-12-02T19:09:00");

function countdown() {
    // Mevcut tarih
    const now = new Date();
    const diff = targetDate - now;

    // Eğer süre dolmuşsa
    if (diff <= 0) {
        // Yılı bir artır
        targetDate.setFullYear(targetDate.getFullYear() + 1);

        // Mesaj göster ve bir sonraki geri sayımı başlat
        document.getElementById("countdown").innerHTML =
            "<div><span>Anniversary Time! Countdown Restarted for Next Year!</span></div>";
        return;
    }

    // Zaman hesaplamaları
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) % 12;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // Çıkışı yazdır
    document.getElementById("countdown").innerHTML =
        '<div><span>HOW LONG IS LEFT TO OUR ANNIVERSARY?</span></div><br>' +
        '<div>' + years + '<span> Years</span></div>' +
        '<div>' + months + '<span> Months</span></div>' +
        '<div>' + days + '<span> Days</span></div>' +
        '<div>' + hours + '<span> Hours</span></div>' +
        '<div>' + minutes + '<span> Minutes</span></div>' +
        '<div>' + seconds + '<span> Seconds</span></div>';
}

// 1 saniye aralıklarla fonksiyonu çalıştır
setInterval(countdown, 1000);
