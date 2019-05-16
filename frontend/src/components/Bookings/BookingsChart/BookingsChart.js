import React from 'react'


const BOOKINGS_BUCKETS = {
    'Cheap': 100,
    'Normal': 200,
    'Expensive': 10000
};

export default function BookingsChart(props) {

  let output = {};
  for(const bucket in BOOKINGS_BUCKETS) {
     const filteredBookings = props.bookings.reduce((prev, current ) => {
       if(current.price < BOOKINGS_BUCKETS[bucket]) {
        return prev + 1;
       }
       else{
         return prev;
       }
      
      }, 0);
      output[bucket] = filteredBookingsCount
  }
  return (
    <div>
      chart
    </div>
  )
}
