
import './css/OurClient.css'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES, fetchClients } from "../redux/clientsSlice";
import Card2 from './include/Card.jsx/Card2';





function Client() {

  const dispatch = useDispatch();
  const { products = [], status } = useSelector((state) => state.clients); // Default products to an empty array

  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);

  if (status === STATUSES.LOADING) {
    return <div style={{position:"absolute", top:"50%", left:"50%"}}>Loading...</div>;
  }

  if (status === STATUSES.ERROR) {
    return <div>Error loading products</div>;
  }

let heading = "We are Trusted By"
let desc = "We cherish our valued clients, who inspire excellence and trust. Your support fuels our commitment to exceptional service and innovation."

  return (
    /* From Uiverse.io by eslam-hany */
    <div className="containerClient w-full mt-[15px] min-h-screen">
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="mt-[16px]">
          <div className="mb-3 flex items-center space-x-2">
          <Card2 heading ={heading} desc= {desc}></Card2>
          </div>
        </div>
      </div>

      {
        products.data && products.data.map((elem)=>{
        return (
          <>
            <div className="book">
              <img
                src="https://cdn.pixabay.com/photo/2023/07/20/05/32/grass-8138399_1280.jpg"
                alt=""
                className='w-full h-screen object-contain'
              />
              <div className="cover">
                <p>{elem.title}</p>
              </div>
            </div>
          </>
        );
      })
      
      }


    </div>
  );
}

export default Client