
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import QuizQuestion from "@/components/QuizQuestion";
import ResultPage from "@/components/ResultPage";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [userName, setUserName] = useState("");
  
  const questions = [
    {
      id: "welcome",
      title: "DESCUBRA COMO ELIMINAR DE 5 A 10KG EM ATÉ 30 DIAS",
      subtitle: "Responda o teste e descubra o método perfeito para você!",
      type: "welcome",
      options: [],
    },
    {
      id: "gender",
      title: "Qual o seu gênero?",
      type: "choice",
      options: [
        { id: "female", label: "Feminino" },
        { id: "male", label: "Masculino" },
      ],
    },
    {
      id: "age",
      title: "Qual a sua idade?",
      type: "choice",
      options: [
        { id: "18-30", label: "18-30 anos" },
        { id: "31-40", label: "31-40 anos" },
        { id: "41-50", label: "41-50 anos" },
        { id: "51+", label: "Acima de 50 anos" },
      ],
    },
    {
      id: "target",
      title: "Qual o seu objetivo principal?",
      type: "choice",
      options: [
        { id: "lose-weight", label: "Perder peso" },
        { id: "gain-muscle", label: "Ganhar massa muscular" },
        { id: "both", label: "Ambos" },
      ],
    },
    {
      id: "weightloss",
      title: "Quanto peso você deseja perder?",
      type: "choice",
      options: [
        { id: "5kg", label: "Até 5kg" },
        { id: "10kg", label: "Entre 5kg e 10kg" },
        { id: "15kg", label: "Entre 10kg e 15kg" },
        { id: "more15kg", label: "Acima de 15kg" },
      ],
    },
    {
      id: "name",
      title: "Qual é o seu nome?",
      subtitle: "Para criar seu plano personalizado",
      type: "name",
      options: [],
    },
  ];

  const totalSteps = questions.length;
  const progress = Math.round((currentStep / (totalSteps - 1)) * 100);

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers({
      ...answers,
      [questionId]: answer,
    });
    setCurrentStep(currentStep + 1);
  };

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    setCurrentStep(currentStep + 1);
  };

  const handleStartQuiz = () => {
    setCurrentStep(currentStep + 1);
  };

  const currentQuestion = questions[currentStep];
  
  if (currentStep >= totalSteps) {
    return <ResultPage name={userName} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-900 to-blue-700">
      <header className="w-full bg-blue-950 py-4 text-center">
        <h1 className="text-white text-xl font-bold">Desafio Seca Bucho</h1>
      </header>
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 max-w-md mx-auto">
        {currentStep > 0 && (
          <div className="w-full mb-6">
            <div className="flex justify-between text-white text-sm mb-1">
              <span>{currentStep} de {totalSteps - 1}</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
        
        <QuizQuestion
          question={currentQuestion}
          onAnswer={handleAnswer}
          onStartQuiz={handleStartQuiz}
          onNameSubmit={handleNameSubmit}
        />
      </div>
      
      <footer className="w-full bg-blue-950 py-4 text-center text-white text-xs">
        <p>© 2025 Desafio Seca Bucho - Todos os direitos reservados</p>
        <p className="mt-1">Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.</p>
      </footer>
    </div>
  );
};

export default Index;
