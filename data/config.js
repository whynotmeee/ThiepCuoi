// =====================================================================
//  THÔNG TIN THIỆP CƯỚI — CHỈNH SỬA MỌI THỨ TẠI ĐÂY
//  Sau khi sửa xong, lưu file lại là trang web tự cập nhật.
// =====================================================================

export const config = {
  // --- Tên cô dâu chú rể ---
  groom: {
    name: "Triệu Dũng",
    fullName: "Triệu Văn Dũng",
    role: "Chú rể",
    // Bố mẹ chú rể
    father: "Ông Triệu Văn A",
    mother: "Bà Nguyễn Thị B",
    // Ảnh (đặt trong thư mục /public, ví dụ: "/groom.jpg")
    photo: "",
  },
  bride: {
    name: "Lã Hằng",
    fullName: "Lã Thị Hằng",
    role: "Cô dâu",
    // Bố mẹ cô dâu
    father: "Ông Lã Văn C",
    mother: "Bà Trần Thị D",
    photo: "",
  },

  // Thứ tự hiển thị tên ngoài bìa: "bride" (cô dâu trước) hoặc "groom"
  nameOrder: "bride",

  // --- Ngày & giờ cưới (định dạng: YYYY-MM-DDTHH:mm:ss) ---
  weddingDate: "2026-12-20T11:00:00",
  // Ngày âm lịch (hiển thị text, tuỳ chọn)
  lunarDate: "Mùng 2 tháng 11 năm Bính Ngọ",

  // --- Ảnh nền trang bìa (đặt trong /public, ví dụ "/cover.jpg"). Để trống dùng gradient ---
  coverImage: "",

  // --- Lời ngỏ ---
  intro:
    "Gửi đến bạn tấm thiệp cưới đầy yêu thương. Những ai nhận được lời mời này đều là những người đặc biệt với chúng mình. Mong bạn và gia đình sẽ đến chung vui, cùng chứng kiến khoảnh khắc hạnh phúc nhất của hai đứa. Cảm ơn vì đã luôn bên cạnh và yêu thương.",

  // --- Các câu thơ / trích dẫn điện ảnh xen giữa các phần ---
  quotes: [
    {
      big: ["Fall", "in", "Love"],
      vi: "Đi một vòng lớn rồi vẫn gặp nhau, từ đó thế gian bỗng hoá dịu dàng.",
      en: "My heart, the bird of the wilderness, has found its sky in your eyes.",
    },
    {
      big: ["My", "Love", "Forever"],
      vi: "Có lẽ thế gian này có vô vàn điều tươi đẹp, nhưng trong lòng em, đẹp nhất vẫn chỉ có anh.",
      en: "I love three things in this world: sun, moon and you. Sun for morning, moon for night, and you forever.",
    },
    {
      big: ["Sweet", "Wedding"],
      vi: "Hạnh phúc lớn nhất chính là được nắm tay nhau, cùng đi hết cuộc đời lãng mạn này.",
      en: "Sun, moon and you — you forever.",
    },
  ],

  // --- Câu chuyện tình yêu (mỗi mốc là 1 phần) ---
  story: [
    {
      title: "Lần đầu gặp gỡ",
      date: "2021",
      text: "Chúng mình tình cờ gặp nhau trong một buổi chiều mùa thu, và một câu chuyện đẹp đã bắt đầu.",
    },
    {
      title: "Hẹn hò",
      date: "2022",
      text: "Những chuyến đi, những bữa cơm, những buổi tối trò chuyện đã khiến chúng mình hiểu rằng đây là người mình muốn đi cùng cả đời.",
    },
    {
      title: "Lời cầu hôn",
      date: "2025",
      text: "Dưới ánh nến lung linh, một câu hỏi đã được cất lên và một cái gật đầu hạnh phúc đã đáp lại.",
    },
    {
      title: "Về chung một nhà",
      date: "2026",
      text: "Và hôm nay, chúng mình chính thức nắm tay nhau bước vào một hành trình mới.",
    },
  ],

  // --- Các sự kiện (lễ cưới) ---
  events: [
    {
      title: "Lễ Vu Quy",
      time: "9:00 - Chủ Nhật, 20/12/2026",
      venue: "Tư gia nhà gái",
      address: "Số 12, Đường ABC, Phường X, Quận Y, TP. Hà Nội",
      mapUrl: "https://maps.google.com/?q=Hanoi",
    },
    {
      title: "Tiệc Cưới",
      time: "11:00 - Chủ Nhật, 20/12/2026",
      venue: "Trung tâm tiệc cưới Diamond Palace",
      address: "Số 99, Đại lộ Thăng Long, Nam Từ Liêm, TP. Hà Nội",
      mapUrl: "https://maps.google.com/?q=Hanoi",
    },
  ],

  // --- Album ảnh (đặt ảnh trong /public/gallery và liệt kê ở đây) ---
  // Ví dụ: "/gallery/1.jpg". Để trống sẽ dùng ảnh placeholder.
  gallery: [],

  // --- Thông tin mừng cưới ---
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
    title: "Nhạc nền",
  },

  // --- Lời cảm ơn & hashtag ---
  thankYou:
    "Cảm ơn bạn đã dành thời gian ghé thăm thiệp cưới của chúng mình. Rất mong được gặp bạn trong ngày vui này!",
  hashtag: "#DungHang2026",
};

export default config;
