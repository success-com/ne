import { useState, useEffect } from 'react' 
import SecondHome from "./SecondHome"
import Messages from "./Messages"
import { Link, Navigate} from "react-router-dom";
import data from "./data"


function Home() {
  const [showWelcome, setShowWelcome] = useState(false)
  const [showEnter, setShowEnter] = useState(false)
  const [animeMessages, setAnimeMessages] = useState(false)
  
  
  const handleEnter = () => {
    setShowWelcome(false)
    setShowEnter(false)
    setAnimeMessages(true)
    
  }
const NavButtons = ({data}) => {
  const [index, setIndex] = useState(0)
  const [zoomIn, setZoomIn] = useState("")
  const [canGoHome, setCanGoHome] = useState(true)
  
  const handlePrev = () => {
    setIndex(prevIndex => (prevIndex - 1))
   if(index === 0) {
    setShowWelcome(true)
    setShowEnter(true)
   }
  }
  const handleNext = () => {
   if(index +1 == data.length) {
     return null
   }
    setIndex(prevIndex => (prevIndex + 1))
  }
  
  return (
    <div className={`${zoomIn} box`}>
      {data[index]?.messages &&
      (<div className="proverbs">
        <Messages messages={data[index].messages}/>
      </div>)
      }
      
      {data[index]?.pageContent &&
      (<div className="page-content">
        {data[index].pageContent}
      </div>)
      }
      
      <div className="next-prev">
      <button onClick={handlePrev}>{data[index].prev}</button>
      <button onClick={handleNext}>{data[index].next}</button>
      </div>
      
    </div>
    )
}
  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(true)
    }, 2000)
    setTimeout(() => {
      setShowEnter(true)
    }, 3000)
  }, [])
  return (
    <div className="home">
   {showWelcome ? 
   (<>
    <div className="welcome">
    <p  className={`${showWelcome ? "zoom-in" : ""} welcome-text`}>WELCOME INTO THE SUCCESS WORLD</p>
    </div>
   <div className="zoom-in-enter-btn enter-btn-container">
    <button onClick={handleEnter} className={`${showEnter ? "zoom-in" : "hide-it"} enter-btn`}>ENTER</button>
   </div>
   </>) : 
     (animeMessages && <NavButtons data={data} />)
   }
    </div>
    
  );
}

export default Home