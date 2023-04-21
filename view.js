view();
function view() {
    let app = document.getElementById("app");

    let html = /* html */`
    <div id="container">
        <div id="headline">
            Rating films
        </div>
        <div id="menu">
            <select id="selection" onchange="model.inputs.mainPage.categories.choice=this.value">
                ${createOptionsHTML()}
            </select>
            <button onclick="activateDisplay()">Show films</button>
        </div>
        <div id="films">${showFilms()}</div>
    </div>
    `;

    app.innerHTML = html;
}

function createOptionsHTML() {
    let html = "";
    for (let x of model.data.categories) {
        html += `
            <option value="${x.name}">${x.name}</option>
        `;
    }
    return html;
}

function activateDisplay() {
    model.inputs.mainPage.clicked.showFilmsClicked = true;
    showFilms();
    view();
    model.inputs.mainPage.categories.choice = "All";
}

function showFilms() {
    let html = "";
    let choice;
    let films;

    if(model.inputs.mainPage.clicked.showFilmsClicked == false) return html;

    model.inputs.mainPage.categories.choice != null 
    ? choice = model.inputs.mainPage.categories.choice
    : choice = "All";

    switch(choice) {
        case "All":
            for(let x of model.data.films) {
                html += `<p onclick="console.log(this.innerText)">${x.title}</p>`;
            }
            break;
        case "Action":
            films = filterByCategory("Action");
            for (let x of films) {
                html += `<p>${x.title}</p>`;
            }
            break;
        case "Romance":
            films = filterByCategory("Romance");
            for (let x of films) {
                html += `<p>${x.title}</p>`;
            }
            break;
        case "Thriller":
            films = filterByCategory("Thriller");
            for (let x of films) {
                html += `<p>${x.title}</p>`;
            }
            break;
    }

    return html;
}