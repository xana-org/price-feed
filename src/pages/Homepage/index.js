import React, { Fragment, useEffect } from 'react'
import { PriceWrapper } from 'components/PriceComponent'
import DataSourceWrapper from 'components/DataSourceComponent'
import Logo from 'common/Logo'
import Footer from 'common/Footer'
import './index.scss'
import coinbaseImg from 'assets/coinbase.svg'
import uniswapImg from 'assets/uniswap.svg'
import { tokens } from 'constant'
import { priceFeedFromUniswap } from 'API'

const ReporterAssets = [
  {
    assetName: 'Coinbase Pro',
    price: "10 prices",
    imgSrc: coinbaseImg
  },
  {
    assetName: 'Uniswap',
    price: "10 prices",
    imgSrc: uniswapImg
  }
]

function Homepage() {
  useEffect(() => {
    priceFeedFromUniswap('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', 18).then(console.log)
  }, [])
  return (
    <Fragment>
      <div className="header container">
        <Logo>Zoracles</Logo>
      </div>
      <div className="w-100 main-container">
        <section className="hero">
          <div className="container">
            <div className="header-view d-flex flex-column justify-content-center align-items-center">
              <div className="header-view__header-line">
                <h2 className="header-view__header">Open Oracle</h2>
              </div>
              <p className="header-view__subheader">
                These price feeds allow trusted data sources to provide dApps with reliable market data anchored to Uniswap V2. Zoracles solution will provide zero-knowledge proofs to keep data transmission confidential.
              </p>
            </div>
          </div>
        </section>
        <section className="prices">
          <div className="container">
            <p className="section-header">Assets</p>
            <PriceWrapper Assets={tokens} />
          </div>
        </section>
        <section className="reporters">
          <div className="container">
            <p className="section-header">Data Sources</p>
            <DataSourceWrapper Assets={ReporterAssets} />
          </div>
        </section>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Fragment>
  )
}

export default Homepage

