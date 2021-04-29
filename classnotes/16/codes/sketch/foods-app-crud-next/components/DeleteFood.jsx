import { Button, Modal } from 'react-bootstrap';

const DeleteFood = ({
  food,
  onDeleteFood,
  setShowDeleteFood,
  showDeleteFood,
}) => {
  const handleDeleteFood = async () => {
    onDeleteFood(food);

    setShowDeleteFood(false);
  };

  const handleClose = () => {
    setShowDeleteFood(false);
  };

  return (
    <Modal show={showDeleteFood} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title as="h5">Excluir comida</Modal.Title>
      </Modal.Header>
      <Modal.Body>Deseja realmente excluir {food.name}?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
        <Button variant="primary" onClick={handleDeleteFood}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteFood;
