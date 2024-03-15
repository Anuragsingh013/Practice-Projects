
import { BASE_URL } from '../TopBar/TopBar'
import './FoodCardContainer.css'
const FoodCardContainer = ({  filteredFood }) => {

  return (
    <div className='card-container'>

      { filteredFood?.map((food) => {
        return (
          <div className="card" key={food.name}>
            <div className="partOne">
              <img src={BASE_URL + food.image} alt="" style={{ height: "140px" }} />
            </div>
            <div className="partTwo">
            <h3>{food.name}</h3>
              <p>{food.text}</p>
              <button className='priceBtn'>${food.price}</button>
            </div>
          </div>
        )
      })}



    </div>
  )
}

export default FoodCardContainer