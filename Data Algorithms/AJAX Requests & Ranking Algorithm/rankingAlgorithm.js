
/**
 * Given a string, returns the top data matches for that string.
 * @param {string} typed_text - The text which should be matched with data.
 * @param {object} data - Object with the data containing the matches.
 * @param {number} quantity - The quantity of Top matches to be returned.
 * @returns {array} - List with the Top matches.
 */
getTopMatches = (typed_text, data, quantity = 5) => {
    successfulMatches = [];
    typed_text = typed_text.toLowerCase();
    for (var i of data) {
        var lowerTitle = i.title.toLowerCase();
        if (lowerTitle.includes(typed_text)){
            newEntry = {};
            newEntry.title = i.title;
            newEntry.link = i.link;
            newEntry.date = i.date;
            newEntry.rating = lowerTitle.indexOf(typed_text);
            successfulMatches.push(newEntry);
        }
    }
    successfulMatches.sort((a, b) => (a.rating > b.rating) ? 1 : -1);

    return (successfulMatches.length > 0 && typed_text.length > 0) ? successfulMatches.slice(0, quantity) : null;
}
