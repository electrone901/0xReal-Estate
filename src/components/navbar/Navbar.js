import React from 'react'
import './Navbar.css'

function Navbar({
  currentAccount,
  onClickDisconnect,
  onClickConnect,
  balance,
}) {
  return (
    <div className="m-4">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a href="#" class="navbar-brand">
            Brand
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
              <a href="#" class="nav-item nav-link">
                About
              </a>
              <a href="#" class="nav-item nav-link">
                Products
              </a>
            </div>
            <form class="d-flex ms-auto">
              <input
                type="text"
                class="form-control me-sm-2"
                placeholder="Search"
              />

              {currentAccount ? (
                <button
                  onClick={onClickDisconnect}
                  className="btn btn-outline-light"
                >
                  {currentAccount.substring(0, 5)}...
                  {currentAccount.substring(38)}
                </button>
              ) : (
                <button
                  onClick={onClickConnect}
                  className="btn btn-outline-light"
                >
                  Connect MetaMask
                </button>
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
