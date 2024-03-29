import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPollData } from '../redux/actions';




const Poll = () => {

  const [pollData, setPollData] = useState({
    title: '',
    options: ['']
  });


const [titleError, settitleError] = useState(true);

  const dispatch=useDispatch();


  const handleTitleChange = (e) => {
    setPollData({ ...pollData, title: e.target.value });

    if (e.target.id === 'title') {

      if (e.target.value.length <= 3  ) {
        settitleError(true)
      }
      else{
        settitleError(false)
      }
      
    }
  };

  const handleOptionChange = (index, e) => {
    const options = [...pollData.options];
    options[index] = e.target.value;
    setPollData({ ...pollData, options });
  };

  const handleAddOption = () => {
    const options = [...pollData.options, ''];
    setPollData({ ...pollData, options });
  };

  const handleRemoveOption = (index) => {
    const options = [...pollData.options];
    options.splice(index, 1);
    setPollData({ ...pollData, options });
  };

  const handleSubmit = (e) => {

     
    if( pollData.options.length <2 || titleError ){
      e.preventDefault();
      alert("Please add atleast two option")
    }
    else{
  
     
      e.preventDefault();
      dispatch(addPollData(pollData))
  
    
    }


  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="title">Poll Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={pollData.title}
          onChange={handleTitleChange}
          required
          className="border border-gray-400 p-2 rounded-md w-full"
        />
      </div>
      <div className="space-y-2">
        <label>Options</label>
        {pollData.options.map((option, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="text"
              name={`option-${index}`}
              value={option}
              onChange={(e) => handleOptionChange(index, e)}
              required
              className="border border-gray-400 p-2 rounded-md flex-grow"
            />
            <button
              type="button"
              onClick={() => handleRemoveOption(index)}
              className="text-red-500 hover:text-red-700 focus:outline-none"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddOption}
          className="text-blue-500 hover:text-blue-700 focus:outline-none"
        >
          Add Option
        </button>
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};




export default Poll;
