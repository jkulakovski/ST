function Lowest(arr) {
  let sortArr = arr.sort((x,y) => x - y);
  let uniqArr = sortArr.filter((item, pos) => sortArr.indexOf(item) === pos);
  return uniqArr[2];
}
Lowest([54,23,1,2,4,6,2,6,6,7,1,8,9,10]);