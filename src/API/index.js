import Axios from 'axios'
import { PublicClient } from "@okfe/okex-node";
import { AuthenticatedClient } from "@okfe/okex-node";
import { ChainId, Token, Fetcher, Route } from '@uniswap/sdk'
import { InfuraProvider } from '@ethersproject/providers'

import { gql } from 'graphql-request'

export const getDerivedETHFromUniswap = gql`
  query getToken($address: String!) {
    token(id: $address) {
      derivedETH
    }
  }
`;

export const priceFeedAPI = () => Axios.get(`https://www.okex.com/api/market/v3/oracle`)
// // export const priceFeedAPI = (pricePair) => {
// //     authClient.spot().getAccounts().then(console.log);
// // }