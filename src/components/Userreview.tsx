import React from 'react';

const UserReview: React.FC<{ testimonial: string; author: string }> = ({ testimonial, author }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg md:max-w-2xl p-4 mb-8 transition-transform duration-300 ease-in-out transform hover:scale-105">
      <blockquote className="text-lg font-medium text-gray-800 italic mb-4">{testimonial}</blockquote>
      <p className="text-sm font-semibold text-gray-600 flex items-center justify-between">~ {author} <img src="https://www.vectorlogo.zone/logos/google/google-tile.svg" alt="Google Icon" className="w-4 h-4" /></p>
    </div>
  );
};

const UserReviews: React.FC = () => {
  const reviews = [
    {
      testimonial: "Jobox job has given me a job which is meaningful and decent revenue generating. I love it. thanks keep up the good work. thank you for giving a new job again . I am satisfied.",
      author: "CHANDRA VIHARI GARG"
    },
    {
      testimonial: "My experience is very good and I found this jobox app very helpful people should try this app for searching job.",
      author: "SHIV KARAN SINGH"
    },
    {
      testimonial: "This is a very good platform for searching a best job . I got a best job in my whole life with jobox app . thanks jobox team",
      author: "ANJU THIMMAIAH"
    },
    // Add more reviews here
  ];

  return (
    <div className='md:h-fill-purple-100 no-scrollbar md:h-auto  md:w-auto h-screen w-full overflow-y-auto md:overflow-hidden bg-white  p-4'>
      <h1 className='w-full py-8 text-center font-Syne text-lg font-bold text-text-primary  md:text-3xl lg:text-[3.2rem] '>User Review</h1>
      <div className="flex justify-center items-center lg:px-10 mt-20 px-4">
        {reviews.slice(0, 3).map((review, index) => (
          <UserReview key={index} testimonial={review.testimonial} author={review.author} />
        ))}
      </div>
    </div>
  );
};

export default UserReviews;
