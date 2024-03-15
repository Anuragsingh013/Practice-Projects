import React, { useState, useEffect } from 'react';
import './TopBar.css';
import logo from './logo.svg';
import FoodCardContainer from '../foodCardContainer/FoodCardContainer';

export const BASE_URL = 'http://localhost:9000';

const TopBar = () => {
    
    // State variables
    const [data, setData] = useState(null);
    const [loadingState, setLoadingState] = useState("website is LOading....")
    const [filteredFood, setFilteredFood] = useState(null);

    // Fetch data from API
    const fetchFoodData = async () => {
        try {
            const response = await fetch(BASE_URL);
            const jsonData = await response.json();
            setData(jsonData);
            setFilteredFood(jsonData); // Initially set filtered data to all data
        } catch (error) {
            console.log(error)
        }
    }

    // Fetch data on component mount
    useEffect(() => {
        fetchFoodData();
    }, []);

    // Search handler function
    function searchHandler(e) {
        let inputValue = e.target.value.toLowerCase();

        if (inputValue === '') {
            setFilteredFood(data); // If search input is empty, show all data
        } else {
            let filterData = data?.filter(food => food.name.toLowerCase().includes(inputValue));
            setFilteredFood(filterData); // Update filtered data based on search input
        }
    }

    return (
        <>
            <div className='topbar'>
                <div className="container">
                    <img src={logo} alt="" />
                    {/* Search input field */}
                    <input type="text" placeholder='Search here' onChange={searchHandler} />
                </div>
                
                {/* Buttons for filtering */}
                <div className="button-box">
                    <button onClick={() => setFilteredFood(data?.filter(food => food.type.toLowerCase().includes('')))}>All</button>
                    <button onClick={() => setFilteredFood(data?.filter(food => food.type.toLowerCase().includes("breakfast")))}>Breakfast</button>
                    <button onClick={() => setFilteredFood(data?.filter(food => food.type.toLowerCase().includes("lunch")))}>Lunch</button>
                    <button onClick={() => setFilteredFood(data?.filter(food => food.type.toLowerCase().includes("dinner")))}>Dinner</button>
                </div>
            </div>
            {/* FoodCardContainer component */}
            <FoodCardContainer filteredFood={filteredFood} />
        </>
    );
};

export default TopBar;
