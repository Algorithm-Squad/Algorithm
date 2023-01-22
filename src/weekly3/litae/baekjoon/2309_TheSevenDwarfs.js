// 왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다. 일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.
// 아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. 뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다.
// 아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.


function searchFakeDwarfs () {
    // 난쟁이 9명 몸무게의 합
    let sumOfWeight = 0;

    // for문을 통해 9명의 합을 구함(reduce를 사용해도 될 듯)
    for(let i = 0; i < input.length; i++) {
        sumOfWeight += input[i]
    }

    // 진짜 일곱 난쟁이들의 몸무게의 합은 100이기 때문에 가짜 난쟁이 둘 몸무게의 합은 sumOfWeight - 100
    // for문을 통해 가짜 난쟁이 몸무게의 합이 sumOfWeight - 100가 되는 경우를 찾고, splice를 통해 가짜 난쟁이 몸무게 제거(첫 번째 splice를 통해 한 명이 제거되었기 때문에
    // 두 번째 난쟁이를 제거할 때는 y - 1(인덱스 처리)를 해야 한다
    for(x = 0; x < input.length - 1; x++) {
        for(y = x + 1; y < input.length; y++) {
            if(input[x] + input[y] === sumOfWeight - 100) {
                input.splice(x, 1);
                input.splice(y - 1, 1);
            }
        }
    }

    // 숫자 크기 순으로 정렬하기 위해 sort 매서드 사용, 그냥 sort()를 하게 되면 유니코드 순으로 정렬되기 때문에 7보다 10이 먼저 오게 된다
    // 따라서 a, b 두 개의 파라미터를 받는 compareFunction을 사용
    // compareFunction가 리턴하는 값이 0보다 클 경우 b가 a보다 앞에 오도록 정렬, 0을 리턴하면 순서가 바꾸지 않음, 리턴하는 값이 0보다 작을 경우, a가 b 앞에 오도록 정렬
    input.sort(function(a, b) {
        if(a > b) return 1;
        if(a === b) return 0;
        if(a < b) return -1;
    });

    // for문을 사용하여 작은 몸무게부터 순서대로 출력
    for(let z = 0; z < input.length; z++){
        console.log(input[z])
    }
};