import React from 'react';
import { useSelector } from 'react-redux';
import { withFirestore, useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import * as a from './../actions';


function RestaurantList() {
  useFirestoreConnect([
    { collection: 'restaurants' }
  ]);

  const restaurants = useSelector(state => state.firestore.ordered.restaurants);
  console.log(restaurants)

  if (isLoaded(restaurants)) {
    const renderList = restaurants.map((restaurant, index) => {
      const { image, name, rating, zip, url } = restaurant;
      return (
        <div className="ui grid container" key={index}>
          <div className="four wide column">
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img src={image} alt={`food from ${name}`} />
                </div >
                <div className="content">
                  <div className="header">{name}</div>
                  <div className="meta">{rating}</div>
                  <div className="meta">{url}</div>
                  <div className="meta">{zip}</div>
                </div>
              </div>
            </div>
          </div >
        </div>
      )
    })
    return (
      <React.Fragment>
        <>{renderList}</>
        {/* <button onClick={clickButton} type="submit">Yes</button> */}
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }


}

export default withFirestore(RestaurantList)