import { useState } from 'react';

import people from './data';
import Review from './Review';

const App = () => {
  const [index, setIndex] = useState(0);
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
  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    // sometimes we will get same index
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    // we have problem if we get last index
    // setIndex(randomIndex);
    setIndex(checkNumber(randomIndex));
  };

  return (
    <main>
      <Review
        index={index}
        people={people}
        nextPerson={nextPerson}
        previousPerson={previousPerson}
        randomPerson={randomPerson}
      />
    </main>
  );
};
export default App;
