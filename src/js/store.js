
import { createStore } from 'framework7'
import axios from 'axios'

const searchOn = ({
  youtube: async(q = "test") => {
    var test = await axios.get(`https://weather.pga.tngl.dev/items/Weather_Station`, {
    }).catch(e => {
      console.log(e)
    })
    console.log("🚀 ~ file: store.js ~ line 15 ~ youtube:async ~ test", test)
    return new Array(10).fill(null).map((_, i) => i + 1)
  }
})


const store = createStore({
  state: {
    videos: searchOn.youtube(),
  },
  getters: {
    products({ state }) {
      return state.products;
    }
  },
  actions: {
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
  },
})
export default store;
