import React,{useState,useContext,useEffect} from "react";
import axios from 'axios'

const AppContext = React.createContext();



const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a'
const randomMealsUrl='https://www.themealdb.com/api/json/v1/1/random.php'




const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([])
  const [searchTerm,setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [showModal,setShowModal] = useState(false)
  const [selectedMeal,setSelectedMeal] = useState(null)
  const [favorites,setFavorites] = useState([])


  const fetchMeals = async (url) => {

     setLoading(true)
    
    try {
      const { data } = await axios.get(url)
      if (data.meals) {
        setMeals(data.meals)
      }
      else {
        setMeals([])
      }
    }
    catch (e) {

      console.log(e.response)
    }
     setLoading(false)
    
  }


  const selectMeal = (idMeal)=>{
    let meal;
    meal= meals.find((meal)=>meal.idMeal == idMeal)
    setSelectedMeal(meal)
    setShowModal(true)

    
  }


  const closeModal = ()=>{

    setShowModal(false)
    
  }


  const addToFavorites = (idMeal)=>{
   
    const alreadyFavorite = favorites.find((meal)=> meal.idMeal === idMeal)
    if(alreadyFavorite) return
    const meal = meals.find((meal)=> meal.idMeal === idMeal)
    const updatedFavorites =[...favorites,meal]
    setFavorites(updatedFavorites)
    
  }

  const removeFromFavorites = (idMeal)=>{
    
    const updatedFavorites = favorites.filter((meal) => meal.idMeal !== idMeal);
    setFavorites(updatedFavorites)
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites))

    
  }

  useEffect(() => {
    fetchMeals(`${allMealsUrl}${searchTerm}`)
  }, [searchTerm])


  return (
    <AppContext.Provider
      value={{loading,meals,setSearchTerm,showModal,selectedMeal,selectMeal,closeModal,addToFavorites,removeFromFavorites,favorites}}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
