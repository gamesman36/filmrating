function viewFilmPage() {
    let choice = model.inputs.mainPage.films.choice;
    let filmList = [];

    for (let x of model.data.films) {
        filmList.push(x.title);
    }

    let foundIndex = filmList.findIndex(x => x == choice);

    let html = /*html*/`
        <div id="container">
            <div id="headline">
                Film details
            </div>
            <div id="details">
                ${model.data.films[foundIndex].title} (${model.data.films[foundIndex].year})<br />
                Director: ${model.data.films[foundIndex].director}<br />
                Rating: ${model.data.films[foundIndex].rating}<br />
                Summary: ${model.data.films[foundIndex].summary}<br /><br />

                <input type="text" id="setRating" placeholder="Rating"></input>
                <button onclick="rateFilm(setRating.value)">Rate film</button>
                <button onclick="goBackToMain()">Go back</button>
            </div>
        </div>
    `;
    app.innerHTML = html;
}