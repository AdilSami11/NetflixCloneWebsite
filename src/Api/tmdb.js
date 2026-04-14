const API_KEY = "423dede6cb36563e80395b665b2c2f24";

// Popular Movies
export const fetchPopularMovies = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching popular:", error);
    return [];
  }
};

// Trending Movies
export const fetchTrendingMovies = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching trending:", error);
    return [];
  }
};

// Top Rated Movies
export const fetchTopRatedMovies = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching top rated:", error);
    return [];
  }
};

// Action Movies
export const fetchActionMovies = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&sort_by=popularity.desc`,
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching action:", error);
    return [];
  }
};

// Comedy Movies
export const fetchComedyMovies = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35&sort_by=popularity.desc`,
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching comedy:", error);
    return [];
  }
};

// All movies At All:

export const AllMovies = async (page = 1) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=${page}`,
    );

    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching Movies:", error);
    return [];
  }
};
