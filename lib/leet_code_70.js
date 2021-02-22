// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

function climbStairsMemo(n, memo = {}) {
    if (n === 2) return 2
    if (n === 1) return 1
    if (n === 0) return 0
    if (memo[n]) return memo[n]
    memo[n] = climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo)
    return memo[n]
}

var climbStairs = function (n) {
    if (n === 1) return 1
    let table = new Array(n + 1)
    table[0] = 0
    table[1] = 1
    table[2] = 2
    for (let i = 3; i < table.length; i++) {
        table[i] = table[i - 1] + table[i - 2]
    }
    return table[table.length - 1]
};
