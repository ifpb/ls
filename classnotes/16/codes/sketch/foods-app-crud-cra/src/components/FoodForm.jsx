import { useFormik } from 'formik';
import api from '../services/api';
import $ from 'jquery';

const FoodForm = ({ isCreateFood, food, onCreateFood, onUpdateFood }) => {
  const formik = useFormik({
    initialValues: food,
    enableReinitialize: true,
    onSubmit: async (food) => {
      if (isCreateFood) {
        const newFood = await api.create(food);

        onCreateFood(newFood);
      } else {
        const newFood = await api.update(food.id, food);

        onUpdateFood(newFood);
      }

      $('#formFoodModal').modal('toggle');
    },
  });

  return (
    <form id="formFood" onSubmit={formik.handleSubmit}>
      <div
        className="modal fade"
        id="formFoodModal"
        tabIndex="-1"
        aria-labelledby="formFoodLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="formFoodLabel">
                {isCreateFood ? 'Nova Comida' : 'Atualizar Comida'}
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
              <div className="form-group">
                <label htmlFor="food-name">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="food-name"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="food-image">Image</label>
                <input
                  type="text"
                  className="form-control"
                  id="food-image"
                  name="image"
                  onChange={formik.handleChange}
                  value={formik.values.image}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Fechar
              </button>
              <button type="submit" className="btn btn-primary">
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FoodForm;
