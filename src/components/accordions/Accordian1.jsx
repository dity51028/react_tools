
import React,{useState} from 'react'


const Accordian1 = ({data}) => {
    const [selected,setSelected] = useState(null)

    const toggle=(i)=>{
    if(selected === i){
      return setSelected(null)
    }
    setSelected(i)
  }
  
    return (
      <>
      <div className="wrapper flex items-center h-screen justify-center">
  
       <div className="accordian w-3/4">
  
        {
          data.map((item,index)=>(
            <div className="accordian-items bg-orange-300 p-4 m-3 ">
              <div className="title m-2 text-4xl text-amber-800 flex justify-between" onClick={()=>toggle(index)}>
              <h1>{item.content}</h1>
              <span className="cursor-pointer">{selected===index ? "-":"+"}</span>
              </div>
              <div className={`content text-red-800 ${selected ? 'max-h-[999px]' : 'max-h-0'} overflow-hidden`}>{item.answer}</div>
            </div>
          ))
        }
  
       </div>
  
      </div>
      </>
    )
}

export default Accordian1