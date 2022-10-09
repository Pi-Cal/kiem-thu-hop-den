const kiemTraNongDoCon = require("./kiemtra");

test("R1", () => {
  expect(kiemTraNongDoCon(-1, -1, "car")).toBe("Dữ liệu không hợp lệ");
});
test("R2", () => {
  expect(kiemTraNongDoCon(25, -1, "car")).toBe(
    "Phạt 6.000.000 - 8.000.000 đồng. Tước bằng 10 - 12 tháng"
  );
});
test("R3", () => {
  expect(kiemTraNongDoCon(60, -1, "car")).toBe(
    "Phạt 16.000.000 - 18.000.000 đồng. Tước bằng 16 - 18 tháng"
  );
});
test("R4", () => {
  expect(kiemTraNongDoCon(90, -1, "car")).toBe(
    "Phạt 30.000.000 - 40.000.000 đồng. Tước bằng 22 - 24 tháng"
  );
});
test("R5", () => {
  expect(kiemTraNongDoCon(-1, 0.1, "car")).toBe(
    "Phạt 6.000.000 - 8.000.000 đồng. Tước bằng 10 - 12 tháng"
  );
});
test("R6", () => {
  expect(kiemTraNongDoCon(25, 0.1, "car")).toBe(
    "Phạt 6.000.000 - 8.000.000 đồng. Tước bằng 10 - 12 tháng"
  );
});
test("R7", () => {
  expect(kiemTraNongDoCon(60, 0.1, "car")).toBe(
    "Phạt 16.000.000 - 18.000.000 đồng. Tước bằng 16 - 18 tháng"
  );
});
test("R8", () => {
  expect(kiemTraNongDoCon(90, 0.1, "car")).toBe(
    "Phạt 30.000.000 - 40.000.000 đồng. Tước bằng 22 - 24 tháng"
  );
});
test("R9", () => {
  expect(kiemTraNongDoCon(-1, 0.3, "car")).toBe(
    "Phạt 16.000.000 - 18.000.000 đồng. Tước bằng 16 - 18 tháng"
  );
});
test("R10", () => {
  expect(kiemTraNongDoCon(25, 0.3, "car")).toBe(
    "Phạt 16.000.000 - 18.000.000 đồng. Tước bằng 16 - 18 tháng"
  );
});
test("R11", () => {
  expect(kiemTraNongDoCon(60, 0.3, "car")).toBe(
    "Phạt 16.000.000 - 18.000.000 đồng. Tước bằng 16 - 18 tháng"
  );
});
test("R12", () => {
  expect(kiemTraNongDoCon(90, 0.3, "car")).toBe(
    "Phạt 30.000.000 - 40.000.000 đồng. Tước bằng 22 - 24 tháng"
  );
});
test("R13", () => {
  expect(kiemTraNongDoCon(-1, 0.5, "car")).toBe(
    "Phạt 30.000.000 - 40.000.000 đồng. Tước bằng 22 - 24 tháng"
  );
});
test("R14", () => {
  expect(kiemTraNongDoCon(25, 0.5, "car")).toBe(
    "Phạt 30.000.000 - 40.000.000 đồng. Tước bằng 22 - 24 tháng"
  );
});
test("R15", () => {
  expect(kiemTraNongDoCon(60, 0.5, "car")).toBe(
    "Phạt 30.000.000 - 40.000.000 đồng. Tước bằng 22 - 24 tháng"
  );
});
test("R16", () => {
  expect(kiemTraNongDoCon(90, 0.5, "car")).toBe(
    "Phạt 30.000.000 - 40.000.000 đồng. Tước bằng 22 - 24 tháng"
  );
});

