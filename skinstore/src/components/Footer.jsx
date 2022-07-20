import React from 'react'
import { useState } from 'react'
import style from './Footer.module.css'
import data from './FooterData.json'
import { BsFillTelephoneFill ,FaCarSide,SiRedhatopenshift,IoMdHelp,FaCrosshairs,FaCookie} from "react-icons/fa";

const Footer = () => {
    const helper=data.HelpInfo
    const social=data.socialMedia
    const aboutus=data.about
    const legaldata=data.legal
    const paymentdata=data.payment
    const [help,setHelp]=useState(helper)
    const [media,setMedia]=useState(social)
    const [abouttext,setAboutText]=useState(aboutus)
    const [legaltext,setLegalText]=useState(legaldata)
    const [pay,setPay]=useState(paymentdata)
  return (
    <div>
        <hr/>
        {/* main footer */}
        <div className={style.maindiv}>
            {/* upper footer */}
             <div className={style.upperdiv}>
                {/* left div */}
                <div className={style.upperleft}>
                    {/* upper left div */}
                    <div>
                        <div>
                            <h4>Sign up to our email list and receive 50% off your next order</h4>
                        </div>
                        <div>
                            <button className={style.button}>Sign Up</button>
                        </div>
                    </div>
                    {/* lower left div */}
                    
                    <div className={style.infodiv}>
                    <hr />
                        <div><h4>Help & Information</h4></div>
                        {help.map((e)=>(
                            <div>
                                {/* <div>
                                    {e.icon}
                                </div> */}
                                <div><h5>{e.title}</h5></div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* right div */}
                <div>
                    {/* right upper div */}
                    <div>
                        <div><h4>Connect With Us</h4></div>
                        <div className={style.mediaiconsdiv}>
                            {/* social media icons */}
                            {
                                media.map((e)=>(
                                    <div><img src={e.icons}className={style.icondiv}/></div>
                                ))
                            }
                        </div>
                    </div>
                    {/* right lower div */}
                    <div className={style.rightlowerdiv}>
                        <div>
                        <hr />
                            <div><h4>About Skinstore</h4></div>
                            <div>
                                {/* map about */}
                                {
                                    abouttext.map((e)=>(
                                       <div><h5>{e.title}</h5></div>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                        <hr />
                            <div><h4>Legal</h4></div>
                            <div>
                                {/* map legal */}
                                {
                                    legaltext.map((e)=>(
                                        <div><h5>{e.title}</h5></div>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                        <hr />
                            <div><h4>How to Contact Us</h4></div>
                            <div>
                                <div><h5>Message Us</h5></div>
                                <div><h5>Free Beauty Consultation</h5></div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
         {/* lower footer */}
         <hr />
              <div className={style.lowerfooterdiv}>
                   <div className={style.leftlowerdiv}>
                     <div><h1>THG</h1></div>
                     <div><h5>2020 @ The Hut.com Ltd.</h5></div>
                   </div>
                   <div>
                    <div><h4>Pay securely with</h4></div>
                    <div className={style.payimg}>
                        {/* payment icons */}
                        {
                            pay.map((e)=>(
                                <div className={style.image}>
                                    <img src={e.icon}/>
                                </div>
                            ))
                        }
                    </div>
                   </div>
              </div>

        </div>
    </div>
  )
}

export default Footer