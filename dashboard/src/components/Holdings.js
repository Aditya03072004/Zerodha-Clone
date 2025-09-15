import React, { useState, useEffect }from "react";
// import { holdings } from "../data/data";
import axios from 'axios';
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {

   const [allHoldings, setAllHoldings] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:3002/allHoldings").then((res) => {
        console.log("ok!");
        setAllHoldings(res.data);
      })
    }, []);


// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const labels = allHoldings.map((subArray) => subArray['name']);

const data ={
  labels,
  datasets: [
     {
      label: 'Stock Name',
      data: allHoldings.map((stock) => stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ]
}
// export const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };





  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          {allHoldings.map((stock, index)=>{
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty>=0.0;
            const profClass= isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss? "loss" : "profit";

            return(
              <tr key={index}>
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td>{curValue}</td>
            <td className={profClass}>
              {(curValue - stock.avg * stock.qty).toFixed(2)};
            </td>
            <td className={profClass}>{stock.net}</td>
            <td className={dayClass}>{stock.day} </td>
          </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      < VerticalGraph data={data}/>
    </>
  );
};

export default Holdings;