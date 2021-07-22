import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withFirestore, useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import * as a from './../actions';

function RestaurantList() {

  const cardStyles = {
    padding: '10px',
    textAlign: 'center',
    margin: 'auto',
    width: '50vw',
    marginTop: '5vw',
    boxShadow: '5px 5px 5px #AF9E0C'
  }

  useFirestoreConnect([
    { collection: 'restaurants' }
  ]);

  const dispatch = useDispatch()
  const restaurants = useSelector(state => state.firestore.ordered.restaurants);
  const count = useSelector(state => state.counter.count);
  console.log(restaurants);
  console.log(count);

  const clickButton = () => {
    const newCount = count + 1
    dispatch(a.increaseCounter(newCount));
  }

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
        <>{renderList[count]}</>
        <div class="ui large buttons">
          <button onClick={clickButton} class="ui button"><i class="thumbs up outline icon"></i>Yes</button>
          <div class="or"></div>
          <button onClick={clickButton} class="ui button"><i class="thumbs down outline icon"></i>No</button>
        </div>
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