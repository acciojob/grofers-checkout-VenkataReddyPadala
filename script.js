const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;
  prices.forEach((price) => {
    total += Number(price.textContent);
  });
  const tr = document.createElement("tr");
  const td = document.createElement("td");
	 td.id = "ans";   
  td.colSpan = 2;
  td.textContent = total;
  tr.appendChild(td);
  const table = document.querySelector("table");
  table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);
