"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Film, Music, Video, BookOpen, Edit3 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const topics = [
  { id: 1, name: "Technology", icon: <Film /> },
  { id: 2, name: "Music", icon: <Music /> },
  { id: 3, name: "Education", icon: <BookOpen /> },
  { id: 4, name: "Entertainment", icon: <Video /> },
  { id: 5, name: "Custom Prompt", icon: <Edit3 /> },
];

const SelectTopic = ({ onUserSelect = () => {} }: any) => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [customPrompt, setCustomPrompt] = useState("");

  const handleSelect = (value: string) => {
    setSelectedTopic(value);
    if (value !== "Custom Prompt") {
      onUserSelect({ fieldName: "topic", fieldValue: value });
    }
  };

  const handleCustomPromptChange = (value: string) => {
    setCustomPrompt(value);
    onUserSelect({ fieldName: "topic", fieldValue: value });
  };

  return (
    <div className="w-[80%] mx-auto mt-8">
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Select Topic
          </h2>
          <p className="text-gray-600">
            What is the topic of your video? Choose the most suitable theme.
          </p>
        </div>

        <div className="flex justify-center">
          <Select onValueChange={handleSelect}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Choose a topic" />
            </SelectTrigger>
            <SelectContent>
              {topics.map((topic) => (
                <SelectItem key={topic.id} value={topic.name}>
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-600">{topic.icon}</span>
                    {topic.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedTopic === "Custom Prompt" && (
          <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-2">
              Enter your custom prompt
            </label>
            <Textarea
              value={customPrompt}
              onChange={(e) => handleCustomPromptChange(e.target.value)}
              placeholder="Type your video idea here..."
              className="w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
              rows={5}
            />
          </div>
        )}

        {selectedTopic && selectedTopic !== "Custom Prompt" && (
          <div className="text-center mt-4 text-gray-800 font-medium">
            Selected Topic:{" "}
            <span className="text-indigo-600">{selectedTopic}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectTopic;
