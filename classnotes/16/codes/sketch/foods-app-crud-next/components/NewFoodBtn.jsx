import { Button } from 'react-bootstrap';

const NewFoodBtn = ({ onCreateFoodClick }) => {
  return (
    <Button
      variant="secondary"
      className="rounded-circle mr-4 font-weight-bold"
      onClick={onCreateFoodClick}
    >
      +
    </Button>
  );
};

export default NewFoodBtn;
