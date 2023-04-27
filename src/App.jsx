import { useState } from 'react';

import people from './data';
import Review from './Review';

const App = () => {
  const [index, setIndex] = useState(0);
  console.log({ index });
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((prev) => {
      const newIndex = prev + 1;
      // if (newIndex > people.length - 1) {
      //   return 0;
      // }
      // return newIndex;
      return checkNumber(newIndex);
    });
  };
  const previousPerson = () => {
    setIndex((prev) => {
      const newIndex = prev - 1;
      // if (newIndex < 0) {
      //   return people.length - 1;
      // }
      // return newIndex;
      return checkNumber(newIndex);
    });
  };
  return (
    <main>
      <Review
        index={index}
        people={people}
        nextPerson={nextPerson}
        previousPerson={previousPerson}
      />
    </main>
  );
};
export default App;
