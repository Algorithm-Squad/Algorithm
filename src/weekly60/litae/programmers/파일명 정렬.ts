function solution(files: string[]): string[] {
  return files.sort((a: string, b: string): number => {
    // 정규표현식으로 HEAD 부분을 찾기
    const aHead: string = a.match(/^\D+/)![0].toLowerCase();
    const bHead: string = b.match(/^\D+/)![0].toLowerCase();

    if (aHead < bHead) return -1;
    if (aHead > bHead) return 1;

    // 정규표현식으로 NUMBER 부분 찾기
    const aNum: number = parseInt(a.match(/\d+/)![0].replace(/^0+/, ""));
    const bNum: number = parseInt(b.match(/\d+/)![0].replace(/^0+/, ""));

    return aNum - bNum;
  });
}
