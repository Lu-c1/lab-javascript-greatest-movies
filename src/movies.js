/* Iteration 1:  Get the array of all directors.
   Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
 How could you "clean" a bit this array and make it unified (without duplicates)?*/

let getAllDirectors = movies.map((movie) => movie.director);
console.log(getAllDirectors);
let notDuplicatedDirectors = getAllDirectors.filter(
  (director, index) => getAllDirectors.indexOf(director) === index
);
console.log(notDuplicatedDirectors);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG" direct?
let howManyMovies = movies.filter(
  (movie) =>
    movie.genre.includes('Drama') && movie.director === 'Steven Spielberg'
);
console.log(howManyMovies.length);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// no puedo usar map porque no es un array de objetos y me dará undefined. Tengo que usar reduce, puesto que lo que busco es un número, un promedio.

let scoresAverage =
  movies.reduce((sum, movie) => sum + movie.score, 0) / movies.length;
console.log(scoresAverage);

// Iteration 4: Drama movies - Get the average of Drama Movies

let moviesDrama = movies.filter((movie) => movie.genre.includes('Drama'));
let dramaMoviesScore =
  moviesDrama.reduce((sum, movie) => sum + movie.score, 0) / moviesDrama.length;

console.log(dramaMoviesScore);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//no puedo invocar movies.sort () dentro de un callback de sort. Hay que usar localeCompare () para el orden secundario.

/* let orderByYear = movies.sort((a, b) => {
  if (a.year !== b.year) {
    return a.year - b.year; // Orden por año (ascendente)
  }
  return a.director.localeCompare(b.director); // Orden alfabético por director
});

console.log(orderByYear);

orderByYear.forEach((movie) => {
  console.log(`${movie.year} - ${movie.director}`);
});*/
//aquí puedo hacer el forEach sobre orderByYear porque me devuelve una array, en el código de abajo (con la réplica), no puedo porque me devuelve una función. Tengo que invocar la función para obtener la array y ahí ya puedo aplicar forEach.
//aquí estoy usando una función que puedo reutilizar más tarde.
let orderByYear = (movies) => {
  return [...movies].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.director.localeCompare(b.director);
    }
  });
};
const orderedMovies = orderByYear(movies);
console.log(orderedMovies);
orderedMovies.forEach((movie) =>
  console.log(movie.year + ' ' + movie.director)
);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
let orderAlphabetically = [...movies].sort((a, b) =>
  a.title.localeCompare(b.title)
);
let firstTwenty = orderAlphabetically.slice(0, 20);
console.log(firstTwenty);
firstTwenty.forEach((movie) => console.log(movie.title));
//aquí estoy usando una array ordenada que no puedo reutilizar más tarde. Puedo elegir el código anterior (función) o éste (array) según si quiero reutilizar el código más adelante.

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
let turnHoursToMinutes = (movies) => {
  return movies.map((movie) => {
    let duration = movie.duration.split(' ');
    let minutes = duration.reduce((acc, time) => {
      if (time.includes('h')) {
        return acc + parseInt(time) * 60;
      }
      return acc + parseInt(time);
    }, 0);
    return { ...movie, duration: minutes };
  });
};

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
/*let yearAvg = (movies) => {
  let years = [];
  movies.forEach((movie) => years.push(movie.year));
  let yearAvg = years.map((year) => {
    let moviesOfYear = movies.filter((movie) => movie.year === year);
    let avg =
      moviesOfYear.reduce((acc, movie) => acc + movie.score, 0) /
      moviesOfYear.length;
    return { year, avg };
  });
};
let bestYear = yearAvg.reduce ((best, year) => {best +year
let theBest = bestYearAvg(movies);
console.log(theBest);*/

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
    bestYearAvg
  };
}
