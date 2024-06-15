import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import DefaultSpinner from "./DefaultSpinner";
import { useTranslation } from "react-i18next";
import AppLangKeys from "../localization/AppLangKeys";

function SaveCancelModel(props: any) {
  const { t } = useTranslation();
  const { title, toggleHandler, isOpen, onSubmit, loading } = props;

  return (
    <Modal isOpen={isOpen} toggle={toggleHandler}>
      <ModalHeader toggle={toggleHandler}>{title}</ModalHeader>
      <ModalBody>{props.children}</ModalBody>
      <ModalFooter>
        {!loading && (
          <Button color="primary" onClick={() => onSubmit()}>
            {t(AppLangKeys.saveChanges)}
          </Button>
        )}

        {loading && <DefaultSpinner />}

        <Button color="secondary" onClick={toggleHandler}>
          {t(AppLangKeys.cancel)}
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default SaveCancelModel;
