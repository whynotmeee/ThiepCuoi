// =====================================================================
//  THÔNG TIN THIỆP CƯỚI — CHỈNH SỬA MỌI THỨ TẠI ĐÂY
//  Bố cục mô phỏng theo phong cách "Thiệp cưới 44" (cinelove).
//  Sau khi sửa xong, lưu file lại là trang web tự cập nhật.
// =====================================================================

export const config = {
  // --- Tên cô dâu chú rể ---
  groom: {
    name: "Triệu Dũng",
    fullName: "Triệu Văn Dũng",
    role: "Chú rể",
    father: "Ông Triệu Văn A",
    mother: "Bà Nguyễn Thị B",
    photo: "", // ví dụ "/groom.jpg"
  },
  bride: {
    name: "Lã Hằng",
    fullName: "Lã Thị Hằng",
    role: "Cô dâu",
    father: "Ông Lã Văn C",
    mother: "Bà Trần Thị D",
    photo: "", // ví dụ "/bride.jpg"
  },

  // Thứ tự hiển thị tên: "bride" (cô dâu trước) hoặc "groom"
  nameOrder: "bride",

  // --- Ngày & giờ cưới (định dạng: YYYY-MM-DDTHH:mm:ss) dùng cho đếm ngược & lịch ---
  weddingDate: "2026-12-20T11:00:00",

  // --- Dòng chữ ngày hiển thị ở bìa (giống mẫu) ---
  dateLine1: "Chủ Nhật, 20/12/2026",
  dateLine2: "Âm lịch 2/11 | 11:00 AM",

  // --- Ảnh nền trang bìa (đặt trong /public). Để trống dùng gradient ---
  coverImage: "",

  // --- Chữ lớn điện ảnh đầu thiệp (mỗi phần tử 1 dòng) ---
  heroWords: ["YOU ARE", "THE LOVE OF", "MY LIFE"],

  // --- Thông tin thiệp mời (phần trang trọng) ---
  invitation: {
    heading: "TRÂN TRỌNG KÍNH MỜI",
    sub: "ĐẾN DỰ BUỔI TIỆC CHUNG VUI\nCÙNG GIA ĐÌNH CHÚNG TÔI VÀO LÚC",
    timeBig: "11 GIỜ 00 | CHỦ NHẬT | 20.12.2026",
    lunar: "(Nhằm ngày 02 tháng 11 năm Bính Ngọ)",
    placeHeading: "HÔN LỄ ĐƯỢC CỬ HÀNH TẠI",
    placeBig: "TƯ GIA NHÀ GÁI",
    placeAddress: "Số 12, Đường ABC, Phường X, TP. Hà Nội",
    mapUrl: "https://maps.google.com/?q=Hanoi",
  },

  // --- Lời ngỏ ---
  intro:
    "Gửi đến bạn tấm thiệp cưới đầy yêu thương.\nNhững ai nhận được lời mời này đều là những người đặc biệt với bọn mình.\nMong bạn và gia đình sẽ đến chung vui,\nCùng chứng kiến khoảnh khắc hạnh phúc nhất của hai đứa.\nCảm ơn vì luôn bên cạnh và yêu thương.\nBọn mình rất mong được gặp bạn trong ngày vui này! ❤️",
  introEn:
    "To Our Family And Friends,\nThank You For Celebrating Our Special Day,\nSupporting Us And Sharing Our Love.",

  // --- Các câu thơ / trích dẫn điện ảnh xen giữa các phần ---
  quotes: [
    {
      vi: "Trái tim em,\nTựa cánh chim nhỏ giữa đồng hoang,\nĐã tìm thấy bầu trời của riêng mình\nTrong đôi mắt anh.",
      en: "My heart, the bird of the wilderness has found its sky in your eyes.",
      words: ["Welcome", "To", "Wedding"],
    },
    {
      vi: "Có lẽ thế gian này có vô vàn điều tươi đẹp,\nNhưng trong lòng em, đẹp nhất vẫn chỉ có anh.",
      en: "I love three things in this world.\nSun, moon and you.\nSun for morning, moon for night, and you forever.",
      words: ["MY LOVE", "FOREVER"],
    },
    {
      vi: "Đi một vòng lớn rồi vẫn gặp anh,\nTừ đó, thế gian bỗng hóa dịu dàng.",
      en: "",
      words: ["love", "Fall in", "Wedding"],
    },
    {
      vi: "Hạnh phúc lớn nhất chính là được nắm tay anh,\nCùng nhau đi hết cuộc đời lãng mạn này.",
      en: "",
      words: [],
    },
  ],

  // --- Album ảnh (đặt ảnh trong /public/gallery và liệt kê ở đây) ---
  // Ví dụ: "/gallery/1.jpg". Để trống sẽ dùng ảnh placeholder.
  gallery: [],

  // --- Thông tin mừng cưới / hộp quà cưới ---
  gifts: [
    {
      owner: "Chú rể - Triệu Dũng",
      bank: "Vietcombank",
      accountNumber: "0123456789",
      accountName: "TRIEU VAN DUNG",
    },
    {
      owner: "Cô dâu - Lã Hằng",
      bank: "Techcombank",
      accountNumber: "9876543210",
      accountName: "LA THI HANG",
    },
  ],

  // --- Nhạc nền (đặt file trong /public, ví dụ "/music.mp3") ---
  music: {
    src: "",
    title: "Close To You",
  },

  // --- Lời chúc chạy (giống thanh lời chúc của mẫu) ---
  blessings: [
    { name: "Quang", text: "🎊 Chúc hai bạn luôn vui vẻ, thấu hiểu và nâng đỡ nhau!" },
    { name: "Thanh", text: "🕊️ Tân hôn hạnh phúc, trăm năm bên nhau!" },
    { name: "Đức", text: "🥂 Một hành trình hạnh phúc đang chờ đón hai bạn!" },
    { name: "Hiền", text: "💐 Chúc hai bạn trăm năm hòa hợp, hạnh phúc!" },
  ],

  // --- Câu cuối + hashtag ---
  closingQuote:
    "\"Hết lần này đến lần khác, đem chuyện tình riêng khoe với thế gian,\nChỉ vì mỗi lần nhìn em, anh lại thấy đó là điều đáng tự hào nhất.\"",
  thankYou:
    "Cảm ơn bạn đã dành thời gian ghé thăm thiệp cưới của bọn mình. Rất mong được gặp bạn trong ngày vui này!",
  hashtag: "#DungHang2026",
};

export default config;
