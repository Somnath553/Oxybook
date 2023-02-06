import React from 'react'

function Badge(props) {
  return (
    <div>
   {/* <div className="dis-ribbon"><span>Science</span></div> */}
   <div className="ribbons-wrapper">
   
      <span className="ribbon4 text-white">{props.tag}</span>
    
   </div>

    </div>
  )
}

export default Badge
