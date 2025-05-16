
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface ResultPageProps {
  name: string;
}

const ResultPage = ({ name }: ResultPageProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-900 to-blue-700">
      <header className="w-full bg-blue-950 py-4 text-center">
        <h1 className="text-white text-xl font-bold">Desafio Seca Bucho</h1>
      </header>
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="bg-white rounded-lg p-6 shadow-lg text-center max-w-md w-full">
          <div className="flex justify-center mb-6">
            <CheckCircle className="text-green-500 h-16 w-16" />
          </div>
          
          <h2 className="text-blue-900 font-bold text-2xl mb-4">
            Parabéns {name}!
          </h2>
          
          <p className="text-gray-700 mb-6">
            Seu perfil para perda de peso foi analisado com sucesso.
            Preparamos um método personalizado para ajudar você a atingir seus objetivos.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-blue-800 font-medium">
              O método mais adequado para o seu perfil é o Programa Seca Bucho - um sistema exclusivo
              que já ajudou mais de 50.000 pessoas a perderem entre 5kg e 10kg em 30 dias.
            </p>
          </div>
          
          <Button 
            onClick={() => window.location.href = "https://checkout.desafiosecabucho.com.br"}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg"
          >
            ACESSAR MÉTODO PERSONALIZADO
          </Button>
        </div>
      </div>
      
      <footer className="w-full bg-blue-950 py-4 text-center text-white text-xs">
        <p>© 2025 Desafio Seca Bucho - Todos os direitos reservados</p>
        <p className="mt-1">Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.</p>
      </footer>
    </div>
  );
};

export default ResultPage;
