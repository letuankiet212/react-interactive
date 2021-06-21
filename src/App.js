import './App.css';
import { useState } from 'react'

function App() {
  const [views, setViews] = useState(100000)
  const [discount, setDiscount] = useState(false)

  const changeString = (views) => {
    if (views >= 1000000) {
      views = (views / 1000000) + "M"
    }
    else if (views >= 1000) {
      views = (views / 1000) + "K";
    }
    return views;
  }

  const convertMoney = (views) => {
    let money = views * 0.00016
    if (discount) {
      money = money * 25 /100
    }
    return Math.floor(money)
  }
  const handleChange = (value) => {
    setViews(value * 100000)
  }
  return (
    <div className="App relative font-body">
      <div className="fixed l-0 t-0 w-full h-full z-0 pointer-events-none">
        <img src="assets/images/bg-pattern.svg" alt="" width="100%" height="auto" />
      </div>
      <header className="text-center relative pt-36 ">
        <h1 className="text-blue-900 font-extrabold text-3xl py-2">Simple,traffic-based pricing</h1>
        <p>Sign-up for our 30-day trail. No credit card required</p>
      </header>
      <div className="main shadow-lg bg-white rounded-lg mt-10 px-10 py-11 w-3/6 mx-auto relative">
        <div className="flex justify-between items-center">
          <p className="text-gray-400 uppercase text-sm font-bold tracking-wider">{changeString(views)} pageviews</p>
          <div className="flex items-center">
            <p className="text-blue-900 text-4xl  font-extrabold">${convertMoney(views)}.00</p>
            <p className="text-sm text-gray-400">/month</p>
          </div>
        </div>
        <div>
          <input type="range" name="" id="" className="w-full mt-11" defaultValue="1" onChange={(e) => handleChange(e.target.value)} />
        </div>
        <div className="flex justify-center items-center text-gray-400 text-sm">
          <p>Monthly Billing</p>
          <input checked={discount} onChange={() => setDiscount(!discount)} type="checkbox" name="" id="" className="mx-1.5" />
          <p>Yearly Billing</p>
          <p className="ml-1.5 bg-red-100 text-yellow-500 rounded-md px-1 font-bold">
            25% discount
          </p>
        </div>
        <div className="flex mt-11 items-center justify-between">
          <div className="text-sm text-gray-500">
            <div className="flex items-center">
              <img src="assets/images/icon-check.svg" alt="" width="13" height="13" />
              <p className="pl-1">
                Unlimited websites
              </p>
            </div>
            <div className="flex items-center my-1.5">
              <img src="assets/images/icon-check.svg" alt="" width="13" height="13" />
              <p className="pl-1">
                100% data ownership
              </p>
            </div>
            <div className="flex items-center">
              <img src="assets/images/icon-check.svg" alt="" width="13" height="13" />
              <p className="pl-1">
                Email resports
              </p>
            </div>
          </div>
          <button className="cursor-pointer bg-blue-900 point text-white text-sm px-11 py-3 rounded-3xl">
            Start my trail
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
