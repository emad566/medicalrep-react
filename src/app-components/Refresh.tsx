import {  Modal, ModalBody } from "reactstrap";

function Refresh(props: any) {
  const { toggleHandler, isOpen } = props;

  return (
    <Modal isOpen={isOpen} toggle={toggleHandler}>
      <ModalBody>{props.children}</ModalBody>
    </Modal>
  );
}

export default Refresh;
