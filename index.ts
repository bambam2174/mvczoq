import { of } from 'rxjs'

let sum = 0;

of(1, 2, 3).subscribe(
  value => {
    console.log('Adding: ' + value);
    sum = sum + value;
  },
  undefined,
  () => console.log('Sum equals: ' + sum)
);

// Logs:
// "Adding: 1"
// "Adding: 2"
// "Adding: 3"
// "Sum equals: 6"