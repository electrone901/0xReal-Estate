import React, { useEffect } from 'react'
import { StylesProvider, Container } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import './LandingPage.css'
import nft from '../images/dem.jpg'
import pizza from '../images/pizza1.jpeg'
import hotRecipes from '../images/hot.png'
import art from '../images/art.png'
import ham from '../images/ham.png'
import share from '../images/share.png'
import WallpaperIcon from '@material-ui/icons/Wallpaper'
import Icon from '@material-ui/core/Icon'

function LadingPage({
  account = 0x5df598c222c4a7e8e4ab9f347dcbd924b6458382,
  contractData,
}) {
  useEffect(() => {
    console.log('contractData', contractData)
    const loadCommunity = async () => {
      try {
        // pass the cid
        const cid = 'QmTFaLUesrjbQLKxNszz2DWZ33N9YuGBSVCLpwXnvyiumz'

        let fileData = await fetch(`https://ipfs.io/ipfs/${cid}`)

        const yourData = await fileData.json()
        console.log(yourData)
      } catch (error) {
        console.log(error)
      }
    }
    loadCommunity()

    //
    const getCommunityList = async () => {
      try {
        // gets communityCount from chain
        const count = await contractData.methods.count().call()
        console.log('count', count)

        // gets community data
        const temp = []
        for (let i = count; i >= 1; i--) {
          const community = await contractData.methods.communityList(i).call()
          temp.push(community)
        }
        console.log(temp)

        // setCommunities(temp)
      } catch (error) {
        console.log(error)
        // setLoading(false)
      }
    }
    getCommunityList()
    //
  }, [])

  return (
    <StylesProvider injectFirst>
      <Container>
        <section className="hero" role="banner">
          <div className="container">
            <div className="hero__text container--pall">
              <h6 className="wow fadeInUp animated" data-wow-delay=".5s">
                <span className="text-uppercase">
                  Art Plus Food MarketPLACE
                </span>
              </h6>

              <h1 className="home-titles">
                Create, sell or collect Chef's recipes.
              </h1>

              <p className="lead">
                World Cuisine, Breakfasts, Cocktails, Pastry, Bakery,
                Gastronomy, Chef Clubs Membership, Traditional delicatessen..
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
              </p>

              <Link to="/colections" className="button-gren-padding hero_cta">
                Explore
              </Link>
            </div>

            <div className="hero__image">
              <img src={nft} alt="" className="food" />
            </div>
          </div>
        </section>

        <section className="how-works">
          <Grid container direction="row" spacing={2}>
            <Grid item xs>
              <div className="col-works">
                <h3>1. Connect your wallet</h3>

                <p className="how-works-description">
                  Connect using Web 3.0 Technology by clicking on the top right
                  corner button.
                </p>
              </div>
            </Grid>

            <Grid item xs>
              <div className="col-works">
                <h3> 2. Add your Recipes</h3>
                <p className="how-works-description">
                  Mint your recipe or Membership token directly from your
                  account, add it to a cookbook (collection) and define
                  unlockable content.
                </p>
              </div>
            </Grid>

            <Grid item xs>
              <div className="col-works">
                <h3> 3. Sell your NFT's</h3>
                <p className="how-works-description">
                  Choose the license, the royalties model and put your recipes,
                  membership or products on the marketplace.
                </p>
              </div>
            </Grid>
          </Grid>
        </section>

        {/* here */}
        <section className="how-works">
          <img src={hotRecipes} alt="hotRecipes" />
          <h2>Browse by category</h2>

          <Grid container direction="row" spacing={2}>
            <Grid item xs>
              <div className="">
                <h3>Art</h3>
                <img src={art} alt="" className="pics" />
              </div>
            </Grid>
            <Grid item xs>
              <div className="">
                <h3>Fresh Ingredients</h3>
                <img src={ham} alt="" className="pics" />
              </div>
            </Grid>
            <Grid item xs>
              <div className="">
                <h3>Local</h3>
                <img src={share} alt="" className="pics" />
              </div>
            </Grid>
          </Grid>
        </section>
      </Container>
    </StylesProvider>
  )
}

export default LadingPage
