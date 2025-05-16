
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Option {
  id: string;
  label: string;
}

interface QuestionProps {
  question: {
    id: string;
    title: string;
    subtitle?: string;
    type: string;
    options: Option[];
  };
  onAnswer: (questionId: string, answer: string) => void;
  onStartQuiz: () => void;
  onNameSubmit: (name: string) => void;
}

const QuizQuestion = ({ question, onAnswer, onStartQuiz, onNameSubmit }: QuestionProps) => {
  const [name, setName] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleNameSubmit = () => {
    if (name.trim()) {
      onNameSubmit(name);
    }
  };

  if (question.type === "welcome") {
    return (
      <div className="bg-white rounded-lg p-6 shadow-lg text-center w-full">
        <h2 className="text-blue-900 font-bold text-2xl mb-4">{question.title}</h2>
        <p className="text-gray-700 mb-6">{question.subtitle}</p>
        <Button 
          onClick={onStartQuiz}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg"
        >
          INICIAR TESTE GRATUITO
        </Button>
      </div>
    );
  }

  if (question.type === "name") {
    return (
      <div className="bg-white rounded-lg p-6 shadow-lg text-center w-full">
        <h2 className="text-blue-900 font-bold text-2xl mb-4">{question.title}</h2>
        {question.subtitle && <p className="text-gray-700 mb-6">{question.subtitle}</p>}
        
        <div className="mb-6">
          <Input
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={handleNameChange}
            className="w-full p-4 text-center text-lg border-2 border-gray-300 rounded-lg"
          />
        </div>
        
        <Button 
          onClick={handleNameSubmit}
          disabled={!name.trim()}
          className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-bold py-4 px-8 rounded-full text-lg"
        >
          CONTINUAR
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg text-center w-full">
      <h2 className="text-blue-900 font-bold text-2xl mb-6">{question.title}</h2>
      
      <div className="space-y-4">
        {question.options.map((option) => (
          <Button
            key={option.id}
            onClick={() => onAnswer(question.id, option.id)}
            className="w-full bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold p-4 rounded-lg border border-blue-300 text-left justify-start text-lg"
            variant="outline"
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
