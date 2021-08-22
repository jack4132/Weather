import React,{useState,useRef} from 'react'
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import"./style/Header.component.css"

const Header=()=> {
    const [menu,setMenu] = useState("weather")
    const [open,setOpen] = useState(false)
    const ref = useRef("")
    return (
        <div>
            <div className="header-template header-container" onClick={()=>setOpen(!open)}>
                    <img src="imgs/hamburger.svg" width="50" height="50"/>
            </div>
            <div className={`menu-dropdown bg-color-grey ${open && "dropped"}`}>
                <div className="img-div">
                    {/* <img src="imgs/main.png" width="300" height="200"/> */}
                </div>
                <div>
                    <NavLink to='/weather' style={{textDecoration: 'none' }}>
                        <div className={`header-menu ${menu=='weather' && "selected"}`} onClick={()=>setMenu('weather')} ref={ref}>
                            <p className="default-text">Weather</p>
                        </div>
                    </NavLink>
                    <NavLink to='/country' style={{textDecoration: 'none' }}>
                        <div className={`header-menu ${menu=='country' && "selected"}`} onClick={()=>setMenu('country')}>
                            <p className="default-text">Country</p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header