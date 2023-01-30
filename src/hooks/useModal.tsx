import {
  createContext,
  ReactComponentElement,
  ReactNode,
  useContext,
  useState,
} from "react";

interface ModalInfoProps {
  message?: string;
  confirm?: () => void;
  type?: "info" | "confirm";
  children?: ReactNode;
}

interface ModalStateProps extends ModalInfoProps {
  visible: boolean;
}

interface ModalContextData {
  modalState: ModalStateProps;
  openModal({ message, confirm, type }: ModalInfoProps): void;
  closeModal(): void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export function ModalProvider({ children }: React.PropsWithChildren) {
  const [modalState, setState] = useState({
    visible: false,
  });

  const openModal = (payload: ModalStateProps) => {
    setState({ ...payload, visible: true });
    window.document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setState({ visible: false });
    window.document.body.style.overflow = "scroll";
  };

  return (
    <ModalContext.Provider value={{ modalState, closeModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within an ModalProvider");
  }

  return context;
}
