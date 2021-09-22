import { Button, Modal } from 'react-bootstrap';

import { useFood } from '../contexts/FoodContext';

function DeleteFoodModal() {
  const {
    isShowDeleteFoodModal,
    selectedFood,
    toggleDeleteFoodModal,
    handleDeleteFood,
  } = useFood();

  return (
    <Modal show={isShowDeleteFoodModal} onHide={toggleDeleteFoodModal}>
      <Modal.Header closeButton>
        <Modal.Title as="h5">Excluir comida</Modal.Title>
      </Modal.Header>
      <Modal.Body>Deseja realmente excluir {selectedFood.name}?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleDeleteFoodModal}>
          Fechar
        </Button>
        <Button
          variant="primary"
          onClick={() => handleDeleteFood(selectedFood)}
        >
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteFoodModal;
