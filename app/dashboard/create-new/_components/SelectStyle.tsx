"use client";

import { useState } from "react";
import clsx from "clsx";

const styles = [
  {
    name: "Cartoon",
    image: "/cartoon.jpeg",
  },
  {
    name: "Realistic",
    image: "/realistic.jpeg",
  },
  {
    name: "GTA",
    image: "/gta.jpeg",
  },
  {
    name: "historic",
    image: "/historic.jpeg",
  },
  {
    name: "realistic",
    image: "/realistic.jpeg",
  },
];

const SelectStyle = ({ onUserSelect }: any) => {
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const handleSelect = (style: string) => {
    setSelectedStyle(style);
    onUserSelect?.({ fieldName: "style", fieldValue: style });
  };

  return (
    <div className="w-[100%] mx-auto mt-10">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Select Style
          </h2>
          <p className="text-gray-600">
            Choose how your video should look visually
          </p>
        </div>

        {/* Style Cards */}
        {/* Style Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {styles.map((style) => (
            <button
              key={style.name}
              onClick={() => handleSelect(style.name)}
              className={clsx(
                "group rounded-2xl border p-3 transition-all",
                selectedStyle === style.name
                  ? "border-indigo-600 ring-2 ring-indigo-300 scale-[1.02]"
                  : "border-gray-200 hover:border-indigo-400 hover:scale-[1.02]"
              )}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={style.image}
                  alt={style.name}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Label */}
              <p
                className={clsx(
                  "mt-3 text-center text-base font-semibold",
                  selectedStyle === style.name
                    ? "text-indigo-600"
                    : "text-gray-800"
                )}
              >
                {style.name}
              </p>
            </button>
          ))}
        </div>

        {/* Selected text */}
        {selectedStyle && (
          <div className="mt-6 text-center text-sm font-medium">
            Selected Style:{" "}
            <span className="text-indigo-600">{selectedStyle}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectStyle;
