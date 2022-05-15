export default function getGifs(keyword) {
    const gifURL =`https://api.giphy.com/v1/gifs/search?api_key=Cs21AYpiJ2NWCWlNcj6mG5Si10qwrr47&q=${keyword}&limit=20&offset=0&rating=g&lang=en`;

    return fetch(gifURL)
    .then((res) => res.json())
    .then((response) => {
        const { data } = response;
        const gifs = data.map((image) => image.images.original.url);
        return gifs;
    })
    .catch((error) => console.error("ERROR: ", error.message)); 

}