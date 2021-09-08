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
            QuestionAndAnswers.map((value, index) => {
              return (
                <div class="row">
                  <AccordionCard data={value} key={`faq-card${index}`} />
                </div>
              );
            })}
        </div>
      </BodyWrapper>
    </div>
  );
};

export default FAQ;
