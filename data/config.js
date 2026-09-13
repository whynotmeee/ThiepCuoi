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
    father: "Ông Triệu Văn Thiềng",
    mother: "Bà Đỗ Thị Kế",
    photo: "/groom.jpg", // ví dụ "/groom.jpg"
  },
  bride: {
    name: "Lã Hằng",
    fullName: "Lã Thị Hằng",
    role: "Cô dâu",
    father: "Ông Lã Minh Hải",
    mother: "Bà Nguyễn Thị Hiền",
    photo: "/bride.jpg", // ví dụ "/bride.jpg"
  },

  // Thứ tự hiển thị tên: "bride" (cô dâu trước) hoặc "groom"
  nameOrder: "bride",

  // --- Ngày & giờ cưới (định dạng: YYYY-MM-DDTHH:mm:ss) dùng cho đếm ngược & lịch ---
  weddingDate: "2026-09-20T11:00:00",

  // --- Dòng chữ ngày hiển thị ở bìa (giống mẫu) ---
  dateLine1: "Chủ Nhật, 20/12/2026",
  dateLine2: "Âm lịch 2/11 | 11:00 AM",

  // --- Ảnh nền trang bìa (đặt trong /public). Để trống dùng gradient ---
  coverImage: "/cover.jpg",

  // --- Địa chỉ website sau khi deploy (dùng để tạo link ảnh xem trước khi chia sẻ) ---
  // Ví dụ: "https://thiep-cuoi.vercel.app" (KHÔNG có dấu / ở cuối)
  siteUrl: "https://thiepcuoi.vercel.app",

  // --- Ảnh xem trước khi chia sẻ lên Facebook/Zalo (đặt trong /public) ---
  // Khuyến nghị ảnh 1200x630px. Để trống sẽ không hiện ảnh preview.
  ogImage: "/og-image.jpg",

  // --- Chữ lớn điện ảnh đầu thiệp (mỗi phần tử 1 dòng) ---
  heroWords: ["YOU ARE", "THE LOVE OF", "MY LIFE"],

  // --- Thông tin thiệp mời (phần trang trọng) ---
  invitation: {
    heading: "TRÂN TRỌNG KÍNH MỜI",
    sub: "ĐẾN DỰ BUỔI TIỆC CHUNG VUI\nCÙNG GIA ĐÌNH CHÚNG TÔI VÀO LÚC",
    timeBig: "16 GIỜ 30 | THỨ BẢY | 19.09.2026",
    lunar: "(Nhằm ngày 09 tháng 08 năm Bính Ngọ)",
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
  gallery: [
    "/gallery/MRL01757.jpg",
    "/gallery/MRL01786.jpg",
    "/gallery/MRL01864.jpg",
    "/gallery/MRL02000.jpg",
    "/gallery/MRL02070.jpg",
    "/gallery/MRL02150.jpg",
    "/gallery/MRL02193.jpg",
    "/gallery/MRL02208.jpg",
    "/gallery/MRL02226.jpg",
    "/gallery/MRL02257.jpg",
    "/gallery/MRL02287.jpg",
    "/gallery/MRL02295.jpg",
    "/gallery/MRL02329.jpg",
    "/gallery/MRL02369.jpg",
    "/gallery/MRL02389.jpg",
    "/gallery/MRL02397.jpg",
    "/gallery/MRL02400.jpg",
    "/gallery/MRL02406.jpg",
    "/gallery/MRL02427.jpg",
    "/gallery/MRL02445.jpg",
    "/gallery/MRL02458.jpg",
    "/gallery/MRL02477.jpg",
    "/gallery/MRL02482.jpg",
    "/gallery/MRL02491.jpg",
    "/gallery/MRL02528.jpg",
    "/gallery/MRL02585.jpg",
    "/gallery/MRL02599.jpg",
    "/gallery/MRL02614.jpg",
    "/gallery/MRL02632.jpg",
    "/gallery/MRL02638.jpg",
    "/gallery/MRL02738.jpg",
  ],

  // --- Thông tin mừng cưới / hộp quà cưới ---
  gifts: [
    {
      owner: "Chú rể - Triệu Dũng",
      bank: "Vietcombank",
      accountNumber: "0123456789",
      accountName: "TRIEU VAN DUNG",
      // Mã BIN ngân hàng để tự sinh mã QR VietQR (xem danh sách BIN bên dưới).
      bankBin: "970436", // Vietcombank
      // Nếu bạn đã có sẵn ẢNH mã QR, đặt vào /public rồi điền tại đây,
      // ví dụ "/qr-groom.png". Có ảnh này sẽ ưu tiên dùng thay cho VietQR tự sinh.
      qr: "",
    },
    {
      owner: "Cô dâu - Lã Hằng",
      bank: "Techcombank",
      accountNumber: "9876543210",
      accountName: "LA THI HANG",
      bankBin: "970407", // Techcombank
      qr: "",
    },
  ],

  // Bảng mã BIN một số ngân hàng phổ biến (dùng cho bankBin ở trên):
  // Vietcombank 970436 | Techcombank 970407 | BIDV 970418 | VietinBank 970415
  // Agribank 970405 | MB Bank 970422 | ACB 970416 | VPBank 970432
  // Sacombank 970403 | TPBank 970423 | VIB 970441 | SHB 970443
  // MSB 970426 | OCB 970448 | SeABank 970440 | HDBank 970437

  // --- Nhạc nền (đặt file trong /public, ví dụ "/music.mp3") ---
  music: {
    src: "/i-do.mp3",
    title: "I Do",
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
