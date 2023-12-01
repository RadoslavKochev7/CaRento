export const Review = (props) => {
    console.log(props)
  return (
    <div >
      <div style={{ width: "100%", padding: 20}}>
        <div className="testimonial-2">
          <blockquote className="mb-4">
            <p>{props.text}</p>
          </blockquote>
          <div className="d-flex v-card align-items-center">
            <div className="author-name">
              <span className="d-block">{props.owner.username}</span>
              <span>{props.owner.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
