// const wordSearch = (letters, word) => { 
//     const horizontalJoin = letters.map(ls => ls.join(''))
//     for (l of horizontalJoin) {
//         if (l.includes(word)) return true
//     }   if (!l.includes(word)) return false
// }


function wordSearch(grid, word) {
    const numRows = grid.length;
    const numCols = grid[0].length;
  
    // Helper function to check if the word is found horizontally
    function checkHorizontal(row, col) {
      for (let i = 0; i < word.length; i++) {
        if (col + i >= numCols || grid[row][col + i] !== word[i]) {
          return false;
        }
      }
      return true;
    }
  
    // Helper function to check if the word is found vertically
    function checkVertical(row, col) {
      for (let i = 0; i < word.length; i++) {
        if (row + i >= numRows || grid[row + i][col] !== word[i]) {
          return false;
        }
      }
      return true;
    }
  
    // Main search function
    function searchWord() {
      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
          if (checkHorizontal(row, col) || checkVertical(row, col)) {
            return true;
          }
        }
      }
      return false;
    }
  
    return searchWord();
  }

module.exports = wordSearch
    
