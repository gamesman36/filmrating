function filterByCategory(targetCategory) {
    let results = [];
    
    for(x of model.data.films) {
        
        if(x.category == targetCategory) {
            results.push(x);
        }
    }
    
    return results;
}

function chooseFilm(film) {
    model.inputs.mainPage.films.choice = film;
    model.app.currentPage = "filmPage";
    view();
}

function rateFilm(ratingToSet) {
    let filmToRate = model.inputs.mainPage.films.choice;
    model.inputs.filmPage.films.rating = ratingToSet;
    let filmList = [];

    for (let x of model.data.films) {
        filmList.push(x.title);
    }

    let foundIndex = filmList.findIndex(x => x == filmToRate);

    model.data.films[foundIndex].rating = ratingToSet;

    view();
}

function goBackToMain() {
    model.app.currentPage = "mainPage";
    model.inputs.mainPage.clicked.showFilmsClicked = false;
    model.inputs.filmPage.films.rating = "";
    view();
}