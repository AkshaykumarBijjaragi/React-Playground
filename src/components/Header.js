import './Header.css';  
// Importing images as directory is not working properly
import burgerImage from '../assets/burger.png'; 
import searchImage from '../assets/search.png'; 
import profileImage from '../assets/profile.png'; 
const Header = () =>{
    return(
        <div className="header">
        <div className="logo-container">
            <img src={burgerImage} alt="Burger" className="logo" />  
        </div>
        <div className="search-bar-container">
            <input type="text" />
            <button><img src={searchImage} alt="Search Icon" className="search-icon" /></button>
            
        </div>
        <div className="user-icon-container">
            <img src={profileImage} alt="User Icon" className="user-icon"/>
        </div>
        </div>
        )
}

export default Header