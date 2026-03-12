import React from 'react'
import {castImages} from "./Extra"
import "./Header2.css"
function Header2() {
  return (
    <div className='header_2_cont'>
      <div>
        <img className='h2_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ10M4rOiXsCKNKyJzTrywEzEboTprrk3on4g&s" alt="" />
      </div>
      <section className='h2_textsec'>
        <form className='form1'>
            <img src="" alt="" />   
              <input className='input1' type="" placeholder='Search products,brands and categories'/>
        </form>
        <button className='btn1'>search</button>
        <div>
            <div className='user_menu'>
              {castImages.map((menu)=>(
                <p key={menu.id} className='menu_item'>
                    <img className='images3'  src={menu.image}/>
                    <span>{menu.text}</span>
                </p>
                
              ))}  
            </div>
        </div>
      </section>
    </div>
  )
}

export default Header2
