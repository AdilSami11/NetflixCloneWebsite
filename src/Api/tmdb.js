const API_KEY = "423dede6cb36563e80395b665b2c2f24";

export const fetchPopularMovies = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    );

    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
