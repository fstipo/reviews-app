import { FaQuoteRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
const Review = ({ index, people, nextPerson, previousPerson }) => {
  const { name, job, image, text } = people.at(index);

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <div className="author">
        <h3>{name}</h3>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
      </div>
      <div className="btn-container">
        <button className="prev-btn" type="button" onClick={previousPerson}>
          <FaAngleLeft />
        </button>
        <button className="next-btn" type="button" onClick={nextPerson}>
          <FaAngleRight />
        </button>
      </div>
    </article>
  );
};
export default Review;
