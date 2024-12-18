
function updateTimer() {
    const past = new Date("2019-12-02T19:09:00");
    const now = new Date();
    const diff = now - past;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `
        <div>${years}<span> Years</span></div>
        <div>${months}<span> Months</span></div>
        <div>${days}<span> Days</span></div>
        <div>${hours}<span> Hours</span></div>
        <div>${minutes}<span> Minutes</span></div>
        <div>${seconds}<span> Seconds</span></div>
    `;
}
setInterval(updateTimer, 1000);
