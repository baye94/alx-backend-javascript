export default function getStudentsByLocation(tab, para) {
  return tab.filter((x) => x.location === para);
}
