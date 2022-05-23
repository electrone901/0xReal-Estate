import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import Companies from './components/companies/Companies'
import Apartment from './components/apartment/Apartment'
import Navbar from './components/navbar/Navbar'
import PostApartment from './components/post-apartment/PostApartment'

const { ethers } = require('ethers')

function App() {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState('')
  const [contract, setContract] = useState('')

  const [balance, setBalance] = useState('')
  const [currentAccount, setCurrentAccount] = useState('')
  const [chainId, setChainId] = useState(0)
  const [chainname, setChainName] = useState('')

  useEffect(() => {
    if (!currentAccount || !ethers.utils.isAddress(currentAccount)) return

    //client side code
    if (!window.ethereum) return
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    provider.getBalance(currentAccount).then((result) => {
      setBalance(ethers.utils.formatEther(result))
    })
    provider.getNetwork().then((result) => {
      setChainId(result.chainId)
      setChainName(result.name)
    })
  }, [currentAccount])

  const onClickConnect = () => {
    if (!window.ethereum) {
      console.log('please install MetaMask')
      return
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    // MetaMask requires requesting permission to connect users accounts
    provider
      .send('eth_requestAccounts', [])
      .then((accounts) => {
        if (accounts.length > 0) setCurrentAccount(accounts[0])
      })
      .catch((e) => console.log(e))
  }

  const onClickDisconnect = () => {
    setBalance(undefined)
    setCurrentAccount(undefined)
  }

  return (
    <BrowserRouter>
      <div className="cl">
        <Navbar
          currentAccount={currentAccount}
          onClickDisconnect={onClickDisconnect}
          onClickConnect={onClickConnect}
          balance={balance}
        />

        <Routes>
          <Route path="/" element={<Companies />} />
          <Route path="/apartment/:aptId" element={<Apartment />} />
          <Route path="/post-apartment" element={<PostApartment />} />
        </Routes>
      </div>
    </BrowserRouter>

    // <Router>
    //   <div className="cl">
    //     <Navbar
    //       currentAccount={currentAccount}
    //       onClickDisconnect={onClickDisconnect}
    //       onClickConnect={onClickConnect}
    //       balance={balance}
    //     />

    //     <Switch>
    //       <Route exact path="/apartment/:id" component={Apartment} />
    //       <Route exact path="/post-apartment" component={PostApartment} />
    //       <Route exact path="/" component={Companies} />
    //     </Switch>
    //     {/* <Footer /> */}
    //   </div>
    // </Router>
  )
}

export default App
