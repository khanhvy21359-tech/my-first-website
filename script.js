function analyzeCV() {
  const cvInput = document.getElementById("cvInput");
  const result = document.getElementById("result");

  if (!cvInput || !result) {
    alert("❌ Thiếu phần tử HTML (kiểm tra id)");
    return;
  }

  const text = cvInput.value.trim();

  if (text === "") {
    result.innerHTML = "<p style='color:red'>⚠️ Bạn chưa dán CV</p>";
    return;
  }

  const lower = text.toLowerCase();

  // Phân tích cơ bản
  const hasExperience = lower.includes("kinh nghiệm");
  const hasSkills = lower.includes("kỹ năng");
  const hasEducation = lower.includes("học vấn") || lower.includes("giáo dục");
  const hasContact = lower.includes("email") || lower.includes("điện thoại");

  const wordCount = text.split(/\s+/).length;

  result.innerHTML = `
    <h2>📊 KẾT QUẢ PHÂN TÍCH CV</h2>
    <ul>
      <li>📝 Số từ: <b>${wordCount}</b></li>
      <li>📌 Kinh nghiệm: ${hasExperience ? "✅ Có" : "❌ Chưa thấy"}</li>
      <li>🛠 Kỹ năng: ${hasSkills ? "✅ Có" : "❌ Chưa thấy"}</li>
      <li>🎓 Học vấn: ${hasEducation ? "✅ Có" : "❌ Chưa thấy"}</li>
      <li>📞 Thông tin liên hệ: ${hasContact ? "✅ Có" : "❌ Chưa thấy"}</li>
    </ul>
    <hr>
    <h3>💡 Gợi ý cải thiện</h3>
    <ul>
      ${!hasExperience ? "<li>➕ Nên bổ sung mục <b>Kinh nghiệm</b></li>" : ""}
      ${!hasSkills ? "<li>➕ Nên bổ sung mục <b>Kỹ năng</b></li>" : ""}
      ${!hasEducation ? "<li>➕ Nên bổ sung mục <b>Học vấn</b></li>" : ""}
      ${!hasContact ? "<li>➕ Nên bổ sung <b>Email / SĐT</b></li>" : ""}
    </ul>
  `;
}
