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
    <Card backgroundColor="cyan.400">
      <Modal isOpen={isOpen} onClose={onClose} size="md" >
        <Card backgroundColor="cyan.400">
          <ModalOverlay />
          <ModalContent bg="white" borderRadius="md">
            <ModalCloseButton />
            <ModalBody backgroundColor="purple.800">{children}</ModalBody>
            <ModalFooter backgroundColor="purple.800">
              * You need to fill all the input fields
            </ModalFooter >
          </ModalContent>
        </Card>
      </Modal>
    </Card>
  );
}

export default FormModal;
