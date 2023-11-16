"use client"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaBagShopping } from "react-icons/fa6";
import { FaExpandArrowsAlt } from "react-icons/fa";

function card(props){
    return(
        <>
    
        

        {/* <div className='product-cards ' > */}
           <div className='product-card' >
             <div className='product-header'>
                <div className='card-icon-container'>
                <button className='card-icon1'><FaExpandArrowsAlt className='bag-icon card-icons'/></button>
                <button className='card-icon2'><FaBagShopping className='bag-icon card-icons'/></button>
                </div>

                {/* <p>icon</p> */}

                <div className='product-image' >
                    <div className='background-design' style={{background: props.color}}>
                        <div className='circle '>
                        </div>
                        
                    </div>
                    <img className='product-images' src={props.image} />

                    {/* <h1 style={{zIndex:'1'}} >image is here {props.image}</h1>  */}
                        
                </div>
                  <div className='product-name'>
                    <p className='product-name'>{props.category}</p>
                  </div>
                  <div class="product-price">{props.rating}</div>
             </div>
           </div>
           


           {/* <div className='product-card' >
             <div className='product-header'>
                <div className='card-icon-container'>
                <button className='card-icon1'><FaExpandArrowsAlt className='bag-icon card-icons'/></button>
                <button className='card-icon2'><FaBagShopping className='bag-icon card-icons'/></button>
                </div>


                <div className='product-image' >
                    <div className='background-design' style={{background: '#d5d5d4'}}>
                        <div className='circle '>
                        </div>
                        
                    </div>
                    <img className='product-images' src={props.image} />

                        
                </div>
                  <div className='product-name'>
                    <p className='product-name'>{props.category}</p>
                  </div>
                  <div class="product-price">{props.rating}</div>
             </div>
           </div> */}

           {/* <div className='product-card' >
             <div className='product-header'>
                <div className='card-icon-container'>
                <button className='card-icon1'><FaExpandArrowsAlt className='bag-icon card-icons'/></button>
                <button className='card-icon2'><FaBagShopping className='bag-icon card-icons'/></button>
                </div>


                <div className='product-image' >
                    <div className='background-design' style={{background: '#1e1e1e'}}>
                        <div className='circle '>
                        </div>
                        
                    </div>
                    <img className='product-images' src={props.image} />

                </div>
                  <div className='product-name'>
                    <p className='product-name'>{props.category}</p>
                  </div>
                  <div class="product-price">{props.rating}</div>
             </div>
           </div> */}

           {/* <div className='product-card' >
             <div className='product-header'>
                <div className='card-icon-container'>
                <button className='card-icon1'><FaExpandArrowsAlt className='bag-icon card-icons'/></button>
                <button className='card-icon2'><FaBagShopping className='bag-icon card-icons'/></button>
                </div>

                <div className='product-image' >
                    <div className='background-design' style={{background: '#cb141a'}}>
                        <div className='circle '>
                        </div>
                        
                    </div>
                    <img className='product-images' src={props.image} />

                        
                </div>
                  <div className='product-name'>
                    <p className='product-name'>{props.category}</p>
                  </div>
                  <div class="product-price">{props.rating}</div>
             </div>
           </div> */}


        {/* </div> */}

        

        </>
    )
}

export default card;
