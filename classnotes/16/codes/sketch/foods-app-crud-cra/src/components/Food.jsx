import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';

const Food = ({ food, onUpdateFoodClick, onDeleteFoodClick }) => {
  return (
    <div
      className="card-food col-sm-6 col-lg-4 col-xl-3 mb-3"
      id="food-{food.id}"
    >
      <div className="card">
        <div className="card-header text-center font-weight-bold">
          <span className="food-name">{food.name}</span>
          <span className="food-actions float-right">
            <FaTrashAlt
              onClick={() => onDeleteFoodClick(food)}
              data-toggle="modal"
              data-target="#deleteFoodModal"
            />
            <FaPencilAlt
              className="ml-1"
              onClick={() => onUpdateFoodClick(food)}
              data-toggle="modal"
              data-target="#formFoodModal"
            />
          </span>
        </div>
        <div className="card-body p-0">
          <img src={food.image} alt={food.name} className="food-image w-100" />
        </div>
      </div>
    </div>
  );
};

export default Food;
