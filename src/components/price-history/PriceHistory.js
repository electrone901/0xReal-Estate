import React from 'react'
import './PriceHistory.css'
function PriceHistory() {
  return (
    <div className="m-4">
      <h2>Price History</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Date</th>
            <th scope="col">Company</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>12-12-2021</td>
            <td>Compass</td>
            <td>$3,890</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>10-12-2021</td>
            <td>Remax Real State</td>
            <td>$3,890</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>09-12-2021</td>
            <td>Compass</td>
            <td>$3,590</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>07-12-2020</td>
            <td>Compass</td>
            <td>$3,190</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>12-12-2021</td>
            <td>Compass</td>
            <td>$3,890</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>10-12-2021</td>
            <td>Remax Real State</td>
            <td>$3,890</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>09-12-2021</td>
            <td>Compass</td>
            <td>$3,590</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>07-12-2020</td>
            <td>Compass</td>
            <td>$3,190</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PriceHistory
