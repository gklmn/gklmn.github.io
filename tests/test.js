
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


// Flag les lignes de groupes de prix pour style particulier
var cells = Array.prototype.slice.call(document.querySelectorAll('div.cell-content'));
var properButton = null;
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

        // Récup un bouton collapse
        if (cellText == "Litsdoubleoutwin,Double,triple,chambresepareeenfants") {
            x.classList.add('is-important');
            var parentCell = x.parentNode;
            properButton = parentCell.querySelector('.cell-collapse');
                //cell-collapse

        }

        // Check if a value exists in the fruits array
        if (myPrices.indexOf(cellText) !== -1) {
            //alert("Value exists!" + cellText)
            //var btnString = '<div _ngcontent-xqx-c49="" class="cell-collapse ng-star-inserted"><btn _ngcontent-xqx-c49="" _nghost-xqx-c10=""><button _ngcontent-xqx-c10="" class="btn actionLink normal" type="button"><i _ngcontent-xqx-c49="" class="fa icon fa-angle-up"></i></button></btn></div>';
            /*
            var btnString = `
        <div _ngcontent-rsm-c49="" class ="cell-collapse ng-star-inserted">
            <btn _ngcontent-rsm-c49="" _nghost-rsm-c10="">
        <button _ngcontent-rsm-c10="" class ="btn actionLink normal" type="button">
            <i _ngcontent-rsm-c49="" class ="fa icon fa-angle-up"></i>
            <!---->

            <!---->

            <!---->



            <!---->
        </button>
    </btn>
        </div>
`;
            var btn = createElementFromHTML(btnString);
            */
            var btn = createElementFromHTML(properButton);
            x.parentNode.appendChild(btn);

            alert("you shoud now have proper new btn on " + cellText)
            
        } 
    }

   

});





