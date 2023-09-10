import React, { useState } from "react";
import {
  AppBar,
 
  Tab,
  Tabs,
  Toolbar,
  
  useMediaQuery,
  useTheme,
} from "@mui/material";

import {useNavigate} from 'react-router-dom'
const Header = () => {
  const [value, setValue] = useState(0);
  const navigate=useNavigate()
  const theme = useTheme();
  
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
 console.log(isMatch)
function handleClick(tab)
{
   
    navigate(`/${tab}`)
    
}
  return (
    <React.Fragment >
      <AppBar sx={{ background: "transparent" }} >
        <Toolbar>
        <img src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="sample" className="circular-image" width={60} height={60}/>
          <h1 style={{fontFamily:`Georgia, 'Times New Roman', Times, serif`}}>&nbsp;&nbsp;Flavour Feast</h1>
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
              textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
               
              >
                 <Tab label="Home" onClick={()=>handleClick('')}/>
                <Tab label="Explore" onClick={()=> handleClick("explore")}/>
                <Tab label="Search Meal" onClick={()=> handleClick("search")} />
               
                
              </Tabs>
              
            </>
         
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;