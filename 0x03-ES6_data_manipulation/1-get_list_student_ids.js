export default function getListStudentIds(tab) {
  if (Array.isArray(tab)) {
    const idTab = new Array(tab.length);
    let i = 0;
    tab.map((x) => {
      idTab[i] = x.id;
      i += 1;
      return idTab[i];
    });
    return idTab;
  }
  return [];
}
