import axios from "axios";
import { OPENAI_API_KEY } from "@env"; // Import API key từ .env file

// Kiểm tra API Key đã được lấy đúng chưa
console.log("OPENAI_API_KEY:", OPENAI_API_KEY);

// Hàm gọi API OpenAI để lấy phản hồi ChatGPT với cơ chế retry
export const getChatGPTResponse = async (message) => {
  const MAX_RETRIES = 5; // Số lần thử lại tối đa khi gặp lỗi 429
  let attempts = 0;

  while (attempts < MAX_RETRIES) {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions", // URL đúng cho OpenAI API (GPT-3.5 hoặc GPT-4)
        {
          model: "gpt-3.5-turbo", // Mô hình sử dụng (có thể thay đổi thành gpt-4 nếu muốn)
          messages: [
            {
              role: "user", // Người dùng yêu cầu
              content: message, // Nội dung yêu cầu từ người dùng
            },
          ],
          max_tokens: 150, // Số lượng token tối đa trong phản hồi
        },
        {
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`, // Sử dụng API key để xác thực
            "Content-Type": "application/json", // Định dạng yêu cầu là JSON
          },
        }
      );
      // Trả về phản hồi từ ChatGPT sau khi trim khoảng trắng thừa
      return response.data.choices[0].message.content.trim();
    } catch (error) {
      if (error.response && error.response.status === 429) {
        // Nếu gặp lỗi 429, đợi một thời gian trước khi thử lại
        const retryAfter = error.response.headers["retry-after"];
        const waitTime = retryAfter ? parseInt(retryAfter) * 1000 : 1000; // Giới hạn thời gian chờ, mặc định là 1 giây
        console.log(
          `Rate limit reached, retrying in ${waitTime / 1000} seconds...`
        );
        await new Promise((resolve) => setTimeout(resolve, waitTime)); // Chờ trước khi thử lại
        attempts += 1;
      } else {
        console.error("Error fetching ChatGPT response:", error);
        return "Sorry, something went wrong!"; // Trả về thông báo lỗi nếu có vấn đề
      }
    }
  }

  return "Sorry, too many requests, please try again later."; // Nếu đã thử quá số lần tối đa mà vẫn gặp lỗi
};
