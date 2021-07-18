import { FooterWrapper, IconWrapper } from "./Footer.styled";

const Footer = () => {
  return (
    <div class="row">
      <FooterWrapper className="d-flex">
        footer
        <IconWrapper className="fab fa-linkedin" />
        <IconWrapper className="fab fa-github" />
      </FooterWrapper>
    </div>
  );
};
export default Footer;
