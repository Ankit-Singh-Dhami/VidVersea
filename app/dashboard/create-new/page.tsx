"use client";

import { useState } from "react";
import SelectTopic from "./_components/SelectTopic";
import SelectDuration from "./_components/SelectDuration";
import SelectStyle from "./_components/SelectStyle";
import axios from "axios";
import CustomLoading from "./_components/CustomLoading";

const CreateNew = () => {
  const [formData, setFormData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [videoScript, setVideoScript] = useState<any>();
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const onHandleInputChange = ({ fieldName, fieldValue }: any) => {
    console.log("data", fieldName, fieldValue);

    setFormData((prev: any) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  const onClickHandler = () => {
    if (!formData?.topic || !formData?.duration || !formData?.style) {
      alert("Please complete all fields");
      return;
    }
    getVideoScript();
  };

  const getVideoScript = async () => {
    setLoading(true);
    const prompt =
      "write a script to generate a " +
      formData.duration +
      " video on topic : " +
      formData.topic +
      " along with AI image prompt in " +
      formData.style +
      " format for each scene and give me result in JSON format with imagePrompt and ContentText as field";

    const result = await axios.post("/api/get-video-script", { prompt });

    console.log(result);
    setVideoScript(result.data);
    setLoading(false);
  };

  const generateAudio = async () => {
    if (!videoScript || videoScript.length === 0) return;

    let fullText = "";
    videoScript.forEach((item: any) => {
      fullText += item.ContentText + " ";
    });

    const res = await fetch("/api/generate-audio", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: fullText }),
    });

    if (!res.ok) {
      console.error("Audio generation failed");
      return;
    }

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    setAudioUrl(url);
  };

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-6">
      {/* Title */}
      <h1 className="mb-8 text-center text-3xl font-bold text-indigo-600">
        Create New Video
      </h1>

      {/* Steps */}
      <div className="flex flex-col gap-10">
        <SelectTopic onUserSelect={onHandleInputChange} />

        <SelectStyle onUserSelect={onHandleInputChange} />

        <SelectDuration onUserSelect={onHandleInputChange} />

        <CustomLoading loading={loading} />
      </div>

      {/* Create Button */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={onClickHandler}
          className="rounded-xl bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-indigo-700 disabled:opacity-50"
        >
          Create Video
        </button>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={generateAudio}
          className="rounded-xl bg-green-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-700"
        >
          Generate Audio
        </button>
      </div>
    </div>
  );
};

export default CreateNew;
