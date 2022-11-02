import { useParams,useLocation } from "react-router-dom";
import "./style.css";
import Navbar from '../../components/navbar/Navbar';
const Details = () => {
  const {label} = useParams();

  const {state}=useLocation();

  return (
    // <div><h3>{state.recipe.label}</h3></div>
    <>
   <Navbar/>
      <div id="container">	
        <div className="product-details">
          <h3>{state.recipe.label}</h3>
          {state.recipe.ingredientLines.map((plc,index)=>{
            return(
              <ul key={index} className="information">
               <li>{plc}</li> 
             </ul>
            )
          })}
          
        </div>
        <div className="product-image">
          { <img src={state.recipe.image} alt="Omar Dsoky" />}
          <div className="info">
            <h3>Nutrients</h3>
            <ul>
              <li><strong>Calcium: </strong>{state.recipe.digest[5].total.toFixed()}</li>
              <li><strong>Carbs: </strong>{state.recipe.digest[1].total.toFixed()}</li>
              <li><strong>Cholesterol: </strong>{state.recipe.digest[3].total.toFixed()}</li>
              <li><strong>Energy: </strong>boş</li>
              <li><strong>Calories: </strong>{state.recipe.calories.toFixed()}</li>
              <li><strong>Fat: </strong>{state.recipe.digest[0].total.toFixed()}</li>
              <li><strong>Carbs: </strong>{state.recipe.digest[1].total.toFixed()}</li>
              <li><strong>Protein: </strong>{state.recipe.digest[2].total.toFixed()}</li>
            </ul>
          </div>
        </div>  
      </div>
          </>
  )
}

export default Details
