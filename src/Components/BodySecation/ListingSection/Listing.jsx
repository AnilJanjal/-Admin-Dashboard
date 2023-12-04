import React from 'react';
import './Listing.css'

//imported Icons
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

//imported Images 
import img from '../../../Assets/img3.png'
import img4 from '../../../Assets/img4.png'
import img5 from '../../../Assets/img5.png'
import img6 from '../../../Assets/img6.png'
import img11 from '../../../Assets/img11.png'

const Listing = () => {
    return (
        <div className='lisitingSection'>

            <div className="heading flex">
                <h1>My Listings</h1>
                <button className='btn flex'>
                    See All <BsArrowRightShort className="icon" />
                </button>
            </div>

            <div className="secContainer flex">
                <div className="singalItem">
                    <AiFillHeart className='icon' />
                    <img src={img} alt='Image Name' />
                    <h3>Annual Vince</h3>
                </div>

                <div className="singalItem">
                    <AiOutlineHeart className='icon' />
                    <img src={img4} alt='Image Name' />
                    <h3>Coffee Plant</h3>
                </div>

                <div className="singalItem">
                    <AiOutlineHeart className='icon' />
                    <img src={img5} alt='Image Name' />
                    <h3>Button Fren</h3>
                </div>

                <div className="singalItem">
                    <AiFillHeart className='icon' />
                    <img src={img6} alt='Image Name' />
                    <h3>Spider Plant</h3>
                </div>

            </div>

            <div className="sellers flex">
                <div className="topSellers">
                    <div className="heading flex">
                        <h3>Top Sellers</h3>
                        <button className='btn flex'>
                            See All <BsArrowRightShort className="icon" />
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={img11} alt='User Name' />
                            <img src={img11} alt='User Name' />
                            <img src={img11} alt='User Name' />
                            <img src={img11} alt='User Name' />
                        </div>

                        <div className="cardText">
                            <span>14.556 Plant sold <br />
                                <small>
                                    21 Sellers <span className="date">7 days</span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>


                <div className="featuredSellers">
                    <div className="heading flex">
                        <h3>Featured Sellers</h3>
                        <button className='btn flex'>
                            See All <BsArrowRightShort className="icon" />
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={img11} alt='User Name' />
                            <img src={img11} alt='User Name' />
                            <img src={img11} alt='User Name' />
                            <img src={img11} alt='User Name' />
                        </div>

                        <div className="cardText">
                            <span>36.556 Plant sold <br />
                                <small>
                                    27 Sellers <span className="date">31 days</span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Listing;