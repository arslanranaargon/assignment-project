import { Routes, Route } from "react-router-dom";
import useModalState from "./hooks/useModalState";
import Header from "./components/Header";
import FormModal from "./components/FormModal";
import CreateTodoForm from "./forms/CreateTodoForm";
import CreateUserForm from "./forms/CreateUserForm";
import { TaskProvider } from "./context/TaskContext";
import { UserProvider } from "./context/UserContext";
import TaskList from "./pages/TaskList";
import UserListNew from "./pages/UserListNew";
import { CurrentTaskProvider } from "./context/CurrentTaskContext";
import Layout from "./pages/Layout";
import SimpleGridLayout from "./pages/SimpleGridLayout";

function App() {
  const {
    isOpen: isCreateTaskModalOpen,
    openModal: openCreateTaskModal,
    closeModal: closeCreateTaskModal,
  } = useModalState();
  const {
    isOpen: isCreateUserModalOpen,
    openModal: openCreateUserModal,
    closeModal: closeCreateUserModal,
  } = useModalState();

  return (
    <div className="App">
      <TaskProvider>
        <UserProvider>
          <CurrentTaskProvider>
            <Header
              openCreateTaskModal={openCreateTaskModal}
              openCreateUserModal={openCreateUserModal}
            />

            <FormModal
              isOpen={isCreateTaskModalOpen}
              onClose={closeCreateTaskModal}
            >
              <CreateTodoForm
                onClose={closeCreateTaskModal}
                title="Create a new Task"
              />
            </FormModal>

            <FormModal
              isOpen={isCreateUserModalOpen}
              onClose={closeCreateUserModal}
            >
              <CreateUserForm
                onClose={closeCreateUserModal}
                title="Create a new User"
              />
            </FormModal>

            <Routes>
              <Route
                path="/"
                element={<TaskList openCreateTaskModal={openCreateTaskModal} />}
              />
              <Route path="/layout" element={<Layout />} />
              <Route path="/users" element={<UserListNew />} />
              <Route path="/simple-grid" element={<SimpleGridLayout />} />
            </Routes>
          </CurrentTaskProvider>
        </UserProvider>
      </TaskProvider>
    </div>
  );
}
export default App;
