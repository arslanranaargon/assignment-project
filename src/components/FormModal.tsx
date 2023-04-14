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
    <Card>
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <Card   >
          <ModalOverlay />
          <ModalContent bg="white" borderRadius="md">
            <ModalCloseButton />
            <ModalBody backgroundColor="gray.700" color="white">{children}</ModalBody>
            <ModalFooter backgroundColor="gray.800">
              * You need to fill all the input fields
            </ModalFooter>
          </ModalContent>
        </Card>
      </Modal>
    </Card>
  );
}

export default FormModal;
