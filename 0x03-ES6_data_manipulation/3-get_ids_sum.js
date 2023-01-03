export default function getStudentIdsSum(tab) {
  const initialValue = 0;
  return tab.reduce((accumulator, currentValue) => accumulator + currentValue.id, initialValue);
}
