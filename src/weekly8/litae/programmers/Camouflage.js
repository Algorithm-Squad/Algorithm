function solution(clothes){
    const map = new Map();
    let count= 1;
  
    for(let [name, type] of clothes){
      if(map.has(type)) {
        map.set(type, map.get(type) + 1);
      } else {
        map.set(type, 1);
      }
    }

    for(let element of map.values()) count *= (element + 1);
    return count - 1;
}


// 첫 번째 접근법: 중간에 효율적이지 못한 것 같아 Map으로 구현
// function solution(clothes) {
//     let headgear = clothes.filter(element => element.includes('headgear'));
//     let eyewear = clothes.filter(element => element.includes('eyewear'));
//     let face = clothes.filter(element => element.includes('face'));
//     let numberOfHeadgear = headgear.length;
//     let numberOfEyewear = eyewear.length;
//     let numberOfFace = face.length;
    
//     if(numberOfHeadgear === 0) numberOfHeadgear = 1;
//     if(numberOfEyewear === 0) numberOfEyewear = 1;
//     if(numberOfFace === 0) numberOfFace = 1;
    
// }
