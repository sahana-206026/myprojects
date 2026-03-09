
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";
import InterviewQuestions, { Question } from "@/components/ui/interview-questions";

interface QuestionsSectionProps {
  interviewQuestions: Question[];
}

const QuestionsSection = ({ interviewQuestions }: QuestionsSectionProps) => {
  const [showQuestionsSection, setShowQuestionsSection] = useState(false);
  const [selectedField, setSelectedField] = useState<string | null>(null);

  const toggleQuestionsSection = () => {
    setShowQuestionsSection(!showQuestionsSection);
    if (!showQuestionsSection) {
      setSelectedField(null);
    }
  };

  return (
    <>
      <div className="flex justify-center mb-8">
        <Button 
          onClick={toggleQuestionsSection}
          variant="outline"
          className="group flex items-center gap-2 shadow-sm hover:shadow transition-all duration-300 border-purple-200 hover:border-purple-300 bg-gradient-to-r from-indigo-50 to-purple-50"
        >
          <Lightbulb className="h-4 w-4 text-purple-500 group-hover:text-purple-600" />
          {showQuestionsSection ? "Hide Sample Questions" : "View Sample Interview Questions"}
        </Button>
      </div>
      
      {showQuestionsSection && (
        <div className="mb-10 bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-purple-100">
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <Button
              variant={selectedField === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedField(null)}
              className={`rounded-full ${selectedField === null ? "bg-gradient-to-r from-purple-500 to-indigo-500" : "border-purple-200 text-purple-700 hover:bg-purple-50"}`}
            >
              All Fields
            </Button>
            <Button
              variant={selectedField === "CSE" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedField("CSE")}
              className={`rounded-full ${selectedField === "CSE" ? "bg-gradient-to-r from-purple-500 to-indigo-500" : "border-purple-200 text-purple-700 hover:bg-purple-50"}`}
            >
              Computer Science (CSE)
            </Button>
            <Button
              variant={selectedField === "ECE" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedField("ECE")}
              className={`rounded-full ${selectedField === "ECE" ? "bg-gradient-to-r from-purple-500 to-indigo-500" : "border-purple-200 text-purple-700 hover:bg-purple-50"}`}
            >
              Electronics & Communication (ECE)
            </Button>
            <Button
              variant={selectedField === "EEE" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedField("EEE")}
              className={`rounded-full ${selectedField === "EEE" ? "bg-gradient-to-r from-purple-500 to-indigo-500" : "border-purple-200 text-purple-700 hover:bg-purple-50"}`}
            >
              Electrical & Electronics (EEE)
            </Button>
            <Button
              variant={selectedField === "General" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedField("General")}
              className={`rounded-full ${selectedField === "General" ? "bg-gradient-to-r from-purple-500 to-indigo-500" : "border-purple-200 text-purple-700 hover:bg-purple-50"}`}
            >
              General HR Questions
            </Button>
          </div>
          
          <InterviewQuestions 
            questions={interviewQuestions}
            selectedField={selectedField}
          />
        </div>
      )}
    </>
  );
};

export default QuestionsSection;
