import React, { useState } from "react";
import { FiPlus, FiTrash2 } from "react-icons/fi";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { addComprehension } from "../services/api";

const ComprehensionForm = () => {
  const [comprehensionText, setComprehensionText] = useState("");
  const [questions, setQuestions] = useState([
    {
      id: "1",
      questionText: "Enter your question text here",
      options: [
        { text: "Option 1", isCorrect: false },
        { text: "Option 2", isCorrect: false },
        { text: "Option 3", isCorrect: false },
        { text: "Option 4", isCorrect: false },
      ],
      points: 1,
    },
  ]);

  // Add new question
  const addQuestion = () => {
    const newQuestion = {
      id: Date.now().toString(),
      questionText: "New Question",
      options: [
        { text: "Option 1", isCorrect: false },
        { text: "Option 2", isCorrect: false },
        { text: "Option 3", isCorrect: false },
        { text: "Option 4", isCorrect: false },
      ],
      points: 1,
    };
    setQuestions([...questions, newQuestion]);
  };

  // Remove question
  const removeQuestion = (id) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  // Drag-and-drop functionality
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedQuestions = Array.from(questions);
    const [movedQuestion] = reorderedQuestions.splice(result.source.index, 1);
    reorderedQuestions.splice(result.destination.index, 0, movedQuestion);

    setQuestions(reorderedQuestions);
  };

  // Save form
  const saveForm = async () => {
    const comprehensionData = {
      comprehensionText,
      questions: questions.map((question) => ({
        questionText: question.questionText,
        options: question.options,
        points: question.points,
      })),
    };

    try {
      const response = await addComprehension(comprehensionData);
      alert("Comprehension saved successfully!");
      console.log("Response:", response);
    } catch (error) {
      alert("Failed to save comprehension. Please try again.");
      console.error("Error saving comprehension:", error);
    }
  };

  return (
    <div className="bg-gray-100 shadow-md rounded-md p-6  max-w-4xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Quiz Form</h2>

      {/* Comprehension Text */}
      <textarea
        className="w-full border rounded-md p-2 mb-6 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter comprehension text here..."
        value={comprehensionText}
        onChange={(e) => setComprehensionText(e.target.value)}
      />

      {/* Question List with Drag and Drop */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="questions">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {questions.map((question, index) => (
                <Draggable key={question.id} draggableId={question.id} index={index}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className="bg-gray-50 p-4 rounded-lg border border-gray-300 mb-4"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-md font-medium">Question {index + 1}</h3>
                        <button
                          className="text-red-500 hover:text-red-600"
                          onClick={() => removeQuestion(question.id)}
                        >
                          <FiTrash2 />
                        </button>
                      </div>

                      {/* Question Input */}
                      <textarea
                        className="mt-2 w-full border rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={question.questionText}
                        onChange={(e) => {
                          const updatedQuestions = [...questions];
                          updatedQuestions[index].questionText = e.target.value;
                          setQuestions(updatedQuestions);
                        }}
                      />
                      <div className="space-y-2 mt-4">
                        {question.options.map((option, optionIndex) => (
                          <div key={optionIndex} className="flex items-center">
                            <input
                              type="radio"
                              name={`question-${index}`}
                              className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                            />
                            <input
                              type="text"
                              value={option.text}
                              className="ml-2 w-full border rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              onChange={(e) => {
                                const updatedQuestions = [...questions];
                                updatedQuestions[index].options[optionIndex].text = e.target.value;
                                setQuestions(updatedQuestions);
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* Action Buttons */}
      <div className="flex justify-between items-center mt-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          onClick={addQuestion}
        >
          <FiPlus className="mr-2" />
          Add Question
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:outline-none"
          onClick={saveForm}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ComprehensionForm;
