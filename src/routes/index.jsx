import { accordian1Data } from "../components/accordions"
import Accordian1 from "../components/accordions/Accordian1"

export const router = [{
  path : '/',
  children : [{
    path : "/Accordian1",
    element : <Accordian1 data={accordian1Data}/>
  },
 /* {
    path : "/Accordian2",
    element : <Accordian2/>
  },
  {
    path : "/Accordian3",
    element : <Accordian3/>
  }*/

] 

}]