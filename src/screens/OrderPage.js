import React from 'react'
import Ellipse from '../assets/Ellipse 2.png';

const OrderPage = () => {
  return (
    <>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-white font-bold text-lg">Helpy Moto</h1>
            </div>
          
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-4">Your Orders</h2>


        <div className="flex space-x-4 mb-4">
          <button className="bg-on-time-color text-black py-2 px-8 w-192 h-53 rounded-lg rounded-15 shadow-lg relative">
            On-Time
            <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
             2
          </span>
            </button>
          <button className="bg-white text-black py-2 px-8 w-192 h-53 rounded-lg rounded-15 shadow-lg relative">
            Scheduled
          <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
             1
          </span>
            </button>
        </div>
         
        <p className="text-xl font-semibold mb-4">Ongoing services</p>

        <div className="flex flex-col flex-wrap gap-4">
          <div className="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4 w-full md:w-1/2">
            <div>
              <img className="h-16 w-16 rounded-full" src={Ellipse} alt="Service Provider" />
              <p className="text-gray-800 text-sm font-semibold mb-1">Provider Name</p>
              <p className="text-sm text-gray-500 mb-2">Workshop Name</p>
            </div>

            <div className='flex-grow'>
              <p className="text-gray-800 font-semibold">Date of Booking: 2023-07-01</p>
              <p className="text-gray-500">Ticket ID: <span className="bg-green-500 text-white rounded-lg rounded-25 py-1 px-2 ml-2">123456789</span></p>
              <p className="text-gray-500">Vehicle Details:</p>
              <div className="flex">
                <div className="mr-auto">
                  <p className="text-sm text-gray-500">Vehicle Number: ABC123</p>
                  <p className="text-sm text-gray-500">Model: XYZ</p>
                </div>
                  <p className="text-sm text-gray-500">Brand: BrandXYZ</p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <p className="text-gray-800 font-bold">Current Bill Amount: $50</p>
                <button className="bg-pay-now ml-auto text-white py-2 px-3 rounded">Pay Now</button>
              </div>
            </div>

          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4 w-full md:w-1/2 lg:w-1/2">
            <div>
              <img className="h-16 w-16 rounded-full" src={Ellipse} alt="Service Provider" />
              <p className="text-gray-800 text-sm font-semibold mb-1">Provider Name</p>
              <p className="text-sm text-gray-500 mb-2">Workshop Name</p>
            </div>

            <div className='flex-grow'>

              <p className="text-gray-800 font-semibold">Date of Booking: 2023-07-02</p>
              <p className="text-gray-500">Ticket ID: <span className="bg-green-500 text-white rounded-lg rounded-25 py-1 px-2 ml-2">123456789</span></p>
              <p className="text-gray-500">Vehicle Details:</p>
              <div className="flex">
                <div className="mr-auto">
                  <p className="text-sm text-gray-500">Vehicle Number: ABC123</p>
                  <p className="text-sm text-gray-500">Model: XYZ</p>
                </div>
                  <p className="text-sm text-gray-500">Brand: BrandXYZ</p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <p className="text-gray-800 font-bold">Current Bill Amount: $50</p>
                <button className="bg-pay-now ml-auto text-white py-2 px-3 rounded">Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default OrderPage