
import {useGlobalContext} from '../context'


const Meals = ()=>{

  const context = useGlobalContext()
  console.log(context)

  return <h5>Meals</h5>
         
}
export default Meals