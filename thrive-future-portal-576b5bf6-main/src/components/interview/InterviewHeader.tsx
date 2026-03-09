
import { BrainCircuit, Sparkles } from "lucide-react";

interface InterviewHeaderProps {
  resourceCount: number;
}

const InterviewHeader = ({ resourceCount }: InterviewHeaderProps) => {
  return (
    <div className="text-center mb-8">
      <div className="flex justify-center mb-4">
        <div className="relative">
          <div className="absolute inset-0 blur-xl bg-purple-100 rounded-full"></div>
          <div className="relative">
            <BrainCircuit className="h-14 w-14 text-purple-600" />
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
        Interview Resources
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        Prepare for interviews with frequently asked questions across various domains and industries.
      </p>
      <div className="mt-4 inline-flex items-center text-sm text-purple-600">
        <Sparkles className="h-4 w-4 mr-1" />
        <span>{resourceCount} resources available</span>
      </div>
    </div>
  );
};

export default InterviewHeader;
