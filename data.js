const danhSachTrungTuyen = [
  "Kay",
  "NguyenVanA",
  "TranVanB",
  "Test123"
];

function traCuu() {
  const input = document.getElementById("searchInput").value.trim();
  const result = document.getElementById("result");

  if (!input) {
    result.innerHTML = "<div class='fail'>Vui lòng nhập tên Roblox.</div>";
    return;
  }

  if (danhSachTrungTuyen.includes(input)) {
    result.innerHTML = `
      <div class="success">
        🎉 Chúc mừng bạn  <strong>${input}</strong> 🎉 đã trúng tuyển vào nghĩa vụ quân sự.<br>
        Vui lòng chờ thông báo tiếp theo từ ban tuyển quân.
      </div>
    `;
  } else {
    result.innerHTML = `
      <div class="fail">
        ❌ Rất tiếc, bạn chưa trúng tuyển đợt này.
      </div>
    `;
  }
}
