function viewFilmPage() {
    let choice = model.inputs.mainPage.films.choice;
    let numberRated = model.inputs.filmPage.films.rating;
    let html = `
    <div id="container">
        <div id="headline">
            Film details
        </div>
        <div id="details">
            ${choice}<br />
            Rating: ${numberRated}<br /><br />
            <input type="text" id="setRating" placeholder="Rating (1-10)"></input>
            <button onclick="rateFilm(setRating.value)">Rate film</button>
            <button onclick="goBackToMain()">Go back</button>
        </div>
    </div>
    `;
    app.innerHTML = html;
}