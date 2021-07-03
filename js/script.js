"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели ?', '');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}


for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('на сколько оцените его? ', '');
          if(a != null &&  b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
          }else{
              console.log('error');
              i--;
          }
}

if(personalMovieDB.count < 10){
    console.log('Вы смотрели мало фильмо!');
}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Вы классический зритель !');
}else if(personalMovieDB.count >= 30 ){
    console.log('Вы киноман ! Это круто !');
}else{
    console.log('ERROR ! ERROR ! ERROR ! ERROR !');
}
console.log(personalMovieDB);



