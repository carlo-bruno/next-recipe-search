import { useState } from "react";
import type { RecipeTransformedData } from "../types";

const useModal = () => {
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [modalContent, setModalContent] = useState<RecipeTransformedData>();

  const handleModal = (content: RecipeTransformedData) => {
    setIsModalOpen((prev) => !prev);
    if (content) {
      setModalContent(content);
    }
  };

  return { isModalOpen, modalContent, handleModal };
};

export default useModal;
