# 2D-matrix-chess-queen-moves

This was one of the first projects I built during my undergraduate studies at Rhode Island College in 2019. The idea was simple but challenging: create a 12×12 interactive grid where clicking any cell visually highlights its entire row, column, and all four diagonals — essentially showing every position a chess queen could attack from that square.

The grid is rendered as an HTML table of 144 buttons. On page load, a JavaScript 2D array is populated with random integers between 1 and 10. When a user clicks any button, the program first clears all cells, then walks through four separate traversal algorithms — north-east, north-west, south-east, and south-west — to identify and highlight every diagonal cell in yellow. The clicked cell's row is highlighted in green (marked "X"), the column in green (marked "Y"), and the clicked cell itself turns red with a "0". All remaining cells display their random number values.

I built this entirely with vanilla JavaScript and direct DOM manipulation — no frameworks, no libraries for the core logic. The HTML uses a simple table layout styled with Bootstrap 4 and CSS, while the JavaScript handles all event binding, array indexing, and traversal logic from scratch. Each diagonal traversal function manually tracks row and column boundaries using integer division and modulo arithmetic on a flat button index, which taught me a lot about mapping between 1D and 2D representations.

<img width="742" height="822" alt="image" src="https://github.com/user-attachments/assets/03818d7d-e224-48f1-936c-13558e99e2db" />

<img width="746" height="782" alt="image" src="https://github.com/user-attachments/assets/833e6184-0dcb-4b5f-a3c9-b4ff51bbf94a" />

