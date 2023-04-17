function getTitles() {
    let titles = [];

    for(film of model.data.films) {
        titles.push(film.title);
    }

    return titles;
}

function filterByCategory(targetCategory) {
    let results = [];
    
    for(film of model.data.films) {
        
        if(film.category == targetCategory) {
            results.push(film);
        }
    }
    
    return results;
}

function showFilms() {
    model.inputs.categories.choice = selection.value;
    
    if (model.inputs.categories.choice == "All") {
        console.log(getTitles());       
    }

    else {
        let filmsToShow = filterByCategory(model.inputs.categories.choice);
        
        for(let x of filmsToShow) {
            console.log(x.title);
        }
    }
}