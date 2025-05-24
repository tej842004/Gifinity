const position = "SECTION:2;COLUMN:1;ROW:2";
const ans = position.split(";").reduce((acc, part) => {
  console.log(part);
  const [key, value] = part.split(":");
  acc[key] = parseInt(value, 10);
  return acc;
}, {});
console.log(ans);
