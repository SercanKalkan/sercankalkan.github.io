function updateTimer() {
    // Hedef tarih ve şu anki tarih
    const past = new Date("2025-12-02T19:09:00");
    const now = new Date();

    // Yıllar, aylar, günler vb. için ayrı ayrı fark hesaplama
    let years = now.getFullYear() - past.getFullYear();
    let months = now.getMonth() - past.getMonth();
    let days = now.getDate() - past.getDate();
    let hours = now.getHours() - past.getHours();
    let minutes = now.getMinutes() - past.getMinutes();
    let seconds = now.getSeconds() - past.getSeconds();

    // Eğer negatif bir fark varsa bir sonraki birime borç al (ör: -1 ay)
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        // Geçerli ayın kaç gün çektiğini hesaplayarak gün düzeltmesi yap
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    // HTML'e yazdır
    document.getElementById("countdown").innerHTML =
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
