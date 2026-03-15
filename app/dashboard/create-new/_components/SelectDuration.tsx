"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock } from "lucide-react";

const durations = [
  { id: 1, label: "15 Seconds" },
  { id: 2, label: "30 Seconds" },
  { id: 3, label: "45 Seconds" },
  { id: 4, label: "1 Minute" },
];

const SelectDuration = ({ onUserSelect = () => {} }: any) => {
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelectedDuration(value);
    onUserSelect({ fieldName: "duration", fieldValue: value });
  };

  return (
    <div className="w-[80%] mx-auto mt-8">
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Select Duration
          </h2>
          <p className="text-gray-600">How long should your video be?</p>
        </div>

        {/* Select */}
        <div className="flex justify-center">
          <Select onValueChange={handleSelect}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Choose duration" />
            </SelectTrigger>
            <SelectContent>
              {durations.map((item) => (
                <SelectItem key={item.id} value={item.label}>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-indigo-600" />
                    {item.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Selected Info */}
        {selectedDuration && (
          <div className="text-center mt-4 text-gray-800 font-medium">
            Selected Duration:{" "}
            <span className="text-indigo-600">{selectedDuration}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectDuration;
