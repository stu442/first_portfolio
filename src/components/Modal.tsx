import { motion } from "framer-motion";
import { createContext, useContext, useEffect, useState } from "react";

interface ModalContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextType | null>(null);

const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export default function Modal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };

  }, [isOpen]);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

function Toggle({ children }: { children: React.ReactNode }) {
  const { isOpen, setIsOpen } = useModal();
  return (
    <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      {children}
    </div>
  );
}

function Contents({ children }: { children: React.ReactNode }) {
  const { isOpen, setIsOpen } = useModal();
  return (
    <>
    {isOpen && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div 
          className="absolute w-full h-full backdrop-brightness-50 backdrop-blur-sm cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        ></div>
        <motion.div 
        className="bg-[#121212] w-3/4 md:max-w-xl max-h-[80%] mx-auto rounded-2xl z-50 overflow-scroll"
        initial={{ scale : 0, y : 1000 }}
        animate={{ scale : 1 , y : 0 }}
        transition={{ duration: 0.3 }}
        >
          <div className="py-8 text-left px-8 flex flex-col items-center">
            {children}
          </div>
        </motion.div>
      </div>
    )}
    </>
  )
}

Modal.Toggle = Toggle
Modal.Contents = Contents