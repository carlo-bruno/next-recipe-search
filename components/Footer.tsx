import tw from "tailwind-styled-components/dist/tailwind";

const Footer = () => {
  return (
    <FooterStyles>
      <div>
        <p>
          Recipe data provided by{" "}
          <a href="https://www.themealdb.com/api.php">TheMealDB</a>
        </p>
      </div>

      <div>
        <p>&copy;2022 Carlo Bruno</p>
        <span>Link 1</span> <span>Link 2</span> <span>Link 3</span>
      </div>
    </FooterStyles>
  );
};

export default Footer;

const FooterStyles = tw.footer`
  container
  mx-auto
  flex
  flex-col
  items-center
  w-full
  px-5
  py-2

  text-sm
  leading-6

  md:justify-between
  md:flex-row
`;
