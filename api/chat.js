// File: /api/chat.js
// Đây là code chạy trên "backend" của Vercel

import { GoogleGenerativeAI } from "@google/generative-ai";

// Tải API key từ Environment Variable (an toàn)
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { prompt } = req.body; // Lấy prompt từ frontend gửi lên

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Trả kết quả về cho frontend
    res.status(200).json({ reply: text });

  } catch (error) {
    console.error('Lỗi gọi Google AI:', error);
    res.status(500).json({ error: 'Lỗi khi gọi AI' });
  }
}