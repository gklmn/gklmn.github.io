
function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild;
}


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



var properButton = null;

// Flag les lignes de groupes de prix pour style particulier
var cells = Array.prototype.slice.call(document.querySelectorAll('div.cell-content'));
cells.map(function (x) {
    var cellText = x.textContent.replace(/\s+/g, '');
    if (!!cellText) {
      //  x.textContent = test;
        x.classList.add(cellText);
        // cell parent
        x.parentNode.classList.add(cellText);
        // div parent containing cell and cols
        x.parentNode.parentNode.classList.add(cellText);

        var myPrices = ["Single", "Double", "Triple", "Orange", "Chambreseparee"];

        var myMandatoryServices = ["DinerdeGala24/12", "DinerdeGala31/12"]

        // Récup un bouton collapse
        if (cellText == "Litsdoubleoutwin,Double,triple,chambresepareeenfants") {
            x.classList.add('is-important');
            var parentCell = x.parentNode;
            properButton = parentCell.querySelector('.cell-collapse');
                //cell-collapse

        }

        // Ajout bouton collapse sur chaque prix
        if (myPrices.indexOf(cellText) !== -1) {
            var newButton = properButton.cloneNode(true);
            x.parentNode.appendChild(newButton);
          //  alert("you shoud now have proper new btn on " + cellText)  
        }


        // Prepare mention obligatoire
        var mandatoryString = `<div class="gkerrorinline">
	<div><i class="fa fa-exclamation-triangle icon" style="margin-right : 5px;"></i></div>
    <div><div>Obligatoire</div></div>
</div>`;

        // Ajout mention obligatoire
        if (myMandatoryServices.indexOf(cellText) !== -1) {
            var mandatoryFlag = createElementFromHTML(mandatoryString);
            x.parentNode.appendChild(btnmandatoryFlag);
            
        }




    }

   
    
});

alert("Fin du script de modification des données affichées");



