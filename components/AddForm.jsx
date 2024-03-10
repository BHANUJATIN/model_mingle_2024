// AddForm.js
import React, { useState } from "react";
import Dropdown from "react-dropdown";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-dropdown/style.css";

const inputClass =
  "p-2 focus:outline-none w-full md:w-2/3 rounded-b-lg md:rounded-lg md:rounded-l-none bg-gray-700";
const inputDivClass =
  "w-full flex flex-col md:flex-row gap-x-7 justify-between items-center bg-black border-2 border-black rounded-lg";
const labelClass = "text-sm w-full md:w-3/12 text-white p-2 text-start ";
const textAreaLabelClass =
  "text-sm w-full md:w-11/12 text-white p-2 text-start";
const textAreaDivClass =
  "w-full flex flex-col gap-x-7 justify-between items-start bg-black border border-black rounded-lg";
const textAreaClass =
  "p-2 focus:outline-none bg-gray-700 w-full rounded-b-lg md:rounded-t-none";

const languageModelCategories = [
  "OpenAI GPT Models (e.g., GPT-3, GPT-2)",
  "BERT (Bidirectional Encoder Representations from Transformers)",
  "XLNet",
  "RoBERTa (Robustly optimized BERT approach)",
  "DistilBERT",
  "ERNIE (Enhanced Representation through kNowledge Integration)",
  "T5 (Text-To-Text Transfer Transformer)",
  "CTRL (Contrastive Learning of Language Models)",
];

const AddForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    origin: "",
    category: "", // category is a string, not an object
    linkdoc: "",
    linkmodel: "",
    description: "",
    usecase: "",
    likes: "0"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Event handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Event handler for category dropdown change
  const handleCategoryChange = (selectedOption) => {
    setFormData({ ...formData, category: selectedOption.value });
  };

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields
    for (const field in formData) {
      if (formData[field].trim() === "") {
        toast.error(`${field} cannot be empty.`);
        return;
      }
    }

    try {
      setIsSubmitting(true);

      // Send a POST request with form data
      const response = await fetch("/api/blog/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setFormData({
          title: "",
          origin: "",
          category: "", // category is a string, not an object
          linkdoc: "",
          linkmodel: "",
          description: "",
          usecase: "",
          likes: "0"
        });
        toast.success("Model Added Successfully 😊")
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center w-full">
      <div className="w-full h-full md:w-10/12 xl:w-2/3 shadow-2xl bg-gray-700/60 backdrop-blur-sm border-white border rounded-2xl py-4 px-6 md:py-20 md:px-24">
        <div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex mb-4 flex-col gap-y-5 justify-start items-start gap-x-6">
                <div className={inputDivClass}>
                  <label className={labelClass}>Name</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Name of model"
                  />
                </div>

                <div className={inputDivClass}>
                  <label className={labelClass}>Origin</label>
                  <input
                    type="text"
                    name="origin"
                    value={formData.origin}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Organization who built it"
                  />
                </div>

                <div className={inputDivClass}>
                  <label className={labelClass}>Category</label>
                  <Dropdown
                    name="category"
                    className="w-full md:w-2/3 bg-gray-700"
                    options={languageModelCategories}
                    onChange={handleCategoryChange}
                    value={formData.category}
                    placeholder="Select a category"
                  />
                </div>

                <div className={inputDivClass}>
                  <label className={labelClass}>Link to Docs</label>
                  <input
                    type="text"
                    name="linkdoc"
                    value={formData.linkdoc}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Link to Documentation"
                  />
                </div>

                <div className={inputDivClass}>
                  <label className={labelClass}>Link to Model</label>
                  <input
                    type="text"
                    name="linkmodel"
                    value={formData.linkmodel}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Link to Model"
                  />
                </div>

                <div className={textAreaDivClass}>
                  <label className={labelClass}>Description</label>
                  <textarea
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className={textAreaClass}
                    placeholder="Description"
                  />
                </div>

                <div className={textAreaDivClass}>
                  <label className={textAreaLabelClass}>Use Case</label>
                  <textarea
                    type="text"
                    name="usecase"
                    value={formData.usecase}
                    onChange={handleChange}
                    className={textAreaClass}
                    placeholder="Use Case"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className={`bg-white text-black border-4 border-black px-4 py-2 rounded-md font-bold text-md md:text-lg hover:bg-black hover:text-white ${
                    isSubmitting && "cursor-not-allowed opacity-50"
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
