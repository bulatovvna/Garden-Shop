import React from 'react'
// import {ReactComponent as BannerImg} from "./saleBannerImg.png"
import saleBanner from "./saleBannerImg.png"
import s from "./SaleBanner.module.css"

function SaleBanner() {
  return (
    <div className={s.banner}>
      <div className={s.saleBanner}>
        <p>Sale <br/> <span>New Season</span> </p>
        <button className={s.saleBtn}>Sale</button>
      </div>
    <img src = {saleBanner} alt='banner'/>
    </div>
  )
}

export default SaleBanner
