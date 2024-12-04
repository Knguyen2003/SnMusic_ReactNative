module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env", // Cấu hình module cho biến môi trường
          path: ".env", // Đường dẫn tới file .env
          blocklist: null, // Danh sách các biến cần chặn
          allowlist: null, // Danh sách các biến cho phép
          safe: false, // Kiểm tra biến môi trường có đủ không
          allowUndefined: true,
          verbose: false,
        },
      ],
    ],
  };
};