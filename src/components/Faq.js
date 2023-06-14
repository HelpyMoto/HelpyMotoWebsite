import React,{useState} from 'react'
import faq from '../data/Faq'

export default function Faq() {

    const[open,setOpen]=useState('');
    const[isOpened,setIsOpened]=useState(false);

    const openHandler=(index)=>{
        if(open==index){
            setOpen('')
            setIsOpened(!isOpened)
        }
        setOpen(index);
        console.log(open)
        
    }
  return (
    <div className='flex flex-col mb-16 flex-wrap px-4 '>
      <h1 className='text-center font-bold self-center text-4xl mt-10 mb-10'> Frequently Asked Questions</h1>
      <div className='rounded-md border-grey border-2 p-4 ml-4 mr-4'>
      {faq.map((item,index)=>{
        return(
            <>
             <div key={index} className='bg-white flex w-auto h-20  mr-4 ml-4 pl-5 rounded-md border-grey  border-b-2 font-semibold items-center content-center justify-items-center hover:bg-gray-100 cursor-pointer' onClick={()=>openHandler(index)}>
           
            {item.title}
              </div>
              <div className='flex bg-gray-100/40 rounded-br-lg rounded-bl-lg w-auto h-auto mb-4 py-4 pl-4 pr-4 mr-4 ml-4 shadow-sm text-justify' style={{display: open===index && isOpened===true? 'block' : 'none'}}>
              {item.description}
              </div>
            </>
           
        )
 
    })}
      </div>
    
  


    </div>
  )
}
