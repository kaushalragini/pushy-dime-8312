import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function ProductModal({ children, title = "Modal", size, btnText = "More.." }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} variant="outline" colorScheme="purple">
        {btnText}
      </Button>
      <Modal size={size} onClose={onClose} isOpen={isOpen}>
        <ModalOverlay bg="rgba(226, 177, 226, 0.477)  " />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalBody>{children}</ModalBody>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProductModal;
