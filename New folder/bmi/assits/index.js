function bmical() {
    const w = parseFloat(document.getElementById("w").value);
    const h = parseFloat(document.getElementById("h").value);
    if (isNaN(w) || isNaN(h) || h <= 0 || w <= 0) {
        document.getElementById("res").innerText = "فیلد را معتبر تایپ کنید";
        return;
    }
    const bmi = (w / (h ** 2)).toFixed(2);

    let massage;

    if (bmi < 18.5) {
        massage = "کم وزن";
    }   else if (bmi >= 18.5 && bmi < 24.9) {
        massage = "وزن مناسب";
    }   else if (bmi >= 25 && bmi < 29.9) {
        massage = "اضافه وزن";
    }   else {
        massage = "چاقی";
    }
    
    document.getElementById("res").innerHTML = `
        bmi : <strong>${bmi}</strong>
        result : <string>${massage}</strong>
        `;
}
