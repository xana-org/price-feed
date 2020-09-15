import Axios from 'axios'

export const priceFeedAPI = (pricePair) => Axios.get(`https://api.pro.coinbase.com/products/${pricePair}/ticker`)