import React from 'react'; 
import './Activity.css'

//Imported Icons
import { BsArrowRightShort } from "react-icons/bs";

//Imported Imeges
import user from '../../../Assets/img11.png'

const Activity = () =>{
    return(
        <div className="activitySection">
            <div className="heading flex">
                <h1>Resent Activity</h1>
                <button className='btn flex'>
                    See All
                <BsArrowRightShort className='icon'/>
                </button>
            </div>

            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={user} alt="Costomer Image"/>
                    <div className="CostomerDeatails">
                        <span className="name">Ola Martha</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago 
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={user} alt="Costomer Image"/>
                    <div className="CostomerDeatails">
                        <span className="name">Ola Martha</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago 
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={user} alt="Costomer Image"/>
                    <div className="CostomerDeatails">
                        <span className="name">Ola Martha</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago 
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={user} alt="Costomer Image"/>
                    <div className="CostomerDeatails">
                        <span className="name">Ola Martha</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago 
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={user} alt="Costomer Image"/>
                    <div className="CostomerDeatails">
                        <span className="name">Ola Martha</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity;