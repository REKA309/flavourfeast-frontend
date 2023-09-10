import React,{useState} from "react";
import axios from "axios";
import { Button } from "@mui/material";
import CustomSnackbar from "../uiComponents/snackbar";
export default function ExploreDish()
{
    const [top,setTop]=useState([])
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('info');
    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
       
      };
    function handleTopPick()
    {
     axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`)
       .then((res) => {
        try {
            
         const fetchedArray=res.data.meals;
         setTop(fetchedArray);
        } catch (error) {
            console.log(error)
            setSnackbarMessage('An error occurred while making the request!!!!');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
        }
    })
       .catch(error => {
         // Handle errors
         console.error('Error:', error);
         alert('An error occurred while making the request.');
       });
   };
    
    
    return(
        <div className="explore-container">
            <div className="explore-btn">
            <Button variant="contained" color="warning" onClick={handleTopPick}>TOP PICKS</Button>
            </div>
            <div className="explore-content row">
                {top.map((dish,index)=>(
                    <div key={index} className="card col-lg-3 col-md-6 col-sm-12">
                        <img src={dish.strMealThumb} alt={dish.strCategory} width={264} height={300}/>
                        <div className="card-body">
                            <h3 style={{fontFamily:`Georgia, 'Times New Roman', Times, serif`}}>{dish.strMeal}</h3>
                            <h4 style={{fontFamily:`Georgia, 'Times New Roman', Times, serif`}}>{dish.strArea} Cuisine</h4>
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
