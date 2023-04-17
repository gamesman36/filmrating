view();
function view() {
    let app = document.getElementById("app");
    let selection = document.getElementById("selection");

    let html = /* html */`
    <div id="container">
        <div id="headline">
            Filmrating
        </div>
        <div id="menu">
            <select id="selection">
                ${createOptionsHTML()};
            </select>
            <button onclick="showFilms()">Vis filmer</button>
        </div>
        <div id="films">

        </div>
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