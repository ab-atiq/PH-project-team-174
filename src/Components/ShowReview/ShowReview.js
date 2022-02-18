import React, { useEffect, useState } from "react";
import ReviewService from "./ReviewService";


const ShowReview = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://safe-cliffs-35352.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);

  // console.log(services);
  return (
    <div className="mx-3">
      <h1 className="text-center my-5 fw-bolder fs-2">Customer Reviews & Happiness</h1>


      <div className="row  mb-5 ">
        {services.map((service) => (
          <ReviewService key={service._id} service={service}></ReviewService>
        ))}
      </div>
    </div>
  );
};
export default ShowReview;