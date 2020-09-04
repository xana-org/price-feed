import React from 'react'
import './index.scss'

export default function Footer() {
  return (
    <div className="container">
      <div class="row mb60">
        <div class="col-md-3">
          <div class="probootstrap-footer-widget">
            <h4 class="heading">About Zoracles.</h4>
            <p>Zoracles partners with DeFi projects using an open oracle standard and zero-knowledge proofs to provide confidential data to smart contracts.</p>
          </div> 
        </div>
        <div class="col-md-3">
          <div class="probootstrap-footer-widget probootstrap-link-wrap">
            <h4 class="heading">Quick Links</h4>
            <ul class="stack-link">
              <li><a href="#home">Home</a></li>
              <li><a href="https://www.newsbtc.com/press-releases/zoracles-transforming-defi-oracle-data-with-zero-knowledge-proofs/">Press</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="https://github.com/zoracles">Github</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-3" id="contact">
          <div class="probootstrap-footer-widget">
            <h4 class="heading">More Links</h4>
            <ul class="stack-link">
              <li><a href="https://discord.gg/9vn7UdY">Discord</a></li>
              <li><a href="https://t.me/zoracles">Telegram</a></li>
              <li><a href="https://twitter.com/z0racles">Twitter</a></li>
              <li><a href="https://www.reddit.com/r/Zoracles/">Reddit</a></li>
            </ul>
          </div> 
        </div>
        <div class="col-md-3">
          <div class="probootstrap-footer-widget probootstrap-link-wrap">
            <h4 class="heading">Subscribe</h4>
            <form action="#">
              <div class="form-field">
                <input type="text" class="form-control" placeholder="Enter your email" />
                <button class="btn btn-subscribe">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
