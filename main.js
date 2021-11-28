// Step-1. Convert the nodelist into an array
const checkboxes = Array.from(document.querySelectorAll('.inbox [type="checkbox"]'));

let lastChecked;

// Step-3: the `checkState` variable represents the inputs in the range which are checked or not,
// it's set `false` at the begining
let checkState = false;
const handleCheck = (event) => {
  if (!lastChecked) {
    lastChecked = event.currentTarget;
  }
  checkState = !!lastChecked.checked; // (lastChecked.checked ? true : false;)

  if (event.shiftKey) {
    // Step-2: use `array.indexOf()` to get the index of seleted inputs in the array to define
    // the range (with the start point like `checkbox === lastChecked` and end point like
    // `checkbox === event.currentTarget`)
    const start = checkboxes.indexOf(lastChecked);
    const end = checkboxes.indexOf(event.currentTarget);

    // Step-4: use `array.slice()` to take all the elements between the range and change
    // their `checkState`
    checkboxes
      .slice(Math.min(start, end), Math.max(start, end) + 1)
      .forEach((input) => input.checked = checkState);

    if (start - end < 0) {
      console.log(`from first selected input ${start} to second selected input ${end} are checked`);
    } else {
      console.log(`[Backforwad]form first selected input ${start} to second selected input ${end} are checked`);
    }
  }

  lastChecked = event.currentTarget;
};

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', handleCheck);
});
