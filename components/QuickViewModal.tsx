import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { createPortal } from "react-dom";
import Flag from "react-world-flags";
import tw from "tailwind-styled-components";
import { ModalContext } from "../context/modalContext";

const QuickViewModal = ({}) => {
  const { isModalOpen, modalContent, handleModal } = useContext(ModalContext);

  if (isModalOpen) {
    return createPortal(
      <ModalOverlay onClick={handleModal}>
        <ModalMain onClick={(evt: MouseEvent) => evt.stopPropagation()}>
          <ContentDiv>
            <ModalTitle>{modalContent.title}</ModalTitle>
            <p>
              {modalContent.category} | {modalContent.area}{" "}
              <Flag
                code={modalContent.countryCode}
                height="12"
                className="inline w-8 h-5 -mt-1"
              />
            </p>
            <IngredientShortList>
              {modalContent.ingredients
                .slice(0, 5)
                .map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              <li className="text-sm italic text-center mt-auto">
                more information in the next page
              </li>
            </IngredientShortList>
            <Link href={`/recipe/${modalContent.id}`} passHref>
              <ModalMainButton>Show recipe &#8594;</ModalMainButton>
            </Link>
          </ContentDiv>
          <ImageDiv>
            <Image
              src={modalContent.thumbnail}
              alt={modalContent.title}
              layout="intrinsic"
              width="380"
              height="380"
              className="object-cover object-center h-full"
            />
          </ImageDiv>

          <CloseModalButton onClick={handleModal}>&#10005;</CloseModalButton>
        </ModalMain>
      </ModalOverlay>,
      document.getElementById("modal-root")!
    );
  } else {
    return null;
  }
};

QuickViewModal.displayName = "QuickViewModal";

export default QuickViewModal;

const ModalOverlay = tw.div`
  fixed
  w-full
  h-full
  top-0
  left-0
  overflow-hidden
  bg-black/[0.5]
  flex
  flex-col
  items-center
  z-40
`;

const ModalMain = tw.div`
  bg-orange-300
  relative
  h-[29rem]
  z-50
  rounded-xl
  shadow-2xl
  overflow-hidden
  mt-[7rem]
  flex
  flex-col-reverse
  justify-end
  
  md:w-[80%]
  md:h-1/4
  md:mt-[9rem]
  md:flex-row
  md:justify-between
  md:max-w-[760px]
  md:max-h-80
`;

const ContentDiv = tw.div`
  w-full
  h-3/5
  p-3

  flex
  flex-col
  md:w-1/2
  md:h-full
  md:p-4
  lg:p-5
`;

const ModalTitle = tw.h2`
  text-xl
  font-bold

  md:text-3xl
`;

const ModalMainButton = tw.button`
  bg-orange-400
  w-full
  py-1.5
  text-base
  font-bold
  text-neutral-800
  rounded-lg
  mt-auto
`;

const IngredientShortList = tw.ul`
  leading-6
  mt-2
  mx-3
  px-2
  text-black
  h-[60%]
  overflow-hidden

  flex
  flex-col
`;

const ImageDiv = tw.div`
  w-full
  h-2/5
  overflow-hidden
  flex
  justify-center
  items-center

  md:w-1/2
  md:h-full
`;

const CloseModalButton = tw.button`
  font-bold
  absolute
  top-3
  right-3
  rounded-full
  w-8
  h-8
  bg-white/[0.9]
`;
