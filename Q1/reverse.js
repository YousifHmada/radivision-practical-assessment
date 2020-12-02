function reverse(sentence) {
    var words = [];
    var delimiters = [];
    // Seperate words & delimiters
    {
        let string = '';
        let re = /[a-zA-Z0-9]+/;
        let flag = undefined;
        for (let i = 0; i < sentence.length; i++) {
            let char = sentence[i];        
            if (re.test(char)) {
                if (flag === false) {
                    delimiters.push(string);
                    string = '';
                }
                string += char;
                flag = true;
            } else {
                if (flag === true) {
                    words.push(string);
                    string = '';
                }
                string += char;
                flag = false;
            }
        }
        if (string.length > 0) {
            if (flag === true) words.push(string);
            else delimiters.push(string);
        }
    }
    // Join words & delimiters
    var output = ''
    words.reverse().forEach((word, i) => {
            output += words[i] + delimiters[i]
            // Last element
            if (i + 1 === words.length) {
                output += delimiters.slice(i + 1).join('')
            }        
    });
    return output;
}