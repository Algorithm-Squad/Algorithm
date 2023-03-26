function solution(id_list, report, k) {
    const set = [...new Set(report)].map(element => element.split(' '));
    const reportedUser = set.map(element => element[1]);
    const reportCount = new Array(id_list.length).fill(0);
    const reportedKUser = new Array();
    const result = new Array(id_list.length).fill(0);
    
    reportedUser.forEach(user => {
        reportCount[id_list.indexOf(user)]++;
    })
    
    reportCount.forEach((user,index) => {
        if(user >= k) reportedKUser.push(id_list[index]);
    })

    set.forEach((user,index) => {
        if(reportedKUser.includes(user[1])){
            result[id_list.indexOf(user[0])]++;
        }
    })

    return result;
}

// function solution(id_list, report, k) {
//     const set = [...new Set(report)].map(element => element.split(' '));
//     const reportedUser = set.map(element => element[1]);
//     const countResult = [];
//     const receivedMailUser = [];
//     const result = new Array(id_list.length).fill(0);
    
//     for(let i = 0; i < id_list.length; i++) {
//         let count = 0;
//         for(let j = 0; j < reportedUser.length; j++) {
//             if(id_list[i] === reportedUser[j]) {
//                 count++
//             }
//         }
//         countResult.push(count);
//     }
    
//     countResult.filter((element, index) => {
//         if(element >= k) receivedMailUser.push(reportedUser[index])
//     })
    
//     set.forEach((element,index) => {
//          if(receivedMailUser.includes(element[1])){
//             result[id_list.indexOf(element[0])]++;
//          }
//     });
// }