import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGJjZWJhYTljYzQ4MzY3YjJiODY1NDRlYjc0NGUyYiIsIm5iZiI6MTc0MDE2OTg4NC44MTc5OTk4LCJzdWIiOiI2N2I4ZTI5YzE5MTlkNjFiYThmNDhjNGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.puIo6dCV7Rs78rTiveXGXHmeBM8MbXtpZI01_Qoe36Q"

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${API_KEY}`,
    },
});

export async function fetchTrendingMovies(page) {
    const response = await axiosInstance.get("/trending/movie/day", {
        params: { page: page },
    });
    return response.data;
}

export async function fetchSearchMovies(userQuery, page) {
    const response = await axiosInstance.get("/search/movie", {
        params: { query: userQuery, page: page },
    });
    return response.data;
}

export async function fetchMoviesDetails(id, appendResponse = "") {
    const response = await axiosInstance.get(`/movie/${id}`, {
        params: {
            append_to_response: appendResponse,
        },
    });
    return response.data;
}