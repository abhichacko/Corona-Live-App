import { FooterWrapper, AnchorWrapper } from "./Footer.styled";

const Footer = () => {
  return (
    <div class="container">
      <FooterWrapper className="d-flex justify-content-center">
        <AnchorWrapper href="https://www.linkedin.com/in/abhilash-thankachan-43b888162/">
          Developed by &copy; Abhilash Thankachan
        </AnchorWrapper>
      </FooterWrapper>
    </div>
  );
};
export default Footer;
