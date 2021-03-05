
// Repère le warning "pas de tarif" et cache le parent
var noFareRows = Array.prototype.slice.call(document.querySelectorAll('notification.ng-star-inserted'));

noFareRows.map(function (x) {
    if (x.parentNode.tagName === 'PRICE-LAYOUT') {
        x.parentNode.style.color = 'red';
        x.parentNode.style.display = 'none';
        x.parentNode.classList.add("test-hidden");
    }
    //x.style.color = "red";
    // x.style.display = "none";
    //x.classList.add("test-hidden");

});


// Flag les lignes de groupes de prix pour style particulier
var cells = Array.prototype.slice.call(document.querySelectorAll('div.cell-content'));

cells.map(function (x) {
    var cellText = x.textContent.replace(/\s+/g, '');;
    if (!!cellText) {
      //  x.textContent = test;
        x.classList.add(cellText);
        // cell parent
        x.parentNode.classList.add(cellText);
        // div parent containing cell and cols
        x.parentNode.parentNode.classList.add(cellText);

        var myPrices = ["Single", "Double", "Triple", "Orange", "Chambreseparee"];

        // Check if a value exists in the fruits array
        if (myPrices.indexOf(cellText) !== -1) {
            alert("Value exists!" + cellText)
        } else {
            // alert("Value does not exists!")
        }
    }

   

});





