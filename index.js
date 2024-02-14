const accessForm = document.querySelector('form');

accessForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
  } else {
    const bmi = Math.floor(weight / ((height * height) / 10000));
    // show the result
    results.innerHTML = `<spann> ${bmi} </span>`;
    showTxt(bmi); // to show reult in text (overweight, under, or normal)
  }
});

function showTxt(bmi) {
  const newSpan = document.createElement('span');
  newSpan.id = "conclusion";

  if (bmi < 18.6) {
    const node = document.createTextNode(`You are underweight`);
    newSpan.appendChild(node);
  } else if (bmi >= 18.6 && bmi <= 24.6) {
    const node = document.createTextNode(`You are in noraml range`);
    newSpan.appendChild(node);
  } else if (bmi > 24.9) {
    const node = document.createTextNode(`You are in overweight`);
    newSpan.appendChild(node);
  }

  accessForm.appendChild(newSpan);
}
