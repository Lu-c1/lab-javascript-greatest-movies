// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movieArray) {
    const getAllDirectorsArray = movieArray.map((movieArray) => {
        return movieArray.director;
    })
    return getAllDirectorsArray;
}
const getAllDirectorsArray = getAllDirector()

/*26.06,21
¿ why test is not considering that function returns an array?
¿why is considering that is updating de originalone if I´m working on movieArray?
¿why does not consider that has the same length is I am using map method?*/

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movie) {

    const movieDramaSpielberg = movie.filter((movie) => {
                if (movieDramaSpielberg.length === 0) {
                    return 0;
                } else {
                    return (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
                }

            }
            /*26.06,21
            ¿ why doing de if conditional to the empty array and using .length property, the test don´t recognize it?

           */

            // Iteration 3: All scores average - Get the average of all scores with 2 decimals
            function scoresAverage(movieArray) {
                const average = movieArray.reduce((total, movie) => {
                    return movie.score / total + movie.score;
                }, 0)
                return average;
            }

            // Iteration 4: Drama movies - Get the average of Drama Movies
            function dramaMoviesScore(movieArray) {

                const averageDramaMovies = movieArray.filter((movie) => {
                    return movie.genre.includes("Drama");
                }).map((movie) => {
                    return movie.genre;
                }).reduce((average, genre) => {
                    return average + genre / list.length;
                }, 0)
            }


            //undefined

            // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
            function orderByYear(movie) {

                const sortedMovies = [...movies]
                sortedMovies.sort((movieA, movieB) => {
                    if (movieA.year < movieB.year) {
                        return -1;

                    } else {
                        return 1;
                    }

                })
            }

            return sortedMovies;
            //Gives me undefined


            // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
            function orderAlphabetically(movieArray) {
                movieArray.map((movie) => {
                    return movie.title;
                }).sort((titleA, titleB) => {
                    if (titleA > titleB) {
                        return 1;
                    } else {
                        return -1;
                    }
                });
            }

            // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
            function turnHoursToMinutes() {}

            // BONUS - Iteration 8: Best yearly score average - Best yearly score average
            function bestYearAvg() {}



            // The following is required to make unit tests work.
            /* Environment setup. Do not modify the below code. */
            if (typeof module !== 'undefined') {
                module.exports = {
                    getAllDirectors,
                    howManyMovies,
                    scoresAverage,
                    dramaMoviesScore,
                    orderByYear,
                    orderAlphabetically,
                    turnHoursToMinutes,
                    bestYearAvg,
                }
            };