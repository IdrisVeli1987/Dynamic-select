const cars = [
  {
    value: "Audi",
    text: "Audi",
  },
  {
    value: "Volvo",
    text: "Volvo",
  },
  {
    value: "Bmw",
    text: "Bmw",
  },
];

const rootEL = document.getElementById("root");
const h1 = document.createElement("h1");
const formEl = document.createElement("form");
const labelEl = document.createElement("label");
const selectEl = document.createElement("select");
const option = document.createElement("option");
const submitBtn = document.createElement("input");

h1.className = "heading";
h1.textContent = "Dynamic select box";

labelEl.setAttribute("name", "cars");
selectEl.id = "cars";
labelEl.textContent = "Choose a car";

cars.forEach((car) => {
  const option = document.createElement("option");
  option.value = car.value;
  option.textContent = car.text;
  selectEl.append(option);
});
const result = document.createElement("h3");
result.textContent = "Selected car: ";

submitBtn.type = "submit";
submitBtn.value = "Submit";
submitBtn.onclick = () => {
    event.preventDefault(   )
  result.textContent = `Selected car: ${selectEl.value}`;
};
formEl.append(labelEl, selectEl, submitBtn);
rootEL.append(h1, result, formEl);
