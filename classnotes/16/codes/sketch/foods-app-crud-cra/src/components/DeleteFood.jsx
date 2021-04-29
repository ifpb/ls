import api from '../services/api';
import $ from 'jquery';

const DeleteFood = ({ food, onDeleteFood }) => {
  const handleClick = async () => {
    await api.remove(food.id);

    onDeleteFood(food.id);

    $('#deleteFoodModal').modal('toggle');
  };

  return (
    <form id="formDeleteFood">
      <div
        className="modal fade"
        id="deleteFoodModal"
        tabIndex="-1"
        aria-labelledby="deleteFoodLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteFoodLabel">
                Excluir comida
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Deseja realmente excluir{' '}
              <span id="modal-name-food">{food.name}</span>?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Fechar
              </button>
              <button
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
                id="deleteFoodBtn"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DeleteFood;
