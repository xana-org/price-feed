import Axios from 'axios'
import { PublicClient } from "@okfe/okex-node";
import { AuthenticatedClient } from "@okfe/okex-node";

export const priceFeedAPI = (pricePair) => Axios.get(`https://api.pro.coinbase.com/products/${pricePair}/ticker`)
// const config = {
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//     },
//     mode: 'no-cors'
// }
// const authClient = new AuthenticatedClient("bc58055b-b526-4cb5-8f29-f8a7eed43744","13BD6C732F29762EBEA4B5CD8CC1662E", "12345678", "https://www.okex.com", 3000, config);
// const pClient = new PublicClient();

// export const priceFeedAPI = (pricePair) => pClient.ett().getConstituents(pricePair)
// // export const priceFeedAPI = (pricePair) => {
// //     authClient.spot().getAccounts().then(console.log);
// // }