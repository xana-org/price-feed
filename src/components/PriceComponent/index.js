import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import { request } from 'graphql-request'
import UniswapAsset from './UniswapAsset'
import { getETHPriceFromUniswap } from 'API'

const PriceWrapper = ({ Assets }) => {
  const [ethPrice, setEthPrice] = useState(null)
  useEffect(() => {
    (async function priceFetch () {
      const {pair: {token1Price}} = await request('https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2', getETHPriceFromUniswap)
      setEthPrice(token1Price);
    })()
  }, [])
  return (
    <div className="row">
      {
        Assets.map((asset, index) => 
        <div className="col-xs-6 col-sm-6 col-lg-3" key={`assetIndex-${index}`}>
          <UniswapAsset pricePair={asset} eth={ethPrice} />
        </div>)
      }
    </div>
  )
}

export { PriceWrapper }