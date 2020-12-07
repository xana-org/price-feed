import React, { Fragment } from 'react'
import Logo from 'common/Logo'
import Footer from 'common/Footer'
import ItemHeader from 'components/LeaderBoardComponent/ItemHeader'
import IndividualItem from 'components/LeaderBoardComponent/IndividualItem'
import './index.scss'

const itemArray = new Array(100).fill(0)
function Homepage() {
  return (
    <Fragment>
      <div className="header container">
        <Logo>Zoracles</Logo>
      </div>
      <div className="w-100 main-container mb-5">
        <section className="hero">
          <div className="container">
            <div className="header-view d-flex flex-column justify-content-center align-items-center">
              <div className="header-view__header-line">
                <h2 className="header-view__header">Leaderboard</h2>
              </div>
            </div>
          </div>
        </section>
        <section class="leader-board">
          <div className="container">
            <div className="governance-panel">
              <div className="governance-panel__header">
                <h4>Addresses by Voting Weight</h4>
              </div>
              <ItemHeader />
              {
                itemArray.map((item, index) => 
                  <IndividualItem name="testing" rank={index + 1} votes={2343} voteWeight={3.45} proposalsVoted={1} />
                )
              }
            </div>
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

