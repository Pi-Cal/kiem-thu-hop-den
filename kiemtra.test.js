const kiemTraNongDoCon = require("./kiemtra");

test("kiemTraNongDoCon(-1,-1,'none')", () => {
  expect(kiemTraNongDoCon(-1, -1, "none")).toBe("Dữ liệu không hợp lệ");
});
test("kiemTraNongDoCon(25,0.2,'car')", () => {
  expect(kiemTraNongDoCon(25, 0.2, "car")).toBe(
    "Phạt 6.000.000 - 8.000.000 đồng. Tước bằng 10 - 12 tháng"
  );
});
test("kiemTraNongDoCon(60,0.3,'motorbike')", () => {
  expect(kiemTraNongDoCon(60, 0.3, "motorbike")).toBe(
    "Phạt 4.000.000 - 5.000.000 đồng. Tước bằng 16 - 18 tháng"
  );
});
test("kiemTraNongDoCon(90,0.5,'bicycle')", () => {
  expect(kiemTraNongDoCon(90, 0.5, "bicycle")).toBe(
    "Phạt 600.000 - 800.000 đồng. "
  );
});
test("kiemTraNongDoCon(0,0,'car')", () => {
  expect(kiemTraNongDoCon(0, 0, "car")).toBe("Không vi phạm nồng độ cồn");
});
