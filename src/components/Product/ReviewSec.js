import React from "react";

const ReviewSec = () => {
  const review = [
    {
      name: "Rohit Singh",
      add: "Lal Mahal, Pune",
      stars: "5",
      comment:
        "The product just received today. The item sold by Supercomnet says 10 day replacement. But after delivery the return option is withdrawn from details of order and says if any problem arises contact local Apple service centre. It is a clear fraud for the customers who buy such a high priced handset. Customer be careful about that. My set is running fine but it is not my question.Why an online store like Flipkart close the option of return without informing the customer?",
    },
    {
      name: "Ram Kumar",
      add: "Raj Nagar, Delhi",
      stars: "4",
      comment: "Phone is good and excellent but price is so high😭😭",
    },
  ];

  return (
    <div className="reviewBox">
      <h2>24 Reviews</h2>
      <p className="stars">
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9734;</span>
      </p>

      <div className="innerBox">
        {review.map(({ name, add, stars, comment }, i) => (
          <div className="review" key={i}>
            <div className="avatar">
              <div>{name[0]}</div>
            </div>

            <div className="cont">
              <p className="comment">{comment}</p>
              <div>
                <p className="comment">
                  {name} <span>{stars} &#9733;</span>
                </p>{" "}
                <span>{add}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <section>See More...</section>
    </div>
  );
};

export default ReviewSec;
