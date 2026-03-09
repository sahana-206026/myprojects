
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export interface Question {
  id: string;
  question: string;
  answer: string;
  field: "CSE" | "ECE" | "EEE" | "General";
  level: "Basic" | "Intermediate" | "Advanced";
}

interface InterviewQuestionsProps {
  questions: Question[];
  selectedField: string | null;
}

const InterviewQuestions = ({ questions, selectedField }: InterviewQuestionsProps) => {
  const filteredQuestions = selectedField 
    ? questions.filter(q => q.field === selectedField) 
    : questions;

  return (
    <div className="mt-8 bg-white rounded-xl shadow-md p-6 border border-purple-100">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Sample Interview Questions & Answers</h2>
      
      {filteredQuestions.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          <p>No questions available for this field. Please select another field.</p>
        </div>
      ) : (
        <Accordion type="single" collapsible className="w-full">
          {filteredQuestions.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-b border-gray-200 py-2">
              <AccordionTrigger className="text-left hover:no-underline py-4">
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-gray-900">{item.question}</span>
                    <Badge variant="outline" className="ml-2 bg-indigo-50 text-indigo-700 border-indigo-200">
                      {item.field}
                    </Badge>
                    <Badge variant="outline" className={`
                      ${item.level === 'Basic' ? 'bg-purple-50 text-purple-700 border-purple-200' : ''}
                      ${item.level === 'Intermediate' ? 'bg-blue-50 text-blue-700 border-blue-200' : ''}
                      ${item.level === 'Advanced' ? 'bg-violet-50 text-violet-700 border-violet-200' : ''}
                    `}>
                      {item.level}
                    </Badge>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-2 pb-4 px-4 bg-indigo-50/30 rounded-md">
                <div className="prose prose-sm max-w-none">
                  {item.answer.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-2">{paragraph}</p>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default InterviewQuestions;
