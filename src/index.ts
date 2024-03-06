import { findWords } from './utils';
import * as OS from 'os';


/**
 * Test Case 1
 */
try {
    console.log('Test Case 1:');
    console.log(findWords("ate", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]), "\n");
    // Expected output: ["ate", "eat", "tea"]
}
catch(e) {
    console.log(e.message, '\n');
}



/**
 * Test Case 2
 */
try {
    console.log('Test Case 2:');
    console.log(findWords("oogd", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"]), "\n");
    // Expected output: ["dog", "do", "god", "goo", "go", "good"]
}
catch (e) {
    console.log(e.message, '\n');
}



/**
 * Test Case 3
 */
try {
    console.log('Test Case 3 -- Capital Letter');
    console.log(findWords("Afterwards", ["Any", "always", "After", "And", "Art"]), "\n");
    // Expected output: Input Error
}
catch(e) {
    console.log(e.message, "\n");
}



/**
 * Test Case 4
 */
try {
    console.log('Test Case 4 -- Single Letter');
    console.log(findWords("z", ["z", "zeal", "snooze"]), "\n");
    // Expected output: ["z"]
}
catch(e) {
    console.log(e.message, "\n");
}



/**
 * Test Case 5
 */
try {
    console.log('Test Case 5 -- Empty String');
    console.log(findWords("", ["a", "any", "snooze", ""]), "\n");
    // Expected output: Input error
}
catch(e) {
    console.log(e.message, "\n");
}


/**
 * Test Case 6
 */
try {
    console.log('Test Case 6 -- Multi Word');
    console.log(findWords("race car", ["a", "are", "car", "race ", "race", "race car", "truck"]), "\n");
    // Expected output: Input error
}
catch(e) {
    console.log(e.message, "\n");
}


/**
 * Test Case 7
 */
try {
    console.log('Test Case 7 -- Long Inputs');
    console.log(findWords(
        "abcdefghijklmnopqrstuvwxyz",
        [
            'implement', 'a','function', 'named',
            'findwords', 'that', 'accepts', 'two',
            'arguments', 'an', 'input',
            'string', 'and',
            'dictionary', 'this', 'should',
            'return','array','of',
            'words','from','the',
            'can','be','formed',
            'by','rearranging','some','or',
            'all','letters'
        ]
    ), "\n");
    /**
     * Expected output:
     *   [
     *   'a','named','two',
     *   'arguments','an','input',
     *   'string','and','this',
     *   'should','of','words',
     *   'from','the','can',
     *   'be','formed','by',
     *   'some','or'
     *   ]
     */
}
catch(e) {
    console.log(e.message, "\n")
}



