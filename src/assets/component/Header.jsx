import React from 'react'
import {list} from "./Extra"
import "./Header.css"
function Header() {
  return (
    <header className='Header_cont'>
      <section >
        <img className='header_image' src="https://ng.jumia.is/cms/0-5-TechWeek/2026/Brand-day/11-march-skyrun/BD_Desktop_top_strip.gif" alt="" />
      </section>
      <div className='Second_head'>
        <ul className='sell'>
          <li>Sell on jumia</li>
        </ul>
         <ul className='list'>
              {list.map((menu, index)=>(
                <li key={menu.id} className={index === 1 ? "active" : null }>  {menu.text}</li>
              ))}  
         </ul>
      </div>
    </header>
  )
}

export default Header
