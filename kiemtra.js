function kiemTraNongDoCon(
  concentrationPerBlood,
  concentrationPerBreath,
  vehicle
) {
  // concentrationPerBlood unit: mg/100ml
  // concentrationPerBreath unit: mg/1l
  vehicleCheck = ["car", "motorbike", "bicycle"];
  if (
    (concentrationPerBlood < 0 && concentrationPerBreath < 0) ||
    !vehicleCheck.includes(vehicle)
  )
    return "Dữ liệu không hợp lệ";
  if (concentrationPerBlood === 0 && concentrationPerBreath === 0)
    return "Không vi phạm nồng độ cồn";
  if (concentrationPerBlood <= 50) {
    if (concentrationPerBreath <= 0.25) return getLevel1Punish(vehicle);
    if (concentrationPerBreath <= 0.4) return getLevel2Punish(vehicle);
    if (concentrationPerBreath > 0.4) return getLevel3Punish(vehicle);
  }
  if (concentrationPerBlood <= 80)
    if (concentrationPerBreath <= 0.4) return getLevel2Punish(vehicle);
  if (concentrationPerBreath > 0.4) return getLevel3Punish(vehicle);
  if (concentrationPerBlood > 80 || concentrationPerBreath > 0.4)
    return getLevel3Punish(vehicle);
}

function getLevel1Punish(vehicle) {
  switch (vehicle) {
    case "car":
      return printPunish("6.000.000 - 8.000.000", "10 - 12");
    case "motorbike":
      return printPunish("2.000.000 - 3.000.000", "10 - 12");
    default:
      return printPunish("80.000 - 100.000");
  }
}

function getLevel2Punish(vehicle) {
  switch (vehicle) {
    case "car":
      return printPunish("16.000.000 - 18.000.000", "16 - 18");
    case "motorbike":
      return printPunish("4.000.000 - 5.000.000", "16 - 18");
    default:
      return printPunish("200.000 - 400.000");
  }
}

function getLevel3Punish(vehicle) {
  switch (vehicle) {
    case "car":
      return printPunish("30.000.000 - 40.000.000", "22 - 24");
    case "motorbike":
      return printPunish("6.000.000 - 8.000.000", "22 - 24");
    default:
      return printPunish("600.000 - 800.000");
  }
}

function printPunish(fee, bonus) {
  feeStr = `Phạt ${fee} đồng`;
  bonusStr = bonus ? `Tước bằng ${bonus} tháng` : "";
  return `${feeStr}. ${bonusStr}`;
}

module.exports = kiemTraNongDoCon;
