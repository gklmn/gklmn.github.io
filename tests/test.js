
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

var cells = Array.prototype.slice.call(document.querySelectorAll('div.cell-content'));

cells.map(function (x) {
    var test = x.textContent.replace(/\s+/g, '');;
    if (!empty(test)) {
        x.textContent = test;
        // x.style.display = "none";
        x.classList.add(test);
    }
   

});





