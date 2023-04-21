function filterByCategory(targetCategory) {
    let results = [];
    
    for(x of model.data.films) {
        
        if(x.category == targetCategory) {
            results.push(x);
        }
    }
    
    return results;
}