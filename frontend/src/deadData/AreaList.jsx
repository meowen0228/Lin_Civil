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
AreaList.push({
  key: '#1連接站',
  text: '#1連接站',
  label: '#1連接站',
  value: '#1連接站',
});
AreaList.push({
  key: '#2連接站',
  text: '#2連接站',
  label: '#2連接站',
  value: '#2連接站',
});
AreaList.push({
  key: '#3連接站',
  text: '#3連接站',
  label: '#3連接站',
  value: '#3連接站',
});
AreaList.push({
  key: '#4連接站',
  text: '#4連接站',
  label: '#4連接站',
  value: '#4連接站',
});
export default AreaList;