test("'R(1+16)'", () => {
  expect(kiemTraNongDoCon(-1, -1, "motorbike")).toBe("Dữ liệu không hợp lệ");
});
test("'R(2+16)'", () => {
  expect(kiemTraNongDoCon(25, -1, "motorbike")).toBe(
    "Phạt 2.000.000 - 3.000.000 đồng. Tước bằng 10 - 12 tháng"
  );
});
test("'R(3+16)'", () => {
  expect(kiemTraNongDoCon(60, -1, "motorbike")).toBe(
    "Phạt 4.000.000 - 5.000.000 đồng. Tước bằng 16 - 18 tháng"
  );
});
test("'R(4+16)'", () => {
  expect(kiemTraNongDoCon(90, -1, "motorbike")).toBe(
    "Phạt 6.000.000 - 8.000.000 đồng. Tước bằng 22 - 24 tháng"
  );
});
test("'R(5+16)'", () => {
  expect(kiemTraNongDoCon(-1, 0.1, "motorbike")).toBe(
    "Phạt 2.000.000 - 3.000.000 đồng. Tước bằng 10 - 12 tháng"
  );
});
test("'R(6+16)'", () => {
  expect(kiemTraNongDoCon(25, 0.1, "motorbike")).toBe(
    "Phạt 2.000.000 - 3.000.000 đồng. Tước bằng 10 - 12 tháng"
  );
});
test("'R(7+16)'", () => {
  expect(kiemTraNongDoCon(60, 0.1, "motorbike")).toBe(
    "Phạt 4.000.000 - 5.000.000 đồng. Tước bằng 16 - 18 tháng"
  );
});
test("'R(8+16)'", () => {
  expect(kiemTraNongDoCon(90, 0.1, "motorbike")).toBe(
    "Phạt 6.000.000 - 8.000.000 đồng. Tước bằng 22 - 24 tháng"
  );
});
test("'R(9+16)'", () => {
  expect(kiemTraNongDoCon(-1, 0.3, "motorbike")).toBe(
    "Phạt 4.000.000 - 5.000.000 đồng. Tước bằng 16 - 18 tháng"
  );
});
test("'R(10+16)'", () => {
  expect(kiemTraNongDoCon(25, 0.3, "motorbike")).toBe(
    "Phạt 4.000.000 - 5.000.000 đồng. Tước bằng 16 - 18 tháng"
  );
});
test("'R(11+16)'", () => {
  expect(kiemTraNongDoCon(60, 0.3, "motorbike")).toBe(
    "Phạt 4.000.000 - 5.000.000 đồng. Tước bằng 16 - 18 tháng"
  );
});
test("'R(12+16)'", () => {
  expect(kiemTraNongDoCon(90, 0.3, "motorbike")).toBe(
    "Phạt 6.000.000 - 8.000.000 đồng. Tước bằng 22 - 24 tháng"
  );
});
test("'R(13+16)'", () => {
  expect(kiemTraNongDoCon(-1, 0.5, "motorbike")).toBe(
    "Phạt 6.000.000 - 8.000.000 đồng. Tước bằng 22 - 24 tháng"
  );
});
test("'R(14+16)'", () => {
  expect(kiemTraNongDoCon(25, 0.5, "motorbike")).toBe(
    "Phạt 6.000.000 - 8.000.000 đồng. Tước bằng 22 - 24 tháng"
  );
});
test("'R(15+16)'", () => {
  expect(kiemTraNongDoCon(60, 0.5, "motorbike")).toBe(
    "Phạt 6.000.000 - 8.000.000 đồng. Tước bằng 22 - 24 tháng"
  );
});
test("'R(16+16)'", () => {
  expect(kiemTraNongDoCon(90, 0.5, "motorbike")).toBe(
    "Phạt 6.000.000 - 8.000.000 đồng. Tước bằng 22 - 24 tháng"
  );
});
test("R(1+32)", () => {
  expect(kiemTraNongDoCon(-1, -1, "bicycle")).toBe("Dữ liệu không hợp lệ");
});
test("R(2+32)", () => {
  expect(kiemTraNongDoCon(25, -1, "bicycle")).toBe(
    "Phạt 80.000 - 100.000 đồng. "
  );
});
test("R(3+32)", () => {
  expect(kiemTraNongDoCon(60, -1, "bicycle")).toBe(
    "Phạt 200.000 - 400.000 đồng. "
  );
});
test("R(4+32)", () => {
  expect(kiemTraNongDoCon(90, -1, "bicycle")).toBe(
    "Phạt 600.000 - 800.000 đồng. "
  );
});
test("R(5+32)", () => {
  expect(kiemTraNongDoCon(-1, 0.1, "bicycle")).toBe(
    "Phạt 80.000 - 100.000 đồng. "
  );
});
test("R(6+32)", () => {
  expect(kiemTraNongDoCon(25, 0.1, "bicycle")).toBe(
    "Phạt 80.000 - 100.000 đồng. "
  );
});
test("R(7+32)", () => {
  expect(kiemTraNongDoCon(60, 0.1, "bicycle")).toBe(
    "Phạt 200.000 - 400.000 đồng. "
  );
});
test("R(8+32)", () => {
  expect(kiemTraNongDoCon(90, 0.1, "bicycle")).toBe(
    "Phạt 600.000 - 800.000 đồng. "
  );
});
test("R(9+32)", () => {
  expect(kiemTraNongDoCon(-1, 0.3, "bicycle")).toBe(
    "Phạt 200.000 - 400.000 đồng. "
  );
});
test("R(10+32)", () => {
  expect(kiemTraNongDoCon(25, 0.3, "bicycle")).toBe(
    "Phạt 200.000 - 400.000 đồng. "
  );
});
test("R(11+32)", () => {
  expect(kiemTraNongDoCon(60, 0.3, "bicycle")).toBe(
    "Phạt 200.000 - 400.000 đồng. "
  );
});
test("R(12+32)", () => {
  expect(kiemTraNongDoCon(90, 0.3, "bicycle")).toBe(
    "Phạt 600.000 - 800.000 đồng. "
  );
});
test("R(13+32)", () => {
  expect(kiemTraNongDoCon(-1, 0.5, "bicycle")).toBe(
    "Phạt 600.000 - 800.000 đồng. "
  );
});
test("R(14+32)", () => {
  expect(kiemTraNongDoCon(25, 0.5, "bicycle")).toBe(
    "Phạt 600.000 - 800.000 đồng. "
  );
});
test("R(15+32)", () => {
  expect(kiemTraNongDoCon(60, 0.5, "bicycle")).toBe(
    "Phạt 600.000 - 800.000 đồng. "
  );
});
test("R(16+32)", () => {
  expect(kiemTraNongDoCon(90, 0.5, "bicycle")).toBe(
    "Phạt 600.000 - 800.000 đồng. "
  );
});
