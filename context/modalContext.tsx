import { createContext, ReactNode } from "react";
import QuickViewModal from "../components/QuickViewModal";
import useModal from "../hooks/useModal";

type ModalProviderProps = {
  children?: ReactNode;
};

const ModalContext = createContext<any>({});

const ModalProvider = ({ children }: ModalProviderProps) => {
  let { isModalOpen, modalContent, handleModal } = useModal();

  return (
    <ModalContext.Provider value={{ isModalOpen, modalContent, handleModal }}>
      <QuickViewModal />
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
