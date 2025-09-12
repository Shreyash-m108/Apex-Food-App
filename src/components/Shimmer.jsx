const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-img"></div>
            <h3 className="shimmer-line"></h3>
            <h4 className="shimmer-line"></h4>
            <h4 className="shimmer-line"></h4>
            <h5 className="shimmer-line"></h5>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
