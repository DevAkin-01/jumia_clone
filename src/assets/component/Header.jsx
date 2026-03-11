import React from 'react'
import {list} from "./Extra"
import "./Header.css"
function Header() {
  return (
    <header>
      <section>
        <img src="https://ng.jumia.is/cms/0-5-TechWeek/2026/Brand-day/11-march-skyrun/BD_Desktop_top_strip.gif" alt="" />
      </section>
      <div>
        <ul>
          <li>Sell on jumia</li>
        </ul>
         <ul className='list'>
              {list.map((menu)=>(
                <li key={menu.id}> {menu.text}</li>
              ))}  
         </ul>
      </div>
    </header>
  )
}

export default Header
