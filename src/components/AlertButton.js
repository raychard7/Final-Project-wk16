import Button from 'react-bootstrap/Button';

import { Alert } from 'react-bootstrap';

function AlertButton() {

    const alertOnClick = () => {
        console.log('A wild Pikachu Appeared!!')
    }
  return (
    <>
      <Button onClick={alertOnClick} variant="danger">What was hidden in the console!?</Button>{' '}
    </>
  );
}

export default AlertButton;