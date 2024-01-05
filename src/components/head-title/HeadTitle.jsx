import React from 'react'
import "./HeadTitle.scss"
import headLogo from "../../assets/Head_Title.png"

const HeadTitle = () => {
  return (
    <div className="head__title">
    <img src={headLogo} alt="" />
    </div>
  )
}

export default HeadTitle