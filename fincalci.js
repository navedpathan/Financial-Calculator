
//   Menu Bar

const sBtn = document.getElementsByClassName("sc")[0];
const eBtn = document.getElementsByClassName("ec")[0];
const sipCal = document.getElementsByClassName("sip-calci")[0];
const emiCal = document.getElementsByClassName("emi-calci")[0];

sBtn.addEventListener("click", () => {
    eBtn.classList.remove("active");
    sBtn.classList.add("active");
    emiCal.style.display = "none";
    sipCal.style.display = "block";
})

eBtn.addEventListener("click", () => {
    sBtn.classList.remove("active");
    eBtn.classList.add("active");
    emiCal.style.display = "block";
    sipCal.style.display = "none";
})


//    Calculations


let result = document.getElementsByClassName("result");
for (let i = 0; i < result.length; i++) {

    let calculate = document.getElementsByClassName("calculate");
    for (element of calculate) {

        //   SIP Calculations

        element.addEventListener("click", () => {
            let p = document.querySelector("#amount-sip").value;
            let annrate = document.querySelector("#rate-sip").value;
            let mrate = annrate / 12 / 100;
            let yr = document.querySelector("#period-sip").value;
            let mn = yr * 12;

            // FV = P × ((1 + i)n - 1) / i) × (1 + i)
            let total = p * ((Math.pow(1 + mrate, mn) - 1) / mrate) * (1 + mrate);
            document.querySelector("#total-sip").innerHTML = "₹" + Math.round(total);

            let invested = p * mn;
            document.querySelector("#invested").innerHTML = "₹" + Math.round(invested);

            let returns = total - invested;
            document.querySelector("#returns").innerHTML = "₹" + Math.round(returns);

            result[i].style.display = "block";
        })

        // EMI Calculations      

        element.addEventListener("click", () => {
            let p = document.querySelector("#amount-emi").value;
            let annrate = document.querySelector("#rate-emi").value;
            let mrate = annrate / 12 / 100;
            let yr = document.querySelector("#period-emi").value;
            let mn = yr * 12;

            // EMI = P × r × (1 + r)n/((1 + r)n - 1) 
            let emi = p * mrate * (Math.pow(1 + mrate, mn)) / (Math.pow(1 + mrate, mn) - 1);
            document.querySelector("#emi").innerHTML = "₹" + Math.round(emi);

            let total = emi * mn;
            document.querySelector("#total-emi").innerHTML = "₹" + Math.round(total);

            let interest = total - p;
            document.querySelector("#interest").innerHTML = "₹" + Math.round(interest);

            result[i].style.display = "block";
        })

    }

    //  Reset button

    let reset = document.getElementsByClassName("reset");
    for (element of reset) {

        element.addEventListener("click", () => {
            document.querySelector("#amount-sip").value = '';
            document.querySelector("#period-sip").value = '';
            document.querySelector("#rate-sip").value = '';
            document.querySelector("#returns").innerHTML = '';
            document.querySelector("#invested").innerHTML = '';
            document.querySelector("#total-sip").innerHTML = '';
            document.querySelector("#amount-emi").value = '';
            document.querySelector("#period-emi").value = '';
            document.querySelector("#rate-emi").value = '';
            document.querySelector("#emi").innerHTML = '';
            document.querySelector("#interest").innerHTML = '';
            document.querySelector("#total-emi").innerHTML = '';

            result[i].style.display = "none";
        })

    }
}