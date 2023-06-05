import React from 'react'
import './Widgets.css'
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon/>
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>
        {newsArticle("React Library", "Top news - 1000 readers")}
        {newsArticle("War in Ukraine", "Top news - 1568000 readers")}
        {newsArticle("BITCOIN breacks $25k", "Crypto news - 541000 readers")}
        {newsArticle("Tesla best of the best", "Auto news - 1678000 readers")}
        {newsArticle("Ferrari SALE", "Auto news - 21000 readers")}
        {newsArticle("Frontend developer", "Job news - 1700 readers")}
        {newsArticle("Backend developer", "Job news - 1500 readers")}
    </div>
  )
}

export default Widgets