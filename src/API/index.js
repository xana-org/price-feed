import Axios from 'axios'
import { PublicClient } from "@okfe/okex-node";
import { AuthenticatedClient } from "@okfe/okex-node";
import { ChainId, Token, Fetcher, Route } from '@uniswap/sdk'
import { InfuraProvider } from '@ethersproject/providers'
// export const priceFeedAPI = (pricePair) => Axios.get(`https://api.pro.coinbase.com/products/${pricePair}/ticker`)
export const priceFeedFromUniswap = async (contract, decimal) => {
  const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18)
  const priceToken = new Token(ChainId.MAINNET, contract, decimal)
  // note that you may want/need to handle this async code differently,
  // for example if top-level await is not an option
  const provider = new InfuraProvider(1, "20fea2fea8824a33bd96491fc9aa64c1")
  const pair = await Fetcher.fetchPairData(DAI, priceToken, provider)

  const route = new Route([pair], priceToken)

  return route.midPrice.toSignificant(6) // 201.306
  // console.log(route.midPrice.invert().toSignificant(6)) // 0.00496756
}
// const config = {
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//     },
//     mode: 'no-cors'
// }
// const authClient = new AuthenticatedClient("bc58055b-b526-4cb5-8f29-f8a7eed43744","13BD6C732F29762EBEA4B5CD8CC1662E", "12345678", "https://www.okex.com", 3000, config);
// const pClient = new PublicClient();

export const priceFeedAPI = () => Axios.get(`https://www.okex.com/api/market/v3/oracle`)
// // export const priceFeedAPI = (pricePair) => {
// //     authClient.spot().getAccounts().then(console.log);
// // }