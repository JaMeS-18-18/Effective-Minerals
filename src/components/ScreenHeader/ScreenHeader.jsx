import React from 'react'
import './ScreenHeader.css'
import '../../assets/global.css'
export default function ScreenHeader(props) {
  const styles = {
    backgroundImage: `url(${props.img})`,
    width: "100%",
    height:"260px",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
  return (
    <div className='ScrnHead' style={styles}>
        <div className='container ScrnHead'>
          <h3 className="title">
              {props.title}
          </h3>
      </div>
    </div>
  )
}


