function 제곱(x) {
    function 승수(y) {
        return y ** x
    }
    return 승수
}

제곱(2); // 승수(y)
제곱(2)(10); // 100