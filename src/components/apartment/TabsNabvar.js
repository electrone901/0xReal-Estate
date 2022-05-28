import { Tabs, Tab } from 'react-bootstrap'
import React, { Component } from 'react'
import './Apartment.css'
import Reviews from '../reviews/Reviews'
import PriceHistory from '../price-history/PriceHistory'
import DataFromCovalent from '../apartment/DataFromCovalent'

class TabsNabvar extends Component {
  async componentWillMount() {
    // await this.loadBlockchainData(this.props.dispatch)
  }

  //check if MetaMask exists
  async loadBlockchainData(dispatch) {
    if (window.ethereum) {
      // const web3 = new Web3(window.ethereum)
      // window.web3 = new Web3(window.ethereum)
      // await window.ethereum.enable()
      // const netId = await web3.eth.net.getId()
      // const accounts = await web3.eth.getAccounts()
      //check if account is detected, then load balance&setStates, elsepush alert
      // if (typeof accounts[0] !== 'undefined') {
      //   let balance = await web3.eth.getBalance(accounts[0])
      //   balance = web3.utils.fromWei(balance)
      //   this.setState({ account: accounts[0], balance, web3 })
      // }
      // try {
      //   const token = new web3.eth.Contract(
      //     Token.abi,
      //     Token.networks[netId].address,
      //   )
      //   const dbank = new web3.eth.Contract(
      //     dBank.abi,
      //     dBank.networks[netId].address,
      //   )
      //   const dBankAddress = dBank.networks[netId].address
      //   this.setState({
      //     token: token,
      //     dbank: dbank,
      //     dBankAddress: dBankAddress,
      //   })
      //   let tokenBalance = await token.methods
      //     .balanceOf(this.state.account)
      //     .call()
      //   tokenBalance = web3.utils.fromWei(tokenBalance)
      //   let depositedBalance = await dbank.methods
      //     .etherBalanceOf(this.state.account)
      //     .call()
      //   depositedBalance = web3.utils.fromWei(depositedBalance)
      //   this.setState({ tokenBalance, depositedBalance })
      // } catch (error) {
      //   console.log('error', error)
      //   window.alert('Contract not deployed to the current network')
      // }
    } else {
      window.alert('Please install Metamask')
    }
  }

  async deposit(amount) {
    //check if this.state.dbank is ok then deposit
    // if (this.state.dbank !== 'undefined') {
    //   try {
    //     await this.state.dbank.methods
    //       .deposit()
    //       .send({ value: amount.toString(), from: this.state.account })
    //     window.location = '#/dashboard'
    //   } catch (error) {
    //     console.log('Error, deposit: ', error)
    //   }
    // }
  }

  // async withdraw(e) {
  //   e.preventDefault()
  //   if (this.state.dbank !== 'undefined') {
  //     try {
  //       await this.state.dbank.methods
  //         .withdraw()
  //         .send({ from: this.state.account })
  //       window.location = '#/dashboard'
  //     } catch (e) {
  //       console.log('Error, withdraw: ', e)
  //     }
  //   }
  // }

  constructor(props) {
    super(props)
    this.state = {
      web3: 'undefined',
      account: '',
      token: null,
      tokenBalance: 0,
      dbank: null,
      balance: 0,
      dBankAddress: null,
      descriptionReview: '',
      businessGoal: '',
      EthAmount: 0,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  async handleSubmit(event) {
    event.preventDefault()
    console.log('this.state', this.state)
    // event.preventDefault()
    // console.log('-->', this.state)
    // let json = {
    //   descriptionReview: this.state.descriptionReview,
    //   businessGoal: this.state.businessGoal,
    //   EthAmount: this.state.EthAmount,
    // }
    // await client.db.setJSON(privateKey, 'home', json)
    // let amount = this.depositAmount.value
    // amount = amount * 10 ** 18 //convert to wei
    // this.deposit(amount)
    // const { data } = await client.db.getJSON(publicKey, 'home')
    // console.log(data)
  }

  render() {
    return (
      <div className="">
        <div
          className="container-fluid mt-5 text-center"
          style={{ height: '45rem' }}
        >
          <br></br>

          <div className="row p-4">
            <main role="main" className="col-lg- text-center">
              <div className="content mr-auto ml-auto">
                <Tabs
                  defaultActiveKey="token-Earned"
                  id="uncontrolled-tab-example"
                  className=""
                >
                  <Tab eventKey="token-Earned" title="PriceHistory">
                    <div>
                      <br />

                      <br />
                      <PriceHistory />
                      <div>
                        <button type="submit" className="btn btn-primary">
                          {this.state.tokenBalance}
                        </button>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="DataFromCovalent" title="DataFromCovalent">
                    <div>
                      <br />
                      <DataFromCovalent />
                    </div>
                  </Tab>
                  <Tab eventKey="Reviews" title="Reviews">
                    <div>
                      <br />
                      Your Account Reviews Updating
                      <br />
                      <br />
                      <Reviews />
                    </div>
                  </Tab>
                  <Tab eventKey="deposit" title="Add A Review">
                    <div>
                      <br />
                      Please Add Your Review
                      <br />
                      <br />
                      <form onSubmit={this.handleSubmit}>
                        <div
                          className="form-group"
                          style={{ textAlign: 'left' }}
                        >
                          <label htmlFor="formGroupExampleInput">
                            Description
                          </label>
                          <input
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            name="descriptionReview"
                            placeholder="Looking for an apartment in NYC can be a nightmare, but working with Sahar Aubon was an absolute pleasure."
                          />
                        </div>
                        <button className="btn btn-primary" disabled>
                          Submit{' '}
                        </button>
                      </form>
                    </div>
                  </Tab>

                  <Tab eventKey="withdraw" title="Add A New Price">
                    <div>
                      <br />
                      Please Add New Price
                      <br />
                      <br />
                      <form onSubmit={this.handleSubmit}>
                        <div
                          className="form-group"
                          style={{ textAlign: 'left' }}
                        >
                          <label htmlFor="formGroupExampleInput">
                            New Price
                          </label>
                          <input
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            name="descriptionReview"
                            placeholder="Looking for an apartment in NYC can be a nightmare, but working with Sahar Aubon was an absolute pleasure."
                          />
                        </div>
                        <button className="btn btn-primary" disabled>
                          Submit{' '}
                        </button>
                      </form>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </main>
          </div>
        </div>
      </div>
    )
  }
}

export default TabsNabvar
