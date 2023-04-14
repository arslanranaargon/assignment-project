import { MouseEventHandler, ReactNode } from "react";

export interface TaskProps {
  id: string | number;
  description: string;
  startTime: string;
  endTime: string;
  timeEstimation: string;
  createdAt: string;
  updatedAt: string;
  colors: {
    value: string;
    label: string;
  }[];
  gender: string;
  previewUrl?: string;
  country: string;
}

export interface UserProps {
  id: string | number;
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  avatarUrl?: String;
}

export interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export interface HeaderProps {
  openCreateTaskModal: MouseEventHandler;
  openCreateUserModal: MouseEventHandler;
}

export interface ReactNodeProps {
  children: ReactNode;
}

export interface ModaleProps {
  onClose: () => void;
  title: string;
}

export interface ColorProps {
  value: string;
  label: string;
}
