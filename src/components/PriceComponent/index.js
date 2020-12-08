import React from 'react'
import _ from 'lodash'
import UniswapAsset from './UniswapAsset'


const PriceWrapper = ({ Assets }) => {
  return (
    <div className="row">
      {
        Assets.map(asset => 
        <div className="col-xs-6 col-sm-6 col-lg-3">
          <UniswapAsset pricePair={asset} />
        </div>)
      }
    </div>
  )
}

export { PriceWrapper }