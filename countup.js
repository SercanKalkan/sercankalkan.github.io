function updateTimer() {
    // Hedef tarih
    const past = new Date("2019-12-02T19:09:00");
    const now = new Date();

    // Fark hesaplama
    const diff = now - past;

    // Zaman bileşenlerini hesapla
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) % 12;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // HTML'e yazdır
    document.getElementById("timer").innerHTML =
        '<div><span>Since: 2019-12-02</span></div><br>' +
        '<div>' + years + '<span> Years</span></div>' +
        '<div>' + months + '<span> Months</span></div>' +
        '<div>' + days + '<span> Days</span></div>' +
        '<div>' + hours + '<span> Hours</span></div>' +
        '<div>' + minutes + '<span> Minutes</span></div>' +
        '<div>' + seconds + '<span> Seconds</span></div>';
}

// 1 saniyelik aralıklarla zamanlayıcıyı güncelle
setInterval(updateTimer, 1000);
