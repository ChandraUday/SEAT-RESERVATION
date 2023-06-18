import React from 'react'

function Header() {
  return (
    <div className="header">

         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROAXB3RKKo74yQHnvDRrYU2VS6vZxhtE7y6Z_ThR4&s" className="header_logo" alt="amc"/>
        
         <div className="header_search">
             <input type="text" />
        </div>

        <div className="header_nav">
               <div className="header_option">
                    <span className="header_option1">Welcome to Indian Railways</span>
                    <span className="header_option2">  </span>
               </div>

               <div className="header_option">
                    <span className="header_option1">Book Tickets |</span>
                    <span className="header_option2">  Safety | Security | Punctuality</span>
               </div>

               <div className="header_option">
                    <span className="header_option1">PNR Status</span>
                    <span className="header_option2">  </span>
               </div>
               </div>
               </div>
  )
}

export default Header