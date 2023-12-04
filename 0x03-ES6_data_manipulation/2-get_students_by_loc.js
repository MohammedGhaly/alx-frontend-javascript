export default function getStudentsByLocation(list, city) {
  return list.filter((el) => el.location === city);
}
