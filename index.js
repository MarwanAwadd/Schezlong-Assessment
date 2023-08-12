const movies = [
    {
        title: "The Shawshank Redemption",
        duration: "PT142M",
        actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        ratings: [],
        favorites: [66380, 7001, 9250, 34139],
        watchlist: [15291, 51417, 62289, 6146, 71389, 93707],
    },
    {
        title: "The Godfather",
        duration: "PT175M",
        actors: ["Marlon Brando", "Al Pacino", "James Caan"],
        ratings: [],
        favorites: [15291, 51417, 7001, 9250, 71389, 93707],
        watchlist: [62289, 66380, 34139, 6146],
    },
    {
        title: "The Dark Knight",
        duration: "PT152M",
        actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        ratings: [],
        favorites: [15291, 7001, 9250, 34139, 93707],
        watchlist: [51417, 62289, 6146, 71389],
    },
    {
        title: "Pulp Fiction",
        duration: "PT154M",
        actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
        ratings: [],
        favorites: [15291, 51417, 62289, 66380, 71389, 93707],
        watchlist: [7001, 9250, 34139, 6146],
    },
];

const users = [
    {
        userId: 15291,
        email: "Constantin_Kuhlman15@yahoo.com",
        friends: [7001, 51417, 62289],
    },
    {
        userId: 7001,
        email: "Keven6@gmail.com",
        friends: [15291, 51417, 62289, 66380],
    },
    {
        userId: 51417,
        email: "Margaretta82@gmail.com",
        friends: [15291, 7001, 9250],
    },
    {
        userId: 62289,
        email: "Marquise.Borer@hotmail.com",
        friends: [15291, 7001],
    },
];

function topFavouriteMoviesAmongFriends(userID) {
    let friendIDs = users.find((user) => user.userId === userID)?.friends;

    if (friendIDs?.length > 0) {
        let moviesList = movies
            .filter((movie) =>
                movie.favorites.some((favorite) => friendIDs.includes(favorite))
            )
            .sort((a, b) => {
                let aCheck = a.favorites.reduce(
                    (acc, e) => (friendIDs.includes(e) ? 1 + acc : acc),
                    0
                );
                let bCheck = b.favorites.reduce(
                    (acc, e) => (friendIDs.includes(e) ? 1 + acc : acc),
                    0
                );

                if (aCheck > bCheck) {
                    return -1;
                } else if (aCheck < bCheck) {
                    return 1;
                } else {
                    if (a.title.toUpperCase() < b.title.toUpperCase()) {
                        return -1;
                    }
                    if (a.title.toUpperCase() > b.title.toUpperCase()) {
                        return 1;
                    }
                    return 0;
                }
            })
            .splice(0, 3)
            .map((m) => m.title);

        return moviesList;
    } else {
        return [];
    }
}

module.exports = topFavouriteMoviesAmongFriends;
