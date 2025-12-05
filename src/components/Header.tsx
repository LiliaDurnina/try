
import logo from '/vite.svg'

export default  function Header() {
const now = new Date
  
  return (
    <header>
        <img src = {logo} alt="" />
        
        <span>span: {now.toLocaleTimeString()}</span>
    </header>


    
  )
}


