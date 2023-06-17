import React from 'react';
import servicesData from '../data/Data';


const ServiceModal = ({ serviceID, setService }) => {
  return (
    <div className=' fixed top-0 right-0 left-0 z-[400] w-full  p-4 font-bold text-center flex justify-center items-center' style={{height:"100svh"}} >
        <div onClick={() => setService({show:false, id:null})} className='fixed top-0 right-0 left-0 flex w-full h-full bg-black/30'>

</div>
        <div class="relative w-full md:w-1/2 lg:w-1/2 h-full flex justify-center  ">
        
        <div class="relative  rounded-lg shadow bg-white w-full h-full flex flex-col justify-between">
         
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold ">
                {servicesData[serviceID-1].name}
                </h3>
                <button type="button" onClick={() => setService({show:false, id: null})} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only" >Close modal</span>
                </button>
            </div>
       
            <div class="p-6 space-y-6 overflow-y-auto flex h-full w-full flex-col">
                <div className=' flex flex-col lg:flex-row lg:items-center'>

                <img src={servicesData[serviceID-1].image} alt="" className='w-[200px] object-contain' />
                <div className='flex w-full flex-wrap gap-2  '>
              
                    {servicesData[serviceID-1].tags.map((tag, index) => (
                        <div key={index} className='px-3 py-1 text-white text-start rounded-md bg-[#18f98f]/80 font-semibold h-fit'>
                            {tag}
                        </div>
                    ))} 
                </div>
                </div>

                <div className='flex justify-center w-full flex-col items-start'>
                    <p>FAQ's</p>
                    <div className='space-y-2 '>
                    {servicesData[serviceID-1].faqs.map((faq, index) => (
                        <div>
                        <div key={index} className='px-3 py-1 text-black text-start rounded-md font-semibold'>
                            Q. {faq.question}
                        </div>
                        <div key={index} className='px-3 py-1 text-black text-start rounded-md font-normal'>
                        A. {faq.answer}
                    </div>
                    </div>
                    ))} 
                    </div>
                </div>
            </div>

   
            <div class="flex items-center justify-between p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600 h-fit bg-black left-0 w-full ">
                <div className="text-white  font-normal rounded-lg text-xl px-5  py-2.5 text-center  cursor-pointer">
                <span className='font-bold'>Price :</span> &#8377; {servicesData[serviceID-1].price}
                </div>
                <div className="text-white bg-[#18f98f]/80 hover:bg-[#18f98f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  cursor-pointer" onClick={() => setService({show:false, id: null})}>Add to Cart</div>
               
            </div>
        </div>
    </div>
    </div>
  );
};

export default ServiceModal;
