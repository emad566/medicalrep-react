import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Cancel, SaveChanges } from "../constant";
import DefaultSpinner from "./DefaultSpinner";
import { useTranslation } from "react-i18next";
import AppLangKeys from "../localization/AppLangKeys";

function Refresh(props) {
  const { t } = useTranslation();
  const { toggleHandler, isOpen } = props;

  return (
    <Modal isOpen={isOpen} toggle={toggleHandler}>
      <ModalBody>{props.children}</ModalBody>
    </Modal>
  );
}

export default Refresh;
