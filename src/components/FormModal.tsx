import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  ModalFooter,
  Card,
} from "@chakra-ui/react";
import { FormModalProps } from "../utils/types";

function FormModal({ children, isOpen, onClose }: FormModalProps) {
  return (
    <Card bg="blackAlpha.300">
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <Card backgroundColor="aqua">
          <ModalOverlay />
          <ModalContent bg="white" borderRadius="md">
            <ModalCloseButton />
            <ModalBody bg="black">{children}</ModalBody>
            <ModalFooter bg="black">
              * You need to fill all the input fields
            </ModalFooter>
          </ModalContent>
        </Card>
      </Modal>
    </Card>
  );
}

export default FormModal;
