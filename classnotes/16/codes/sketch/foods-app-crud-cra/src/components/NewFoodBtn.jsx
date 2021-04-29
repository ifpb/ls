const NewFoodBtn = ({ onCreateFoodClick }) => {
  return (
    <button
      type="button"
      className="btn btn-secondary rounded-circle mr-4 font-weight-bold"
      id="newBtnFood"
      data-toggle="modal"
      data-target="#formFoodModal"
      onClick={onCreateFoodClick}
    >
      +
    </button>
  );
};

export default NewFoodBtn;
