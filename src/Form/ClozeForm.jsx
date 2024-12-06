import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { addClozeForm } from "../services/api";
import { FiTrash2 } from "react-icons/fi";
import { IoMdAddCircleOutline } from "react-icons/io";

const ClozeForm = () => {
  const [formData, setFormData] = useState({
    preview: "",
    sentence: "",
    media: "None",
    options: [{ text: "", correct: false }],
    points: 0,
    feedback: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOptionChange = (index, field, value) => {
    const updatedOptions = formData.options.map((option, i) =>
      i === index ? { ...option, [field]: value } : option
    );
    setFormData({ ...formData, options: updatedOptions });
  };

  const addOption = () => {
    setFormData({
      ...formData,
      options: [...formData.options, { text: "", correct: false }],
    });
  };

  const removeOption = (index) => {
    setFormData({
      ...formData,
      options: formData.options.filter((_, i) => i !== index),
    });
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedOptions = Array.from(formData.options);
    const [moved] = reorderedOptions.splice(result.source.index, 1);
    reorderedOptions.splice(result.destination.index, 0, moved);

    setFormData({ ...formData, options: reorderedOptions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addClozeForm(formData);
      console.log("Form submitted successfully:", response);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gray-100 max-w-4xl mx-auto shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Screen 1</h2>

      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-1">Preview</label>
        <input
          type="text"
          name="preview"
          value={formData.preview}
          onChange={handleInputChange}
          placeholder="Enter the preview text"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-1">Sentence *</label>
        <input
          type="text"
          name="sentence"
          value={formData.sentence}
          onChange={handleInputChange}
          placeholder="Enter the sentence text"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-1">Media</label>
        <select
          name="media"
          value={formData.media}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2"
        >
          <option value="None">None</option>
          <option value="Image">Image</option>
          <option value="Video">Video</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-1">Options</label>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="options">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {formData.options.map((option, index) => (
                  <Draggable key={index} draggableId={`option-${index}`} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="flex items-center mb-2 bg-white shadow-sm p-2 rounded-md"
                      >
                        <input
                          type="radio"
                          name="correct"
                          checked={option.correct}
                          onChange={() => handleOptionChange(index, "correct", !option.correct)}
                          className="mr-2"
                        />
                        <input
                          type="text"
                          placeholder="Option text"
                          value={option.text}
                          onChange={(e) => handleOptionChange(index, "text", e.target.value)}
                          className="w-3/4 border border-gray-300 rounded-md p-2 mr-2"
                        />
                        <button
                          type="button"
                          onClick={() => removeOption(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <button
          type="button"
          onClick={addOption}
          className="flex items-center text-blue-500 hover:text-blue-700 mt-2"
        >
          <IoMdAddCircleOutline className="mr-2" />
          Add Option
        </button>
      </div>

      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-1">Feedback (Optional)</label>
        <textarea
          name="feedback"
          value={formData.feedback}
          onChange={handleInputChange}
          placeholder="Provide optional feedback"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-1">Points</label>
        <input
          type="number"
          name="points"
          value={formData.points}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default ClozeForm;
