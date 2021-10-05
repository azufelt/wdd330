





let count = 0;

      const clickArea = document.querySelectorAll(".box");
      // console.log(clickArea);
    
      for (let i = 0; i < clickArea.length; i++) {
        clickArea[i].addEventListener("click", boxClick);
      }
      // This was our first attempt at putting in x's
      // function boxClick() {
      // const token = document.createElement('p')
      // token.textContent = "X"
      // this.append(token);
      // }

      // This is our second attempt
      function boxClick() {
        if (this.innerHTML == "") {
          if (count < 9) {
            if (count % 2 == 0) {
              this.innerHTML = "x";
            } else {
              this.innerHTML = "o";
            }
          }
          count++;
        }
        checkWinner();
      }
      const winningList = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      function checkWinner(boxClick) {
        // Tanner/Ben wanted to write this later
        var target = boxClick.target;
        }
      
      const butt = document
        .querySelector("button")
        .addEventListener("click", () => {
          window.location.reload();
        });

        