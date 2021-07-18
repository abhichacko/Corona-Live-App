import AccordionCard from "../AccordianCard/AccordionCard";
import SubHeader from "../SubHeader/SubHeader";
import { QuestionAndAnswers } from "../../Constants/FAQuestions";
import { BodyWrapper } from "./FAQ.styled";

const FAQ = (props) => {
  return (
    <div>
      <SubHeader
        heading={"Frequently Asked Questions"}
        isSubHeading={false}
      ></SubHeader>
      <BodyWrapper>
        <div class="container">
          {QuestionAndAnswers &&
            QuestionAndAnswers.map((value) => {
              return (
                <div class="row col-lg-12">
                  <AccordionCard data={value} />
                </div>
              );
            })}
        </div>
      </BodyWrapper>
    </div>
  );
};

export default FAQ;
