// // (removed immediate DOM access; using DOMContentLoaded below)
// document.addEventListener('DOMContentLoaded', () => {
//     const titleEl = document.getElementById('title');
//    //
//     // Log hero heading text if present
//    // const heroHeading = document.querySelector('.hero-content h1');
    //f (heroHeading) {
// console.log('Hero heading:', heroHeading.innerText);
    //}
//});
  //  const button = document.getElementById("btn");
 //
  //  button.addEventListener("Click", function(){
  //      info.textContent = "Button was Clicked!";
//    });
//});
// const batteryPercent= document.getElementById("batteryPercent");
// const estimatedRange = document.getElementById("estimatedRange");
// const calculatebtn = document.getElementById("calculatebtn");
// // function getEstimatedRange(batteryPercent){
// //     let range = batteryPercent*4;
// //     if(batteryPercent <0){
// //         return 0;
// //     }
// //     if (batteryPercent >100){
// //         return 400;
// //     }
// //     return batteryPercent*4;
// // }
// // calculatebtn.addEventListener("click", function() {
// //     const batteryValue = parseFloat(batteryPercent.value);
// //     const range= getEstimatedRange(batteryValue);
// //     estimatedRange.textContentext="Estimated Range: " + range + " km";
// // });
// // });
// Get heading text
// const headingText = document.getElementById("mainHeading").innerText;
// console.log(headingText);

// // Get heading HTML
// const headingHTML = document.getElementById("mainHeading").innerHTML;
// console.log(headingHTML);

// // Button click functionality
// const button = document.getElementById("btn");
// const info = document.getElementById("message");

// button.addEventListener("click", function () {
//     info.innerText = "Button was clicked!";
// });

// // Input live text display
// const nameInput = document.getElementById("nameInput");
// const output = document.getElementById("output");

// nameInput.addEventListener("input", function () {
//     output.innerText = "Hello, " + nameInput.value + "!";
// });
document.addEventListener('DOMContentLoaded', () => {
    const batteryInput = document.getElementById('batteryInput');
    const estimatedRange = document.getElementById('estimatedRange');
    // Accept common ID variants so the script works across pages
    const calculateBtn = document.getElementById('calculationBtn') || document.getElementById('calculatebtn') || document.getElementById('calculateBtn');

    function getEstimatedRange(percent) {
        const p = Number(percent);
        if (Number.isNaN(p) || p <= 0) return 0;
        if (p >= 100) return 400;
        return Math.round(p * 4);
    }

    if (!calculateBtn) {
        // No calculator on this page — nothing to do.
        return;
    }

    calculateBtn.addEventListener('click', () => {
        if (!batteryInput || !estimatedRange) {
            console.warn('Calculator elements not found');
            return;
        }

        const raw = (batteryInput.value ?? '').trim();
        const num = parseFloat(raw);
        if (raw === '' || Number.isNaN(num)) {
            estimatedRange.textContent = 'Please enter a valid number (0-100)';
            return;
        }

        const range = getEstimatedRange(num);
        estimatedRange.textContent = `Estimated Range: ${range} km`;
    });
});


