function calculate() {

    let bedtime = document.getElementById("bedtime").value;
    let waketime = document.getElementById("waketime").value;

    if (!bedtime || !waketime) {
        document.getElementById("result").innerHTML =
            "Please enter both times.";
        return;
    }

    let bed = new Date("1970-01-01T" + bedtime);
    let wake = new Date("1970-01-01T" + waketime);

    if (wake <= bed) {
        wake.setDate(wake.getDate() + 1);
    }

    let hours = (wake - bed) / (1000 * 60 * 60);

    let message = "";

    if (hours < 7) {
        message = "Not enough sleep 😴";
    } 
    else if (hours <= 9) {
        message = "Healthy sleep ✅";
    } 
    else {
        message = "Too much sleep 💤";
    }

    document.getElementById("result").innerHTML =
        "You slept " + hours.toFixed(2) + " hours.<br>" +
        message;
}
