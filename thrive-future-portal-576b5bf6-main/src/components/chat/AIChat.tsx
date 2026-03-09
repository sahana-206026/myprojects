
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Send, Bot, X, MinimizeIcon, MaximizeIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Sample responses for education and career topics
const aiResponses = {
  education: [
    "Coursera offers a wide range of courses from universities worldwide. Great for academic skill development!",
    "Khan Academy provides free lessons in math, science, and more. Perfect for supplementing your studies.",
    "edX hosts university-level courses in a variety of disciplines, including many that offer certificates.",
    "Have you tried Udemy? They have affordable courses on practically any skill you want to learn.",
    "For programming and tech skills, I recommend freeCodeCamp or Codecademy."
  ],
  career: [
    "LinkedIn is essential for professional networking and job hunting. Make sure your profile is complete!",
    "Indeed aggregates job listings from across the web and allows for easy application.",
    "For tech careers, platforms like GitHub can showcase your portfolio to potential employers.",
    "Glassdoor provides insights into company cultures and salaries, which is valuable when job hunting.",
    "AngelList is great if you're interested in startup opportunities."
  ],
  interview: [
    "Practice with LeetCode if you're preparing for technical interviews in programming.",
    "MockQuestions provides sample questions for various job roles to help you prepare.",
    "The STAR method (Situation, Task, Action, Result) is effective for structuring interview responses.",
    "Pramp offers free peer-to-peer mock interviews for technical roles.",
    "Big Interview provides AI-powered interview practice and feedback."
  ],
  default: [
    "I'm here to help you find educational and career resources. Ask me about websites for learning, job hunting, or interview preparation!",
    "Need guidance on finding the right learning platforms or job sites? I'm happy to assist!",
    "I can suggest resources for education, career development, or interview preparation. What are you interested in?",
    "Looking for specific types of learning resources or job platforms? Let me know what you need!",
    "I'm your AI guide to educational and career resources. How can I help you today?"
  ]
};

// Function to determine which category a message falls into
const categorizeMessage = (message: string): "education" | "career" | "interview" | "default" => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes("learn") || lowerMessage.includes("study") || lowerMessage.includes("course") || 
      lowerMessage.includes("education") || lowerMessage.includes("school") || lowerMessage.includes("college")) {
    return "education";
  } else if (lowerMessage.includes("job") || lowerMessage.includes("career") || lowerMessage.includes("work") || 
             lowerMessage.includes("profession") || lowerMessage.includes("employment")) {
    return "career";
  } else if (lowerMessage.includes("interview") || lowerMessage.includes("question") || 
             lowerMessage.includes("prepare") || lowerMessage.includes("hiring")) {
    return "interview";
  } else {
    return "default";
  }
};

// Function to get a random response from the appropriate category
const getAIResponse = (message: string): string => {
  const category = categorizeMessage(message);
  const responses = aiResponses[category];
  return responses[Math.floor(Math.random() * responses.length)];
};

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi there! I'm your Future Focus AI assistant. Ask me about educational resources, career websites, or interview preparation!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;
    
    // Add user message
    const userMessage = {
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    
    // Simulate AI thinking with a slight delay
    setTimeout(() => {
      const aiMessage = {
        text: getAIResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={toggleChat}
          className="rounded-full w-14 h-14 shadow-lg bg-futurefocus-600 hover:bg-futurefocus-700 text-white p-0 flex items-center justify-center"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>
      </motion.div>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <Card className={`w-80 ${isExpanded ? "w-96 h-[28rem]" : "h-96"} shadow-xl border-futurefocus-200 overflow-hidden`}>
              <CardHeader className="py-3 px-4 flex flex-row items-center justify-between bg-gradient-to-r from-futurefocus-600 to-futurefocus-500 text-white">
                <div className="flex items-center">
                  <Bot className="h-5 w-5 mr-2 animate-pulse" />
                  <CardTitle className="text-sm font-medium">Future Focus AI</CardTitle>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-6 w-6 rounded-full hover:bg-white/20 text-white"
                    onClick={toggleExpand}
                  >
                    {isExpanded ? <MinimizeIcon className="h-4 w-4" /> : <MaximizeIcon className="h-4 w-4" />}
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-6 w-6 rounded-full hover:bg-white/20 text-white"
                    onClick={toggleChat}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className={`p-3 overflow-y-auto ${isExpanded ? "h-[22rem]" : "h-[16rem]"} bg-gray-50`}>
                <div className="space-y-3">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                          message.isUser
                            ? "bg-futurefocus-500 text-white"
                            : "bg-white border border-gray-200 text-gray-800"
                        } shadow-sm`}
                      >
                        <div>{message.text}</div>
                        <div className={`text-xs mt-1 ${message.isUser ? "text-white/70" : "text-gray-500"}`}>
                          {formatTime(message.timestamp)}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>
              <CardFooter className="p-3 border-t bg-white">
                <div className="flex w-full items-center space-x-2">
                  <Input
                    ref={inputRef}
                    placeholder="Ask about resources..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="icon"
                    className="h-8 w-8 rounded-full bg-futurefocus-500 hover:bg-futurefocus-600"
                  >
                    <Send className="h-4 w-4 text-white" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;
