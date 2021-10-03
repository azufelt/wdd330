
    // Get your shorts on - this is an array workout!
      // ## Array Cardio Day 1
      // Some data we can work with
      const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];
      const people = [
        'Beck, Glenn',
        'Becker, Carl',
        'Beckett, Samuel',
        'Beddoes, Mick',
        'Beecher, Henry',
        'Beethoven, Ludwig',
        'Begin, Menachem',
        'Belloc, Hilaire',
        'Bellow, Saul',
        'Benchley, Robert',
        'Benenson, Peter',
        'Ben-Gurion, David',
        'Benjamin, Walter',
        'Benn, Tony',
        'Bennington, Chester',
        'Benson, Leana',
        'Bent, Silas',
        'Bentsen, Lloyd',
        'Berger, Ric',
        'Bergman, Ingmar',
        'Berio, Luciano',
        'Berle, Milton',
        'Berlin, Irving',
        'Berne, Eric',
        'Bernhard, Sandra',
        'Berra, Yogi',
        'Berry, Halle',
        'Berry, Wendell',
        'Bethea, Erin',
        'Bevan, Aneurin',
        'Bevel, Ken',
        'Biden, Joseph',
        'Bierce, Ambrose',
        'Biko, Steve',
        'Billings, Josh',
        'Biondo, Frank',
        'Birrell, Augustine',
        'Black, Elk',
        'Blair, Robert',
        'Blair, Tony',
        'Blake, William'
      ];
      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's
      const inventors_1500s = inventors.filter(inventor => (inventor.year < 1600) && (inventor.year >= 1500));
      console.log(inventors_1500s);
      document.querySelector("#num1").innerHTML = JSON.stringify(inventors_1500s);
      // Array.prototype.map()
      // 2. Give us an array of the inventors' first and last names
      const names = inventors.map(function(currentValue) {
        return currentValue.first + " " + currentValue.last;
      });
      console.log(names);
      document.querySelector("#num2").innerHTML = names;
      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest
      const sortedInventors = inventors.sort(function(a, b) {
        return a.year - b.year;
      });
      console.log(sortedInventors);
      document.querySelector("#num3").innerHTML = JSON.stringify(sortedInventors);
      // Array.prototype.reduce()
      // 4. How many years did all the inventors live?
      const totalYears = inventors.reduce(function(total, current) {
        return total + (current.passed - current.year);
      }, 0);
      console.log(totalYears);
      document.querySelector("#num4").innerHTML = totalYears;
      // 5. Sort the inventors by years lived
      const ageSortedInventors = inventors.sort(function(a, b) {
        return (a.passed - a.year) - (b.passed - b.year);
      });
      console.log(ageSortedInventors);
     
      
      // Note: This completely unneccesarry code is creating a new
      // array of inventors WITH an extra age perameter.
      const extraValue = ageSortedInventors.map(function(current) {
        return {first:current.first,
          last:current.last,
          year:current.year,
          passed:current.passed,
          age:current.passed - current.year};
      });
      console.log(extraValue);
      document.querySelector("#num5").innerHTML = JSON.stringify(extraValue);
      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      // goto the link above and open the console. Paste the following two lines in.  That will create a list of links in memory that you can reference through the console. Use that list to finish the problem.
      // const category = document.querySelector('.mw-category');
      // const links = Array.from(category.querySelectorAll('a'));
      // const de_streets = links.map(function(current) {return current.innerText});
      // de_streets.filter(function(current){return current.includes("de")});
      // did it :)
      // 0: "Boulevard de l'Amiral-Bruix"
      // 1: "Boulevard des Capucines"
      // 2: "Boulevard de la Chapelle"
      // 3: "Boulevard de Clichy"
      // 4: "Boulevard de l'Hôpital"
      // 5: "Boulevard des Italiens"
      // 6: "Boulevard de la Madeleine"
      // 7: "Boulevard de Magenta"
      // 8: "Boulevard Marguerite-de-Rochechouart"
      // 9: "Boulevard de Sébastopol"
      // 10: "Boulevard de Strasbourg"
      // 11: "Boulevard de la Zone"
      // 7. sort Exercise
      // Sort the people alphabetically by last name
      const peopleSortedByNameAlphabetically = people.sort();
      console.log(peopleSortedByNameAlphabetically);
      document.querySelector("#num7").innerHTML = peopleSortedByNameAlphabetically;
      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = [
        'car',
        'car',
        'truck',
        'truck',
        'bike',
        'walk',
        'car',
        'van',
        'bike',
        'walk',
        'car',
        'van',
        'car',
        'truck'
      ];
      const dataFrequency = data.reduce(function(objectFrequenciesContainer, currentBitOfData) {
        if(!objectFrequenciesContainer[currentBitOfData]) {
          objectFrequenciesContainer[currentBitOfData] = 0;
        }
        objectFrequenciesContainer[currentBitOfData]++;
        return objectFrequenciesContainer;
      }, {});
      console.log(dataFrequency);
      const carTotals = JSON.stringify(dataFrequency);
      document.querySelector("#num8").innerHTML = carTotals;
      //{car: 5, truck: 3, bike: 2, walk: 2, van: 2}
// bike: 2
// car: 5
// truck: 3
// van: 2
// walk: 2
 
    // ## Array Cardio Day 2
    const people2 = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];
    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];
    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    const olderThan_19 = people2.some(function(current) {
      return (2021 - current.year) > 19;
    });
    console.log(olderThan_19);
    document.querySelector("#num10").innerHTML=olderThan_19;
    // Array.prototype.every() // is everyone 19 or older?
    const allOlderThan_19 = people2.every(current => 2021 - current.year > 19);
    console.log(allOlderThan_19);
    document.querySelector("#num11").innerHTML= allOlderThan_19;
    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    const found_comment = comments.find(current => current.id === 823423);
    console.log(found_comment);
    document.querySelector("#num12").innerHTML= found_comment.text + "<br>" + found_comment.id;
    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    comments.splice(comments.indexOf(found_comment), 1);
    console.log(comments);
    document.querySelector("#num13").innerHTML=comments.length;

