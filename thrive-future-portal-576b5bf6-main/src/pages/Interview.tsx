
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useFavorites } from "@/hooks/useFavorites";
import { interviewResources } from "@/data/resources";
import { getAllInterviewQuestions } from "@/data/interviewQuestions";
import InterviewHeader from "@/components/interview/InterviewHeader";
import QuestionsSection from "@/components/interview/QuestionsSection";
import ResourcesSection from "@/components/interview/ResourcesSection";

const Interview = () => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const interviewQuestions = getAllInterviewQuestions();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-indigo-50 to-purple-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <InterviewHeader resourceCount={interviewResources.length} />
            
            <QuestionsSection interviewQuestions={interviewQuestions} />
            
            <ResourcesSection 
              resources={interviewResources}
              isFavorite={isFavorite}
              toggleFavorite={toggleFavorite}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Interview;
