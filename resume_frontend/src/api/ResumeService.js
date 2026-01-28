import axios from "axios";

export const baseURL = "http://localhost:8080";

export const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 120000,
  headers: {
    "Content-Type": "application/json",
  },
});

// AI Generation
export const generateResume = async (description) => {
  try {
    const response = await axiosInstance.post("/api/v1/ai/generate", {
      description,
    });

    return response.data; // JSON data
  } catch (error) {
    console.error("AI Resume Error:", error);
    throw error;
  }
};

// Preview HTML
export const generatePreview = async (templateId, data) => {
  try {
    const response = await axiosInstance.post("/api/v1/resume/preview", {
      templateId,
      dataMap: data, // 🔥 SEND AS dataMap
    });

    return response.data;
  } catch (error) {
    console.error("Preview Error:", error);
    throw error;
  }
};

// PDF Generation
export const generateResumePdf = async (templateId, data) => {
  try {
    const response = await axiosInstance.post(
      "/api/v1/resume/generate",
      {
        templateId,
        dataMap: data, // 🔥 SEND AS dataMap
      },
      { responseType: "blob" }
    );

    return response.data;
  } catch (error) {
    console.error("PDF Error:", error);
    throw error;
  }
};

export const downloadBlob = (blob, filename) => {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename || "resume.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};
