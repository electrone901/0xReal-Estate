import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../images/logo1.png'
import UAuth from '@uauth/js'

function Navbar({
  currentAccount,
  onClickDisconnect,
  onClickConnect,
  balance,
  getLatestPrice,
  addNewPrice,
}) {
  const [udUser, setudUser] = useState('')

  const uauth = new UAuth({
    clientID: '0f36b47d-8528-4fa6-a84f-6ab3407b40c2',
    // redirectUri: 'http://localhost:3000',
    redirectUri: 'https://apartment-reviwer-app.netlify.app/',
  })

  const loginUD = async (e) => {
    e.preventDefault()
    try {
      const authorization = await uauth.loginWithPopup()
      const currentUser = authorization.idToken.sub
      console.log(
        '🚀 ~ file: Navbar.js ~ line 26 ~ loginUD ~ currentUser',
        currentUser,
      )
      setudUser(currentUser)
    } catch (error) {
      console.error(error)
    }
  }

  const unstoppableDomainsLogout = () => {
    console.log('logging out!')
    uauth.logout().catch((error) => {
      console.error('profile error:', error)
    })
    setudUser('')
  }

  return (
    <div className="m-4">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a href="#" class="navbar-brand">
            <img src={logo} alt="logo" className="logo" />
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse2"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse2">
            <div class="navbar-nav">
              <a href="/" class="nav-item nav-link active">
                Home
              </a>

              <button
                onClick={(e) => addNewPrice(e)}
                className="btn btn-outline-light"
              >
                getLatestPrice
              </button>
              <a href="/post-apartment" class="nav-item nav-link">
                Register Apartment
              </a>
            </div>
            <form class="d-flex ms-auto">
              <input
                type="text"
                class="form-control me-sm-2"
                placeholder="Search"
              />

              {udUser ? (
                <button
                  onClick={onClickDisconnect}
                  className="btn btn-outline-light"
                >
                  {udUser}
                </button>
              ) : (
                <>
                  <button
                    onClick={(e) => onClickConnect(e)}
                    className="btn btn-outline-light"
                  >
                    Connect MetaMask
                  </button>

                  <button onClick={loginUD} className="btn btn-outline-light">
                    Login with UnstoppableDomains
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </nav>
      <div>
        {currentAccount ? (
          <div className="display-flex">
            <p>Welcome back 🤗. </p>
            <p>Your balance is: {balance}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default Navbar
