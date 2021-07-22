import React from 'react';
import { useSelector } from 'react-redux';
import { withFirestore, useFirestoreConnect, isLoaded } from 'react-redux-firebase';

function RestaurantList() {

  const cardStyles = {
    padding: '10px',
    textAlign: 'center',
    margin: 'auto',
    width: '50vw',
    marginTop: '10vw',
    boxShadow: '5px 5px 5px #AF9E0C'
  }

  useFirestoreConnect([
    { collection: 'restaurants' }
  ]);

  const restaurants = useSelector(state => state.firestore.ordered.restaurants);
  console.log(restaurants)

  if (isLoaded(restaurants)) {
    const renderList = restaurants.map((restaurant, index) => {
      const { image, name, rating, zip, url } = restaurant;
      return (
        <div className="ui link cards" key={index}>
          <div style={cardStyles} className="card" >
            <div className="image">
              <img src={image} alt={`food from ${name}`} />
            </div >
            <div className="content">
              <div className="header">
                <a href={url} target="blank" rel="noopener noreferrer">{name}</a>
              </div>
              <div className="meta">
                <span className="rating">Rating: {rating}/5</span>
              </div>
              <div className="meta">{zip}</div>
            </div>
          </div>
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