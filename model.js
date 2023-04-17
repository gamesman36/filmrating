const model = {
    app: {
        currentPage: "startPage",
    },

    inputs: {
        categories: {
            choice: null,
        },
        films: {
            title: null,
            rating: null,
        },
    },

    data: {
        categories: [
            {name: "All"},
            {name: "Action"},
            {name: "Romance"},
            {name: "Thriller"},            
        ],
        films: [
            {
                title: "Vertigo",
                year: 1958,
                director: "Alfred Hitchcock",
                category: "Thriller",
                summary: `A former San Francisco police detective juggles wrestling with his personal 
                demons and becoming obsessed with the hauntingly beautiful woman he has been hired 
                to trail, who may be deeply disturbed.`,
                rating: null,
            },
            {
                title: "Breakfast at Tiffany's",
                year: 1961,
                director: "Blake Edwards",
                category: "Romance",
                summary: `A young New York socialite becomes interested in a young man who has moved into 
                her apartment building, but her past threatens to get in the way.`,
                rating: null,
            },
            {
                title: "Seven Samurai",
                year: 1958,
                director: "Akira Kurosawa",
                category: "Action",
                summary: `Farmers from a village exploited by bandits hire a veteran samurai for protection, 
                who gathers six other samurai to join him.`,
                rating: null,
            },
        ],
    },
};
