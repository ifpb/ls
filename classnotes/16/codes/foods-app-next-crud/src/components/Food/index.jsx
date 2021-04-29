import { Card, Col } from 'react-bootstrap';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';
import Image from 'next/image';

import { useFood } from '../../contexts/FoodContext';

import styles from './style.module.css';

function Food({ food }) {
  const { handleLoadUpdateFoodForm, handleLoadDeleteFoodModal } = useFood();

  return (
    <Col sm={6} lg={4} xl={3} className="mb-3">
      <Card>
        <Card.Header className="text-center font-weight-bold">
          <span>{food.name}</span>
          <span className={`${styles.foodActions} float-right`}>
            <FaTrashAlt onClick={() => handleLoadDeleteFoodModal(food)} />{' '}
            <FaPencilAlt onClick={() => handleLoadUpdateFoodForm(food)} />
          </span>
        </Card.Header>
        <Card.Body className="p-0">
          <Image
            src={'/' + food.image}
            alt={food.name}
            width={230}
            height={230}
            layout="responsive"
          />
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Food;
