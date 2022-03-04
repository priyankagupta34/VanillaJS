import "./styles.css";

(async function fetchAllComment() {
  const allCommentsURL = "https://jsonplaceholder.typicode.com/comments";
  const allcomments = await fetch(allCommentsURL);
  const response = await allcomments.json();
  let startIndexHere = 0;
  const appBody = document.getElementById("cards");

  const showMoreBtn = document.getElementById("showmore");

  showMoreBtn.onclick = function () {
    startIndexHere += 9;
    displayData(startIndexHere);
  };

  function displayData(startIndex) {
    startIndexHere = startIndex;
    appBody.innerHTML = null;
    for (var i = 0; i < 9; i++) {
      appBody.innerHTML += `
      <div class="card">
        <div class="titlbod">
            <span class="titlbox"> </span> <span class="title"><b>${
              i + startIndex
            }</b> ${response[i + startIndex].name} </span>
        </div>
        <div class="separter"><div/>
        <div class="responbody"> ${response[i + startIndex].body}</div>
        <div class="separter"><div/>
        <div class="action">
          <div class="btm">
            <button class="btn">Buy Now</button>
            <button class="btn">Add Cart</button>
          </div>
        </div>
      </div>`;
    }
  }
  const getBtn = document.getElementById("pagein");
  function displayPagination() {
    const page = Math.ceil(response.length / 9);
    for (let i = 0; i < page; i = i + 9) {
      getBtn.innerHTML += `
      <button class="btnPage" id=${"hj" + i}>${i}</button>
      `;

      setTimeout(() => {
        const gh = document.getElementById(`${"hj" + i}`);
        if (startIndexHere === 0) {
          document.getElementById("hj0").classList.add("colorVok");
        }
        gh.onclick = function () {
          displayData(i);
        };
      }, 0);
    }
  }

  displayPagination();

  document.getElementById("pagein").addEventListener("click", function () {
    let btnPageELEM = document.getElementById(`${"hj" + startIndexHere}`);
    if (btnPageELEM) {
      var elems = document.querySelectorAll(".btnPage");
      elems.forEach(function (el) {
        el.classList.remove("colorVok");
      });
      btnPageELEM.classList.add("colorVok");
    }
  });

  displayData(0);
})();
