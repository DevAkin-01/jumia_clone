import React from 'react'
import "./Body.css"
import {bodyList} from "./Extra"
import Article from './Article'
import {JumiaForce} from "./Extra"

function Body() {
  return (
    <article className='parent_cont'>
    <div  className='Body_cont'>
      <section className='Body_Sect'>
          <ul className='Body_img1'>
            {bodyList.map((Menu)=>(
                <li key={Menu.id}> <img className='image2' src={Menu.image} alt="" />{Menu.text} </li>
            ))}
          </ul>
      </section>
      <article>
         <Article/>
      </article>
      <section className='Body_Sect2'>
          <ul className="Body_img2" >{JumiaForce.map((menu)=>(
            <li key={menu.id}><img className='image3'src={menu.image} alt="" />{menu.text} </li>
            
          ))};
          </ul>
          <img src="https://ng.jumia.is/cms/0-1-initiatives/jforce/2025/JFORCE-2.gif" alt="" />
      </section>
    </div>
    </article>
  )
}

export default Body
