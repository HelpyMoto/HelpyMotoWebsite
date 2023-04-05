import React, { useState, useEffect } from 'react';
import '../styles/work.css';

const Work = ({ mealsTarget, customersTarget, menuTarget, starsTarget, step }) => {
  const [mealsDelivered, setMealsDelivered] = useState(0);
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [menuItems, setMenuItems] = useState(0);
  const [fiveStars, setFiveStars] = useState(0);

  useEffect(() => {
    const mealsCounter = setInterval(() => {
      setMealsDelivered(prevValue => {
        const newValue = prevValue + step;
        return newValue >= mealsTarget ? mealsTarget : newValue;
      });
    },1);

    const customersCounter = setInterval(() => {
      setHappyCustomers(prevValue => {
        const newValue = prevValue + step;
        return newValue >= customersTarget ? customersTarget : newValue;
      });
    }, 1);

    const menuCounter = setInterval(() => {
      setMenuItems(prevValue => {
        const newValue = prevValue + step;
        return newValue >= menuTarget ? menuTarget : newValue;
      });
    }, 10);

    const starsCounter = setInterval(() => {
      setFiveStars(prevValue => {
        const newValue = prevValue + step;
        return newValue >= starsTarget ? starsTarget : newValue;
      });
    }, 1000);

    return () => {
      clearInterval(mealsCounter);
      clearInterval(customersCounter);
      clearInterval(menuCounter);
      clearInterval(starsCounter);
    };
  }, [mealsTarget, customersTarget, menuTarget, starsTarget, step]);

  return (
    <div className="wrapper__main">
      <div className="container__meals">
      <i class="fas fa-car-alt" />
        <span className="num__meals" data-val={mealsTarget}>
          {mealsDelivered}
        </span>
        <span className="text__meals">Car serviced</span>
      </div>
      <div className="container__customers">
        <i className="fas fa-smile-beam" />
        <span className="num__customers" data-val={customersTarget}>
          {happyCustomers}
        </span>
        <span className="text__customers">Happy Customers</span>
      </div>
      <div className="container__menu">
      <i class="fas fa-map-marker-alt" />
        <span className="num__menu" data-val={menuTarget}>
          {menuItems}
        </span>
        <span className="text__menu">Touch Points India</span>
      </div>
      <div className="container__stars">
        <i className="fas fa-star" />
        <span className="num__stars" data-val={starsTarget}>
          {fiveStars}
        </span>
        <span className="text__stars">Average Rating</span>
      </div>
    </div>
  );
};

export default Work;
