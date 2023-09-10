import React, { useState } from "react";
import { TextField,Button } from "@mui/material";
import axios from "axios";
import CustomSnackbar from "../uiComponents/snackbar";
export default function SearchMeal()
{
   const [dishes,setDish]=useState([])
    const[meal,setMeal]=useState('')
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('info');
    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
       
      };
    function handleSearch() {
      axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
          .then((res) => {
            try {
              // Assuming that res.data.meals is the array you want to map
                const fetchedArray = res.data.meals || [];
              if(fetchedArray.length===0)
              {
                setSnackbarMessage('Oops Results not found!');
                setSnackbarSeverity('warning');
                setOpenSnackbar(true);
              }
              setDish(fetchedArray)
              console.log(fetchedArray)
            } catch (error) {
              console.log(error);
            }
          })
          .catch((error) => {
            // Handle errors
            console.error('Error:', error);
            setSnackbarMessage('An error occurred while making the request!!!!');
                setSnackbarSeverity('error');
                setOpenSnackbar(true);
          });
      }
      
    return(
        <div>
            <h1 style={{textAlign:'center',fontFamily:`Georgia, 'Times New Roman', Times, serif`}}>Search Based on Main Ingredient</h1>
            <div className="search-bar">
            <TextField id="outlined-basic" label="Find Recipes" color="warning" variant="outlined" onChange={(e)=>{setMeal(e.target.value)}} />
            <Button  variant="contained" color="warning" onClick={handleSearch} >SEARCH MEAL</Button>
            </div>
            <div className="explore-content row">
                {dishes.map((dish,index)=>(
                    <div key={index} className="card col-lg-3 col-md-6 col-sm-12">
                        <img src={dish.strMealThumb} alt={dish.strCategory} width={264} height={300}/>
                        <div className="card-body">
                            <h3 style={{fontFamily:`Georgia, 'Times New Roman', Times, serif`}}>{dish.strMeal}</h3>
                            <h4 style={{fontFamily:`Georgia, 'Times New Roman', Times, serif`}}>{dish.strArea} Cuisine</h4>
                            <h6 style={{fontFamily:`Georgia, 'Times New Roman', Times, serif`}}>{dish.strInstructions}</h6>
                            <div className="demobtn">
                              <a href={dish.strYoutube} target="_blank" rel="noopener noreferrer">
                                <Button variant="contained" color="error">WATCH YOUTUBE</Button>
                              </a>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <CustomSnackbar
                            open={openSnackbar}
                            message={snackbarMessage}
                            severity={snackbarSeverity}
                            onClose={handleSnackbarClose}   
                           
                         />
        </div>
    )
}