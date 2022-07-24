import React,{useState} from 'react'
import style from './Home.module.css'
import SimpleImageSlider from "react-simple-image-slider";
import homedata from "../Home/Homepagedata.json"
import { Link } from 'react-router-dom';


const images = [
    { url: "image1.webp" },
    { url: "image2.webp" },
    { url: "image3.webp" },
    { url: "image4.webp" },
  ];

const Home = () => {
    const trenddata=homedata.trendingOffers
    const category=homedata.Category
    const like=homedata.like
    const com=homedata.companies
    const Blog=homedata.blog
    const [trend,setTrens]=useState(trenddata)
    const [cat,setCat]=useState(category)
    const [likedata,setLikedata]=useState(like)
    const [comdata,setComdata]=useState(com)
    const [blogdata,setBlogdata]=useState(Blog)
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
        <SimpleImageSlider
        width={"100%"}
        height={504}
        images={images} 
        showBullets={true}
        showNavs={true}
      />
    </div>
    {/* 3rd div */}
    <div className={style.trendhead}>Trending Offers</div>
        <div className={style.trenddiv}>
            
          {
            trend.map((e)=>(
                <div>
                  <Link to="/products">
                    <div><img src={e.image}className={style.trendimg}/></div></Link>
                    <div className={style.title}>{e.title}</div>
                    <div className={style.titlep}>{e.description}</div>
                    <div><button className={style.btn}>SHOP NOW</button></div>
                </div>
            ))
          }
        </div>
    {/* 4th div */}
    <div className={style.trendhead}>Shop By Category</div>
        <div className={style.category}>
            {
                cat.map((e)=>(
                    <div>
                        <img src={e.image} className={style.catimg}/>
                    </div>
                ))
            }

        </div>
    {/* 5th div */}
    <div className={style.trendhead}>What People Are Buying Right Now</div>
    <div className={style.likediv}>
        {
          likedata.map((e)=>(
            <div>
                <img src={e.image} alt="" className={style.likeimg} />
                <div className={style.title}>{e.title}</div>
                <div className={style.title}>{e.price}</div>
                <button className={style.likebtn}>SHOP NOW</button>
            </div>
          ))
        }
    </div>
    {/* 6th div */}
    <div className={style.comdiv}>
        {
          comdata.map((e)=>(
            <div>
                <div><img src={e.image} alt="" className={style.comimg}/></div>
            </div>
          ))
        }
    </div>
  {/* 7th div */}
  <div className={style.trendhead}>Trending Now</div>
   <div className={style.bottlediv}>
    <div><img src="https://static.thcdn.com/images/medium/webp/widgets/121-us/09/4P-Goop-with-bottle-and-bubbles-600x600-100209.jpg" alt="" /></div>
    <div><img src="Capture.PNG" alt="" className={style.captureimg}/></div>
   </div>

   {/* 8th div */}
   <div className={style.trendhead}>Over On The Blog</div>
   <div className={style.blogdiv}>
    {
      blogdata.map((e)=>(
         <div>
            <div><img src={e.image} alt="" className={style.trendimg}/></div>
            <div className={style.title}>{e.title}</div>
            <div className={style.titlep}>{e.des}</div>
            <div><button className={style.btn}>READ MORE</button></div>
         </div>
      ))
    }
   </div>
    </div>
    
  )
}

export default Home
