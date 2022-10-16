
import { createStore } from 'framework7'
import axios from 'axios'

const apiURL = `https://xqyt3v7h.directus.app`
const directus = ({
  readMany: async(params = {}) => await axios.get(`${apiURL}/items/media`, {
      params: {
        fields: "*.*.*",
        limit: -1,
        ...params,
      },
    }).then(({data: { data }}) => data)
      .catch(e => { console.log(e) })
})

const store = createStore({
  state: {
    api: apiURL,
    videos: [],
    audios: [],
    books: [],
    photos: [],
  },
  actions: {
    getVideos: ({ state }) => {
      directus.readMany({ filter: { category: { _eq: "videos" }}})
        .then((videos) => {
          state.videos = videos
        })
    },
    getAudio: ({ state }) => {
      directus.readMany({ filter: { category: { _eq: "audio" }}})
        .then((audios) => {
          state.audios = audios
        })
    },
    getBooks: ({ state }) => {
      directus.readMany({ filter: { category: { _eq: "books" }}})
        .then((books) => {
          state.books = books
        })
    },
    getPhotos: ({ state }) => {
      directus.readMany({ filter: { category: { _eq: "photos" }}})
        .then((photos) => {
          state.photos = photos
        })
    },
  },
  getters: {
    videos: ({ state }) => {
      return state.videos
    },
    audios: ({ state }) => {
      return state.audios
    },
    books: ({ state }) => {
      return state.books
    },
    photos: ({ state }) => {
      return state.photos
    },
    video: ({ state }, { id }) => {
      return state.videos.find((data) => data.id === id)
    },
    audio: ({ state }, { id }) => {
      return state.audios.find((data) => data.id === id)
    },
    book: ({ state }, { id }) => {
      return state.books.find((data) => data.id === id)
    },
    photo: ({ state }, { id }) => {
      return state.photos.find((data) => data.id === id)
    },
    api: ({ state }) => {
      return state.api
    },
  },
})
export default store