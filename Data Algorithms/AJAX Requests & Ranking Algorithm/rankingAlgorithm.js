
/**
 * Given a string, returns the top data matches for that string.
 * @param {string} typedText - The text which should be matched with data.
 * @param {object} data - Object with the data containing the matches.
 * @param {number} quantity - The quantity of Top matches to be returned.
 * @returns {array} - List with the Top matches.
 */
getTopMatches = (typedText, data, quantity = 5) => {
    let successfulMatches = [];
    let minRating = 0.5;
    typedText = typedText.toLowerCase();
    for (let entry of data) {
        let lowerTitle = entry.title.toLowerCase();
        let entryRating = getTotalRating(lowerTitle, typedText);
        if (entryRating > minRating){
          newEntry = {
            title: entry.title,
            link: entry.link,
            date: entry.date,
            rating: entryRating
          };
          successfulMatches.push(newEntry);
        }
    }
    successfulMatches.sort((a, b) => (a.rating > b.rating) ? -1 : 1);

    return (successfulMatches.length > 0 && typedText.length > 0) ? successfulMatches.slice(0, quantity) : null;
}


/**
 * Given an array, returns the minimum value present in the array.
 * @param {array} arr - array to find the min.
 * @returns {number} - Min. of the array.
 */
arrayMin = (arr) => {
  return arr.reduce(
    (a, b) => ( (a < b) ? a : b )
  );
}


/**
 * Given an array, returns the maximum value present in the array.
 * @param {array} arr - array to find the max.
 * @returns {number} - Max. of the array.
 */
arrayMax = (arr) => {
  return arr.reduce(function (a, b) {
    return ( (a > b) ? a : b );
  });
}


/**
 * Retrieves the % from 0 to 1 of a relative value in a total context or the
 reverse of it.
 * @param {number} total - the total value or the 100% mark.
 * @param {number} relative - the relative value to figure out it's %.
 * @param {number} multiplier - if the value should be multiplied in order to
 increase the overall strenght, let's say you want to give more importance to
 it as in 200%.
 * @param {boolean} reverse - if the result should be reversed, for exemple when
 it is more important to get a 0% you can give higher rating in reverse.
 * @returns {number} - returns the rating.
 */
getRelativeFieldRating = (total, relative, multiplier = 1, reverse = true) => {
    let relativeRating = (reverse) ? 1 - (relative / total) : (relative / total)
    return relativeRating * multiplier
}


/**
 * Calculates rating for the given title in relation to user input.
 * @param {string} title - the title of the article
 * @param {string} typedText - text typed by user
 * @returns {number} - rating of the title in relation to the typed text.
 */
getTotalRating = (title, typedText) => {
  totalRating = 0;
  totalRating += getPerfectMatchRating(title, typedText);
  totalRating += getKeyWordRating(title, typedText);
  return totalRating
}


/**
 * Checks whether there is a perfect match between title and user input and
 give rating based on the index of the first character in title of perfect match
 * @param {string} title - the title of the article
 * @param {string} typedText - text typed by user
 * @returns {number} - rating of the title in relation to the typed text.
 */
getPerfectMatchRating = (title, typedText) => {
  let index = title.indexOf(typedText);
  let total = title.length-1;
  return (index > 0) ? getRelativeFieldRating(total, index, multiplier = 3) : 0;
}


/**
 * Calculates rating for the given title in relation to keywords from user input
 * @param {string} title - the title of the article
 * @param {string} typedText - text typed by user
 * @returns {number} - rating of the title in relation to the typed text.
 */
getKeyWordRating = (title, typedText) => {
  let keyWords = typedText.trim().split(/[\s,=?!.+:;-]+/)
  let total = title.length-1;
  let count = 0
  let index = [];
  for (var keyword of keyWords) {
    if (title.includes(keyword) && keyword.length > 3){
      index.push(title.indexOf(keyword))
      count ++
    }
  }
  return (count > 0) ? getRelativeFieldRating(total, arrayMin(index), multiplier = count) : 0;
}


makeTestP = (title, typedText) => {
    for (keyword of typedText.trim().split(" ")) {
        keyword = keyword.slice(0,-1);
        if (title.includes(keyword)){
            title = title + " "
            tempInx = title.indexOf(keyword)
            afterInx = title.slice(tempInx).indexOf(" ") + tempInx
            title = (title.slice(0,tempInx) + '*$%' + title.slice(tempInx,afterInx) + '$%*' + title.slice(afterInx))
        }
    }
    buildTestP(title.trim().split('*'))
}


buildTestP = (arr) => {
    tempStr = ''
    for (keyWord of arr) {
        if (keyWord.startsWith('$%')){
          keyWord = keyWord.slice(2,-2)
        }
        tempStr += keyWord
    }
    console.log(tempStr)
}
