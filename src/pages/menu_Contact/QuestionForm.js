import "../css/Contact.css";

const QuestionForm = ({ history, match }) => {
  return (
    <>
      <div className="Contact_container">
        <h5 className="Board_header">{history.location.pathname}</h5>
      </div>
      <div>문의하기</div>
    </>
  );
};

export default QuestionForm;
