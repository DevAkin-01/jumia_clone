 import React, {useState} from "react"
 const Article = ()=>{
    const [data, setData ] = useState(0)
    const [slideImage, setImageSlide] = useState([
    "https://ng.jumia.is/cms/0-1-weekly-cps/0-2026/Awoof-of-the-month/0-3-March/712x384.jpg",
    "https://ng.jumia.is/cms/0-5-TechWeek/2026/Live-now/Artboard-1.gif",
    "https://ng.jumia.is/cms/0-5-TechWeek/2026/Brand-day/11-march-skyrun/712x384_1.png",
    "https://ng.jumia.is/cms/0-5-TechWeek/2026/CPR/explosion-day/Teasing/Artboard-1.jpg",
    "https://ng.jumia.is/cms/0-5-TechWeek/2026/Initiatives/Guessproduct-main/Live/Artboard-1-1.gif",
    ])
    const AddNumber = () => {
        setData(data + 1)
    }
    const SubNumber = ()=>{
        if (data > 0){
            setData(data - 1);
        }else{
            setData(slideImage.length -1 )
        }
    }
  console.log(data)
    return(
        <div className="btn2_cont ">
            <button className="btn2 left" onClick={AddNumber}>left</button>
            <img className="Aricle_img" src={slideImage[data % slideImage.length]} alt="" />
            <button className="btn2 right" onClick={SubNumber}>right</button>
        </div>
    )
      
    
 }

 export default Article