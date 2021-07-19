import { BodyWrapper, LoaderWrapper } from "../Home/Home.styled";
import SubHeader from "../SubHeader/SubHeader";
const FAQ = (props) => {
  console.log(props);
  return (
    <div>
      <SubHeader
        heading={"Frequently Asked Questions"}
        isSubHeading={false}
      ></SubHeader>
      <BodyWrapper>
        <div class="container">
          <div class="row"></div>
        </div>
      </BodyWrapper>
    </div>
  );
};

export default FAQ;
