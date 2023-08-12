const topFavouriteMoviesAmongFriends = require("./index");

test("Top Favourite Movies Among Friends User ID 62289", () => {
    const check = ["The Dark Knight", "The Godfather", "Pulp Fiction"];
    expect(topFavouriteMoviesAmongFriends(62289)).toEqual(check);
});

test("Top Favourite Movies Among Friends User ID 7001", () => {
    const check = ["Pulp Fiction", "The Godfather", "The Dark Knight"];
    expect(topFavouriteMoviesAmongFriends(7001)).toEqual(check);
});
