import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
function DataFromCovalent() {
  const { fundId } = useParams()
  const [fund, setFund] = useState('')
  const [loading, setLoading] = useState(false)
  const [unlock, setUnlock] = useState(false)
  const [nfts, setNfts] = useState([])
  console.log(
    '🚀 ~ file: DataFromCovalent.js ~ line 12 ~ DataFromCovalent ~ nfts',
    nfts,
  )
  const [projectWallet, setProjectWallet] = useState('')
  const [userHistory, setUserHistory] = useState([])
  const [data, setData] = useState('')
  const userWallet = '0xAF67cbD8fb00759C3b4667beAcfBB3600e25476A'
  const [items, setItems] = useState([])

  const getMetaData = async () => {
    let data = await fetch(`https://ipfs.io/ipfs/${fundId}/metadata.json`)
    data = await data.json()
    data.image = getImage(data.image)
    const descriptionArray = data?.description.split(',$,')
    data.description = descriptionArray[0]
    data.type = descriptionArray[1]
    data.walletAddress = descriptionArray[2]
    setFund(data)
  }
  const getImage = (ipfsURL) => {
    if (!ipfsURL) return
    ipfsURL = ipfsURL.split('://')
    return 'https://ipfs.io/ipfs/' + ipfsURL[1]
  }

  const loadMyCollection = async () => {
    try {
      const covalentAPI = 'ckey_d4115699196e4d238fa138e180c'
      // const contractAddress = '0x15036E33e8E8f706fd77A1aC550d28FD58432c1B'
      const contractAddress = '0x1a2FCb5F2704f1fF8eFF26668f63D001b42bF80B'
      try {
        const nfts = await fetch(
          `https://api.covalenthq.com/v1/80001/tokens/${contractAddress}/nft_token_ids/?quote-currency=USD&format=JSON&key=${covalentAPI}`,
        )
        const allNFTS = await nfts.json()
        if (allNFTS) {
          setNfts(allNFTS)
          setItems(allNFTS?.data?.items)
          setLoading(false)
        }
      } catch (error) {
        console.log(error)
      }
    } catch (error) {
      setLoading(true)
      console.error(error)
    }
  }

  useEffect(() => {
    // getMetaData()
    // setLoading(true)
    loadMyCollection()
  }, [])

  return (
    <div>
      <h2>Contract Stats from Covalent API</h2>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {nfts && nfts?.data ? (
            <div>
              <p className="info">
                <strong>Last update: </strong> {nfts.data.updated_at}
              </p>
              <p>
                <strong className="info">Total Count: </strong>
                {nfts?.data?.items.length} items found.
              </p>
            </div>
          ) : (
            <h2>No data</h2>
          )}

          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Token ID</th>
                <th scope="col">Contract Name</th>
                <th scope="col">Contract symbol</th>
                <th scope="col">Contract decimals</th>
                <th scope="col">Logo url</th>
                <th scope="col">Details</th>
              </tr>
            </thead>

            <tbody>
              {items &&
                items.map((legislator, key) => {
                  let overallRating, overallBlkRating
                  if (legislator.AverageRating) {
                    overallRating = legislator.overallRating
                  }
                  if (legislator.AverageBLKRating) {
                    overallBlkRating = legislator.overallBlkRating
                  }
                  return (
                    <tr key={key}>
                      <td>
                        {legislator.token_id} {legislator.photoUrl}
                      </td>
                      <td>{legislator.contract_name}</td>
                      <td className="line-break">
                        {legislator.contract_address}
                      </td>
                      <td>{legislator.contract_decimals}</td>
                      <td className="line-break">{legislator.logo_url}</td>
                      <td align="center">
                        <a
                          href={`https://mumbai.polygonscan.com/address/${legislator.contract_address}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Explorer
                        </a>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default DataFromCovalent
