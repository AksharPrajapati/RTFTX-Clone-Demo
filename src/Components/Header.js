import React from 'react'
import '../Styles/header.scss'

export default function Header({ onWalletConnect }) {
  return (
    <header>
      <div className="header-inner">
        <div className="logo">LOGO</div>
        <nav>
          <ul>
            <li className="btn">
              <a onClick={onWalletConnect} style={{ cursor: 'pointer' }}>
                REVEAL
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
