import React from 'react'
import style from './Home.module.css'

const Home = () => {
  return (
    // main div of home
    <div>
        {/* 1st div */}
        <div>
            <div className={style.firstdiv}>
                <div>
                    <h4>FREE US Shipping Over $49</h4>
                </div>
                <div>
                    <h4> Refer a Friend, Get $15</h4>
                </div>
                <div>
                    <h4>New Customers Save 20% - Use Code NEWBIE</h4>
                </div>
                <div>
                    <h4>Download Our App</h4>
                </div>
            </div>
            <div className={style.offerdiv}>
                <h2>15% off with code SSIS +12-Piece Beauty Bag (worth $104) @ $150|shop now</h2>
            </div>
        </div>

    {/* 2nd div */}
        <div>
        
            
        </div>
    {/* 3rd div */}
        <div></div>
    {/* 4th div */}
        <div></div>
    </div>
  )
}

export default Home