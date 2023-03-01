import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSurveyData } from "../redux/actions";



export default function Addsurvey() {
  const [showForm, setShowForm] = useState(false);
  const [questionList, setQuestionList] = useState([]);

  const dispatch=useDispatch();


  function handleAddQuestion() {
    setQuestionList([...questionList, ""]);
  }

  function handleQuestionChange(index, value) {
    const newList = [...questionList];
    newList[index] = value;
    setQuestionList(newList);
  }

  function handleSubmit(event) {
    event.preventDefault();
   
  dispatch(addSurveyData(questionList))
    setShowForm(false);
  }

  console.log(questionList)
  if (showForm) {
    return (
      <div className="flex flex-col items-center bg-gray-100 h-screen">
        <h3 className="text-xl font-medium mb-4">Create Survey</h3>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          {questionList.map((question, index) => (
            <div key={index} className="mb-4">
              <label htmlFor={`question${index + 1}`} className="mr-2">{`Question ${index + 1}`}</label>
              <input
                id={`question${index + 1}`}
                type="text"
                value={question}
                onChange={(event) => handleQuestionChange(index, event.target.value)}
                className="border rounded px-2 py-1"
              />
            </div>
          ))}
          <button type="button" onClick={handleAddQuestion} className="btn mb-4">Add Question</button>
          <button type="submit" className="btn btn-primary">Create Survey</button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-6 w-6 mb-2"
        onClick={() => setShowForm(true)}
      >
        <path
          className="heroicon-ui"
          d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm1-10.5H7a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2zm0 4H7a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2zm6-8h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2zm0 4h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z"
        />
      </svg>
      <span>Create Survey</span>
    </div>
  );
}
