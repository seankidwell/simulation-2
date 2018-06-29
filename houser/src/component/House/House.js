import React from 'react';

export default function House(props) {
  return (
    <div>
      Name: {props.houseInfo.name}<br/>
      Address: {props.houseInfo.address}<br/>
      City: {props.houseInfo.city}<br/>
      State: {props.houseInfo.state}<br/>
      Zipcode: {props.houseInfo.zip}<br/>
      Image: {props.houseInfo.image}<br/>
      Monthly Mortgage: {props.houseInfo.monthly_mortgage}<br/>
      Monthly Rent: {props.houseInfo.monthly_rent}<br/>
      <button onClick={() => props.removeHouse(props.id)}>Delete</button>
    </div>
  )
}