
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../boostrap/css/bootstrap.min.css';
import Header from './Header';


export default function Details() {
  const [isShown, setIsShown] = useState(false);
  return (

        <div >

            <h6 className="fw-bold">DETAILS</h6>
           
           
            <p className=" ps-1 pe-4 lorem">
                This is the zinger website Ui and has 4 sub sections on it,
                 working on it with 4 others

            </p>
            <div className="d-flex justify-content-between time-track">
                <div>
                    <span>

                              
                              <img src={require("../Images/sand-clock 1.svg").default} rel=""  alt =""/>
                    </span>
                    MON 10-2-23

                </div>
                <div className=" pe-5 me-3">
                    <span>
                        <img src={require("../Images/sand-clock 1.svg").default} rel=""  alt ="" />
                    </span>
                    MON 20-2-23
                </div>
            </div>

    
    </div>
  )
}
