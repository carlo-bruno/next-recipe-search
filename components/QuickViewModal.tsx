import Image from "next/image";
import tw from "tailwind-styled-components";

type QuickViewModalProps = {};

const QuickViewModal = ({}: QuickViewModalProps): JSX.Element => {
  return (
    <ModalOverlay>
      <ModalMain>
        <ContentDiv>
          <ModalTitle>{"Quick View Modal"}</ModalTitle>
          <p>
            {"Category"} | {"Area"} {"[flag]"}
          </p>
          <IngredientShortList>
            <li>ingredient 1</li>
            <li>ingredient 2</li>
            <li>ingredient 3</li>
            <li>ingredient 4</li>
            <li>ingredient 5</li>
          </IngredientShortList>
          <ModalMainButton>Show recipe &#8594;</ModalMainButton>
        </ContentDiv>
        <ImageDiv>
          <Image
            src={"https://www.themealdb.com/images/media/meals/1548772327.jpg"}
            alt={"sample recipe"}
            layout="intrinsic"
            width="380"
            height="380"
            className="object-cover object-center h-full"
          />
        </ImageDiv>

        <CloseModalButton
          onClick={() => {
            console.log("close modal");
          }}
        >
          &#10005;
        </CloseModalButton>
      </ModalMain>
    </ModalOverlay>
  );
};

export default QuickViewModal;

const ModalOverlay = tw.div`
  fixed
  w-full
  h-full
  top-0
  left-0
  overflow-hidden
  bg-black/[0.3]
  flex
  flex-col
  items-center
`;

const ModalMain = tw.div`
  bg-orange-300
  relative
  h-[29rem]
  z-20
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
  overflow-ellipsis

  mix-blend-normal
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
