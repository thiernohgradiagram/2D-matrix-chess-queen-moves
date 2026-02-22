# 2D-matrix-chess-queen-moves

This was one of the first projects I built during my undergraduate studies at Rhode Island College in 2019. The idea was simple but challenging: create a 12×12 interactive grid where clicking any cell visually highlights its entire row, column, and all four diagonals — essentially showing every position a chess queen could attack from that square.

The grid is rendered as an HTML table of 144 buttons. On page load, a JavaScript 2D array is populated with random integers between 1 and 10. When a user clicks any button, the program first clears all cells, then walks through four separate traversal algorithms — north-east, north-west, south-east, and south-west — to identify and highlight every diagonal cell in yellow. The clicked cell's row is highlighted in green (marked "X"), the column in green (marked "Y"), and the clicked cell itself turns red with a "0". All remaining cells display their random number values.

I built this entirely with vanilla JavaScript and direct DOM manipulation — no frameworks, no libraries for the core logic. The HTML uses a simple table layout styled with Bootstrap 4 and CSS, while the JavaScript handles all event binding, array indexing, and traversal logic from scratch. Each diagonal traversal function manually tracks row and column boundaries using integer division and modulo arithmetic on a flat button index, which taught me a lot about mapping between 1D and 2D representations.

<img width="593" height="617" alt="image" src="https://github.com/user-attachments/assets/e8961526-ab3f-476b-83ed-22ca2f516988" />

<img width="615" height="632" alt="image" src="https://github.com/user-attachments/assets/1a50b2a4-5184-40df-9493-5ddfd105b5fd" />


