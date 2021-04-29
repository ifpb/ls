import { Formik } from 'formik';
import { Button, Form, Modal } from 'react-bootstrap';

const FoodForm = ({
  food,
  isCreateFood,
  onCreateFood,
  onUpdateFood,
  showFoodForm,
  setShowFoodForm,
}) => {
  const onSubmit = async (foodForm) => {
    if (isCreateFood) {
      onCreateFood(foodForm);
    } else {
      onUpdateFood({ ...food, ...foodForm });
    }
  };

  const handleClose = () => {
    setShowFoodForm(false);
  };

  return (
    <Modal show={showFoodForm} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title as="h5">
          {isCreateFood ? 'Nova Comida' : 'Atualizar Comida'}
        </Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={food}
        enableReinitialize={true}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, handleBlur, values }) => (
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              <Form.Group controlId="formFoodName">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  onBlur={handleBlur}
                  defaultValue={values.name}
                  name="name"
                />
              </Form.Group>
              <Form.Group controlId="formFoodImage">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  onBlur={handleBlur}
                  defaultValue={values.image}
                  name="image"
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Fechar
              </Button>
              <Button
                variant="primary"
                as="input"
                type="submit"
                value="Confirmar"
              />
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default FoodForm;
