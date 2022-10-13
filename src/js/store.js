
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
  },
  actions: {
    getVideos: ({ state }) => {
      directus.readMany({ filter: { category: { _eq: "videos" }}})
        .then((videos) => {
          console.log("🚀 ~ file: store.js ~ line 25 ~ .then ~ videos", videos)
          state.videos = videos
        })
    },
  },
  getters: {
    videos: ({ state }) => {
      return state.videos
    },
    api: ({ state }) => {
      return state.api
    },
  },
})
export default store