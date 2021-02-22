// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

var minPathSum = function (grid) {
    let height = grid.length;
    let width = grid[0].length;
    let table = new Array(height).fill().map(() => new Array(width).fill(Infinity));
    table[0][0] = grid[0][0]
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (j < width - 1) {
                table[i][j + 1] = Math.min(table[i][j] + grid[i][j + 1], table[i][j + 1])

            }

            if (i < height - 1) {
                table[i + 1][j] = Math.min(table[i][j] + grid[i + 1][j], table[i + 1][j])
            }
        }
    }
    return table[height - 1][width - 1]
};