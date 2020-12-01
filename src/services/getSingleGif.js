import { API_KEY, API_URL } from 'services/settings'

const fromApiResponseRoGifs = apiResponse => {
  const {data} = apiResponse
  const { images, title, id } = data;
  const { url } = images.downsized_medium;
  return { title, id, url };
}

export default function getSingleGif ({ id }) {
  return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(fromApiResponseRoGifs)
}