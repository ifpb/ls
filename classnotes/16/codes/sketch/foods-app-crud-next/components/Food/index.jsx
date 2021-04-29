import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';
import { Card, Col } from 'react-bootstrap';

import styles from './Food.module.css';

const Food = ({ food, onUpdateFoodClick, onDeleteFoodClick }) => {
  return (
    <Col sm={6} lg={4} xl={3} className="mb-3">
      <Card>
        <Card.Header className="text-center font-weight-bold">
          <span>{food.name}</span>
          <span className={`${styles.food_actions} float-right`}>
            <FaTrashAlt onClick={() => onDeleteFoodClick(food)} />{' '}
            <FaPencilAlt onClick={() => onUpdateFoodClick(food)} />
          </span>
        </Card.Header>
        <Card.Body className="p-0">
          <img src={food.image} alt={food.name} className="w-100" />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Food;
