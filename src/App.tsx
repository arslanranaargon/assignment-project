import { Routes, Route } from "react-router-dom";
import useModalState from "./hooks/useModalState";
import Header from "./components/Header";
import FormModal from "./components/FormModal";
import CreateTodoForm from "./forms/CreateTodoForm";
import CreateUserForm from "./forms/CreateUserForm";
import { TaskProvider } from "./context/TaskContext";
import { UserProvider } from "./context/UserContext";
import TaskListNew from "./pages/TaskListNew";
import UserListNew from "./pages/UserListNew";
import { CurrentTaskProvider } from "./context/CurrentTaskContext";

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
                element={
                  <TaskListNew openCreateTaskModal={openCreateTaskModal} />
                }
              />
              <Route path="/users" element={<UserListNew />} />
            </Routes>
          </CurrentTaskProvider>
        </UserProvider>
      </TaskProvider>
    </div>
  );
}
export default App;
