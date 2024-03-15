import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './CardContainer.css';
import { useContext } from 'react';
import { DataContext } from './Contexts/DataContext';
const CardContainer = () => {
    const data=useContext(DataContext)
    return (
        <div className='cardContainer'>
            {data?.map((phone) => {
                return (
                    <div className='card' key={phone.id}>
                    <Link to={`/phoneDetail/${phone.id}`} style={{ textDecoration: 'none', color:"#000" }}  state={data}>
                        <img src={phone.thumbnail} alt="" style={{ width: "100%", height: "120px" }} />
                        <h2>{phone.title}</h2>
                        <h3>{phone.price}</h3>
                        <p>{phone.description}</p>
                    </Link>
                </div>
                
                )
            })}
        </div>
    )
}

export default CardContainer;
