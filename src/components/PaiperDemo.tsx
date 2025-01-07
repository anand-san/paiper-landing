"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  Upload,
  FileIcon,
  Loader2,
  CheckCircle,
  Tag,
  ArrowDownIcon,
} from "lucide-react";
import { processDemoFile } from "@/lib/fileDemoApi";
import { toast } from "sonner";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import AdvancedInsightsSection from "./AdvancedInsightsSection";
import { DemoResponse } from "@/lib/InsightsResponseTypes";
import { usePostHog } from "posthog-js/react";
import DailyQuota from "./DailyQuota";

interface FileWithPreview extends File {
  preview: string;
}

export default function PaiperDemo() {
  const [file, setFile] = useState<FileWithPreview | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [insights, setInsights] = useState<DemoResponse["data"]>();
  const [allowedToUseDemo, setAllowedToUseDemo] = useState(true);
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    try {
      posthog.capture("demo-file-uploaded");
      if (acceptedFiles.length > 0) {
        const selectedFile = Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        });

        setFile(selectedFile);
        setIsUploading(true);
        setIsUploaded(false);

        const result = processDemoFile(selectedFile).then((data) => {
          setInsights(data?.data);
          updateSessionUsage();
        });

        toast.promise(result, {
          loading: "Processing file...",
          success: () => {
            return `Successfully processed ${selectedFile.name}`;
          },
          error: "Failed to process file",
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsUploading(false);
      setIsUploaded(true);
    }
  }, []);
  const posthog = usePostHog();
  useEffect(() => {
    const hasReachedDemoLimit =
      localStorage.getItem("hasUsedFreeDemo") === "3" ||
      sessionStorage.getItem("hasUsedFreeDemo") === "3";

    setAllowedToUseDemo(!hasReachedDemoLimit);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
      "application/pdf": [".pdf"],
    },
    maxFiles: 1,
    multiple: false,
    maxSize: 5 * 1024 * 1024, // 5MB
  });

  const updateSessionUsage = () => {
    const currentSessionUsage =
      sessionStorage.getItem("hasUsedFreeDemo") || "0";
    const currentLocalUsage = localStorage.getItem("hasUsedFreeDemo") || "0";
    const newLocalUsage = parseInt(currentLocalUsage) + 1;
    const newSessionUsage = parseInt(currentSessionUsage) + 1;
    sessionStorage.setItem("hasUsedFreeDemo", newSessionUsage.toString());
    localStorage.setItem("hasUsedFreeDemo", newLocalUsage.toString());
  };

  if (!allowedToUseDemo) {
    return (
      <div className="mx-auto p-6">
        <Card>
          <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <p className="text-sm font-medium text-gray-900">
                You have reached the limit for using the demo. Please sign up to
                continue using the app.
              </p>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto p-6 flex flex-col items-center justify-center">
      <ArrowDownIcon className="w-12 h-12" />
      <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold py-6">
        Give it a try yourself - Its free
      </h3>
      <DailyQuota />
      {!file && (
        // <ShineBorder
        //   className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
        //   color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        // >
        <div
          {...getRootProps()}
          className={`w-full flex bg-neutral-50 hover:bg-purple-50  flex-col items-center justify-center h-[300px] rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragActive
              ? "border-primary bg-primary/10"
              : "border-gray-300 hover:border-primary"
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            Click here or drag and drop a file to get started
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Accepts: PDF (max 8 pages), Images and text files (Max 5MB)
          </p>
        </div>
        // </ShineBorder>
      )}

      {file && !isUploaded && (
        <div className="mt-6 w-full">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <FileIcon className="h-6 w-6 text-blue-500 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-900">{file.name}</p>
                <p className="text-xs text-gray-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            {isUploading && (
              <Loader2
                className="h-5 w-5 animate-spin text-primary"
                aria-label="Uploading"
              />
            )}
            {isUploaded && (
              <CheckCircle
                className="h-5 w-5 text-green-500"
                aria-label="Upload complete"
              />
            )}
          </div>
        </div>
      )}

      {isUploaded && (
        <Card className="grid items-center justify-center p-0 md:p-6 text-left">
          <div className="flex justify-center min-h-[400px]">
            {insights ? (
              <div className="flex flex-col">
                <div className="space-x-2 space-y-1 p-2">
                  <h1 className="p-2 text-xl md:text-3xl font-bold break-words">
                    {insights?.suggestedFileName}
                  </h1>
                  <p className="text-sm pb-4">{insights?.summary}</p>
                  <div className="flex space-x-2 space-y-1 flex-wrap">
                    {insights?.category && (
                      <Badge className="rounded-full bg-slate-800 dark:bg-slate-200">
                        {insights?.category}
                      </Badge>
                    )}
                    {insights?.subCategory && (
                      <Badge className="rounded-full bg-slate-500">
                        {insights?.subCategory}
                      </Badge>
                    )}
                    {insights?.tags &&
                      insights.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 rounded-full bg-secondary px-3 py-2 text-xs text-secondary-foreground"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                  </div>
                  <div className="pt-4">
                    <AdvancedInsightsSection advancedInsights={insights} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center space-y-4 my-8 md:mb-0">
                <Loader2 className="w-8 h-8 animate-spin" />
                <p className="text-sm">Attempting to preview insights here</p>
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );
}
