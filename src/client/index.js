const _ = require("lodash");

// byr til div og thad er ad setja inner html inn i div-id
function component() {
 let element = document.createElement('div');
 //element.innerHTML = _.join(['Hello', 'there!'], ' ');
 element.innerHTML = "<strong> Hi there! Again</strong>";
return element;
}

//html sidan, vid bodyid skaltu baeta vid utkomunni ur thessu component falli
document.body.appendChild(component());
