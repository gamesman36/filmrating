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

    for(let x of model.data.films) {
        if(x.title == filmToRate) {
            x.rating = ratingToSet;
        }
    }

    model.inputs.filmPage.films.rating = ratingToSet;
    view();
}

function goBackToMain() {
    model.app.currentPage = "mainPage";
    model.inputs.mainPage.clicked.showFilmsClicked = false;
    view();
}