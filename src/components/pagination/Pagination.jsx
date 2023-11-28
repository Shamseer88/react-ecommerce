import "./Pagination.css";

export default function Pagination({
  pageNumber,
  handlePreviousBtn,
  handleNextBtn,
}) {
  return (
    <div className="pagination-div">
      <div className="pagination-buttons">
        <button onClick={handlePreviousBtn}>Previous</button>
        <p>{pageNumber}</p>
        <button onClick={handleNextBtn}>Next</button>
      </div>
    </div>
  );
}
