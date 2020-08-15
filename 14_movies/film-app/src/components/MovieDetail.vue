<template>
  <div class="detailPage">
    <!-- detail sayfası denedik gidiyor mu bu sayfaya diye -->
    <!-- {{ detailMovie }} -->
    <div class="imgRow">
      <img :src="detailMovie.data.Poster" alt="" class="imgPoster" />
    </div>
    <div class="infoRow">
      <h2>{{ detailMovie.data.Title }}</h2>
      <br />
      <span>year : {{ detailMovie.data.Year }}</span
      ><br />
      <span>released : {{ detailMovie.data.Released }}</span
      ><br />
      <span>Director : {{ detailMovie.data.Director }}</span
      ><br />
      <span>Writer : {{ detailMovie.data.Writer }}</span
      ><br />
      <span>Actors : {{ detailMovie.data.Actors }}</span
      ><br />
      <p>Plot : {{ detailMovie.data.Plot }}</p>
      
      <span>Country : {{ detailMovie.data.Country }}</span
      ><br />
      <span>Awards : {{ detailMovie.data.Awards }}</span>

      <span>IMDB Rating : {{ detailMovie.data.imdbRating }}</span
      ><br />
      <span>IMDB Votes : {{ detailMovie.data.imdbVotes }}</span
      ><br />
      <span>DVD Release : {{ detailMovie.data.DVD }}</span
      ><br />
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetail",
  // http://www.omdbapi.com/?i=tt0075148&apikey=4f73315c
  data() {
    return {
      detailMovie: null,
    };
  },
  created() {
    this.$http
      .get(
        `http://www.omdbapi.com/?i=${this.$store.state.imdbID}&apikey=4f73315c`
      )
      .then((res) => {
        console.log(res);
        // this.$store.commit('setImdbID', res.data)
        //burada bunu kullanmaya gerek yok, doğrudan data daki bir array atama yapabiliriz
        this.detailMovie = res;
        //apiden gelen cevabı data daki detailMovie ye koyalım,
      });
  },
};
</script>

<style scoped>
.imgPoster {
  width: auto;
  height: auto;
}
.detailPage{
  display: flex;
  flex-direction: row;
}
.imgRow{
  display: flex;
  justify-content: center;
  width: 40%;
  padding: 20px;
}
.infoRow{
  width: 60%;
  padding: 20px;
}
</style>

{ Title: "Rocky", Year: "1976", Rated: "PG", Released: "03 Dec 1976", Runtime:
"120 min", Genre: "Drama, Sport", Director: "John G. Avildsen", Writer:
"Sylvester Stallone", Actors: "Sylvester Stallone, Talia Shire, Burt Young, Carl
Weathers", Plot: "A small-time boxer gets a supremely rare chance to fight a
heavy-weight champion in a bout in which he strives to go the distance for his
self-respect.", Language: "English", Country: "USA", Awards: "Won 3 Oscars.
Another 17 wins & 21 nominations.", Poster:
"https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_SX300.jpg",
Ratings: [ { Source: "Internet Movie Database", Value: "8.1/10" }, { Source:
"Rotten Tomatoes", Value: "94%" }, { Source: "Metacritic", Value: "70/100" } ],
Metascore: "70", imdbRating: "8.1", imdbVotes: "504,019", imdbID: "tt0075148",
Type: "movie", DVD: "07 Aug 2006", BoxOffice: "N/A", Production: "United
Artists", Website: "N/A", Response: "True" }
