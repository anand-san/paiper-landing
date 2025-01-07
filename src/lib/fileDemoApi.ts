import { DemoLimits, DemoResponse } from "./InsightsResponseTypes";

const API_BASE_URL = "https://my.paiper.app";

export const processDemoFile = async (file: File) => {
  try {
    return await uploadDemoFile(file);
  } catch (error) {
    throw error;
  }
};

export const getDemoLimits = async (): Promise<DemoLimits> => {
  try {
    const response = await fetch(`${API_BASE_URL}/demo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: DemoLimits = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    throw error;
  }
};

export const uploadDemoFile = async (file: File): Promise<DemoResponse> => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${API_BASE_URL}/demo`, {
      method: "POST",
      body: formData,
    });

    const data: DemoResponse = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    throw error;
  }
};
