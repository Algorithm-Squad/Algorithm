function solution(new_id) {
    let recommended_id = new_id
        .toLowerCase() // 1단계
        .replace(/[^\w-.]/g, '') // 2딘계
        .replace(/\.{2,}/g, '.') // 3단계
        .replace(/^\.|\.$/g, '') // 4단계
        .replace(/^$/, 'a') // 5단계
        .substring(0, 15)
        .replace(/\.$/g, ''); // 6단계
    
    if(recommended_id.length <= 2) {
        const lastLetter = recommended_id.slice(-1);
        while (recommended_id.length <= 2) {
            recommended_id += lastLetter;
        }
    }
    return recommended_id;
}