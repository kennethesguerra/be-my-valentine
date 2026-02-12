"use client";

import { useState } from "react";
 import { useRouter } from "next/navigation";

export default function SecurityQuestionsPage() {
  const router = useRouter();

  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
  });

  const [errors, setErrors] = useState({
    q1: "",
    q2: "",
    q3: ""
  })

  const questions = [
    "What is the first mountain we climbed as a couple?",
    "Where is our go-to place for chinese food (near VDM)?",
    "When is our anniversary?",
  ];

  const correctAnswers = {
    q1: ["amuyao", "mt. amuyao"],
    q2: ["wok inn", "wokinn", "wok-inn"],
    q3: ["september 26", "sept 26", "sep 26"]
  }

  const handleChange = (
    key: keyof typeof answers,
    value: string
  ) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
     // clear error when user types again
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = { q1: "", q2: "", q3: "" };


    (Object.keys(answers) as Array<keyof typeof answers>).forEach((key) => {
      const value = answers[key].trim().toLowerCase();

      // required validation
      if (!value) {
        newErrors[key] = "This question is required.";
        hasError = true;
        return;
      }
      // incorrect answer validation
      if (!correctAnswers[key].includes(value)) {
        newErrors[key] = "Incorrect answer.";
        hasError = true;
      }
    });

    setErrors(newErrors);

    if (hasError) return;
    // Redirect when all answers are correct
    router.push("/success");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 text-gray-500">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 sm:p-8">
        <h1 className="text-xl sm:text-2xl font-semibold text-center mb-3">
          Hello, Faye my love!
        </h1>
        <span className="block text-sm font-medium mb-1">Please answer the security questions first.</span>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Question 1 */}
          <div>
            <label className="block text-sm font-medium mb-1">
              {questions[0]}
            </label>
            <input
              type="text"
              value={answers.q1}
              onChange={(e) => handleChange("q1", e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your answer"
            />
            {errors.q1 && (
              <p className="text-red-500 text-sm mt-1">{errors.q1}</p>
            )}
          </div>

          {/* Question 2 */}
          <div>
            <label className="block text-sm font-medium mb-1">
              {questions[1]}
            </label>
            <input
              type="text"
              value={answers.q2}
              onChange={(e) => handleChange("q2", e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your answer"
            />
            {errors.q2 && (
              <p className="text-red-500 text-sm mt-1">{errors.q2}</p>
            )}
          </div>

          {/* Question 3 */}
          <div>
            <label className="block text-sm font-medium mb-1">
              {questions[2]}
            </label>
            <input
              type="text"
              value={answers.q3}
              onChange={(e) => handleChange("q3", e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your answer"
            />
            {errors.q3 && (
              <p className="text-red-500 text-sm mt-1">{errors.q3}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
