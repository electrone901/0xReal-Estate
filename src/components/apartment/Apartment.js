import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './Apartment.css'
import TabsNabvar from './TabsNabvar'
const myImg =
  'https://s3-media0.fl.yelpcdn.com/bphoto/oTMzZGypcGxUkhWGmbBFnw/o.jpg'
function Apartment() {
  let location = useLocation()
  location = location.pathname
  const aptId = location.substr(11)
  const [apt, setApt] = useState('')
  console.log('apt', apt)



  const getMetaData = async () => {
    let data = await fetch(`https://ipfs.io/ipfs/${aptId}/metadata.json`)
    data = await data.json()
    let descriptionArr = data.description.split(',$,')
    data.image = await getImage(data.image)
    data.info = descriptionArr[0]
    data.company = descriptionArr[1]
    data.status = descriptionArr[2]
    setApt(data)
  }
  const getImage = (ipfsURL) => {
    if (!ipfsURL) return
    ipfsURL = ipfsURL.split('://')
    return 'https://ipfs.io/ipfs/' + ipfsURL[1]
  }

  useEffect(() => {
    getMetaData()
  }, [])

  return (
    <div className="m-4">
      <h2>Apartment</h2>
      <header>
        <div className="img-apartment">
          {/* company: " Compass"
description: "We recently bought a NYC apartment - our first time purchasing - and we couldn't be more grateful to have had Grant as our broker. He provided invaluable advice and insight at every… more Responds in about 2 hours 89 locals recently contacted this agent 76 Verified LicenseReal Estate Agents Efficient - according to 2 users My husband and I had the pleasure of working with Grant when planning our move from CA to NYC for this summer. Grant was gracious enough to take his time and show us several…,$, Compass,$,Occupied"
image: "https://ipfs.io/ipfs/bafybeihmugc7q3xbnehtdahjryxh7itwjsufm7hz4r24pluzdjuxwb4ggm/6.jpg"
info:
: */}
          <div
            style={{
              background: `url(${myImg}) no-repeat`,
              backgroundPosition: 'center top',
              backgroundSize: '100%',
              height: '500px',
              display: 'flex',
              justifyContent: 'space-between',
              color: 'white',
              fontWeight: '600',
            }}
          >
            <div className="apartment-inner">
              <div className="bg-black">
                <h2>
                  {apt ? apt.name : '123 Broadway Apartment 3 A NY, NY 10024 '}
                </h2>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="ratings">
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star rating-color"></i>
                    <i className="fa fa-star"></i> 0 Reviews
                  </div>
                </div>
                <p>
                  <i class="fa fa-clock-o" aria-hidden="true"></i> Currently{' '}
                  {apt.status}
                </p>
              </div>
            </div>

            <div className="apartment-inner2">
              <button type="button" className="btn btn-lg btn-primary">
                Write a review
              </button>
              <button type="button" className="btn btn-lg btn-warning">
                Add new price
              </button>
            </div>
          </div>
        </div>
      </header>
      <br/>
      <br/>

      <div>
        <div className="row">
          <div className="col-md-3">
            <img src={apt.image} style={{ width: '300px' }} alt="" />
          </div>
          <div className="col">
            <div className="d-flex justify-content-between align-items-center">
              <p className="title">Apartment Full details</p>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <p>{apt.name}</p>
            </div>
            <p>
              <i class="fa fa-check-square"></i> Verified License Real Estate
              Agent
            </p>

            <p>
              <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
              This Apartment is {apt.status}
            </p>

            <p>
              <i class="fa fa-solid fa-building" aria-hidden="true"></i> By{' '}
              {apt.company} company
            </p>
            {apt.info}
          </div>
        </div>
      </div>
      <TabsNabvar />
    </div>
  )
}

export default Apartment
