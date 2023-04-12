import { MouseEventHandler, ReactNode } from "react";

export interface TaskProps {
    id:any
    description: string;
    startTime: string;
    endTime: string;
    timeEstimation: string;
    country: string;
    previewUrl:string;
    colors: any;
    gender:string
}

export interface UserProps {
    id:any
    lastName: string;
    firstName: string;
    email: string;
    phone: string;
    tasks: TaskProps[];
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