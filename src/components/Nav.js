import logo from "../logo.jpg"

const Nav = () => {
  return (
    <nav className="nav">
      <img className="logo" src={logo}/>
      <a href="mailto:successcomniger@gmail.com" className="join-us">Join Us Now</a>
    </nav>
    )
}

export default Nav