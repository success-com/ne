import { useState, useEffect, Link } from 'react' 

function SecondHome() {
  const [showWelcome, setShowWelcome] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(true)
    }, 2000)
  }, [])
  return (
    <div className="SecondHome">
    <div className="welcome">
    <p  className={`${showWelcome ? "zoom-in" : ""} welcome-text`}>WELCOME INTO THE SUCCESS WORLD</p>
    </div>
    </div>
  );
}

export default SecondHome