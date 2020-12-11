import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import UniswapAsset from './UniswapAsset'
import { priceFeedAPI } from 'API'

const PriceWrapper = ({ Assets }) => {
  const [ethPrice, setEthPrice] = useState(null)
  useEffect(() => {
    (async function priceFetch () {
      const res = await priceFeedAPI()
      setEthPrice(res.data.prices.ETH);
    })()
  }, [])
  return (
    <div className="row">
      {
        Assets.map(asset => 
        <div className="col-xs-6 col-sm-6 col-lg-3">
          <UniswapAsset pricePair={asset} eth={ethPrice} />
        </div>)
      }
    </div>
  )
}

export { PriceWrapper }