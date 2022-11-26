const AreaList = [{
  key: 'All',
  text: 'All',
  label: 'All',
  value: 'All',
}];
for (let i = 0; i < 7; i += 1) {
  const obj = {
    key: String.fromCharCode(i + 65),
    text: String.fromCharCode(i + 65),
    label: String.fromCharCode(i + 65),
    value: String.fromCharCode(i + 65),
  };
  AreaList.push(obj);
}
AreaList.push({
  key: 'E1',
  text: 'E1',
  label: 'E1',
  value: 'E1',
});
AreaList.push({
  key: 'G1',
  text: 'G1',
  label: 'G1',
  value: 'G1',
});
AreaList.push({
  key: 'HIJ',
  text: 'HIJ',
  label: 'HIJ',
  value: 'HIJ',
});
export default AreaList;
