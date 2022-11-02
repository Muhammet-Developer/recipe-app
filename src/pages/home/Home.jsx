import axios from 'axios';
import React from 'react'
import RecipeCard from "./RecipeCard";
import styles from "./Style.module.css";
import { useState,useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Edamam from "../../assets/Edamam_Badge_Transparent.svg"

const Home = () => {
const [search, setSearch] = useState("");
const [data,setData]=useState([]);
const [selectedMeal, setSelectedMeal] = useState("Meal Type");

const api = ()=>{
  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;
  const url = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`
  axios(url).then((data1)=> setData(data1.data.hits)).catch((e)=>console.log(e));
}
useEffect(() => {
api();
}, [])

const handleSubmit = (e)=>{
  e.preventDefault();
  api();
  setSearch("");
  setSelectedMeal("")

}
  return (
    <>
    <Navbar/>
    <div className={styles.form2}>
    <div  className={styles.img}>
    <a href="https://www.edamam.com/" target="blank"><img src={Edamam} alt="edamam" /></a>
     </div>
      <form  onSubmit={handleSubmit}>
        <input className={styles.input}  type="text" name="food" value={search} 
        onChange={(e)=> setSearch(e.target.value)} />
        <button className={styles.button17}>Search</button>
        <select className={styles.select1}  id="times" onChange={(e) => setSelectedMeal(e.target.value)}
            value={selectedMeal}>
          <option >Meal Type</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
          <option value="Teatime">Teatime</option>
        </select>
      </form>
        </div>
        <RecipeCard data={data} setData={setData}/>
        </>
    )
}

export default Home
