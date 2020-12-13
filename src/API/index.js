import Axios from 'axios'
// import { PublicClient } from "@okfe/okex-node";
// import { AuthenticatedClient } from "@okfe/okex-node";
import { gql } from 'graphql-request'

export const getDerivedETHFromUniswap = gql`
  query getToken($address: String!) {
    token(id: $address) {
      derivedETH
    }
  }
`;

export const getETHPriceFromUniswap = gql`
{
  pair(id: "0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852") {
    token0Price,
    token1Price
  }
}
` 

export const priceFeedFromCoinbase = (pricePair) => Axios.get(`https://api.pro.coinbase.com/products/${pricePair}/ticker`)
export const priceFeedFromOkex = () => Axios.get("https://cryptic-basin-87571.herokuapp.com/")