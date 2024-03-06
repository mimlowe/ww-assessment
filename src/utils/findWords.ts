
/**
 * Given a key and a Map, increments the numerical value for the given key by 1.
 * If the Map has no value for the key, the value is set to 1.
 *
 * @param key Character key for which the associated value will increment
 * @param map Map reference upon which the operations are performed
 */
function incrementOccurrence(key: string, map: Map<string, number>) {
    // Check if the map contains a value for key
    if (map.has(key)) {
        // Get the value
        let val: number | undefined = map.get(key);
        if (val) {
            // Increment the value
            val++;
            // Set the updated value
            map.set(key, val);
        }
    }
    // Map does not yet contain a value for key
    else {
        // Set the value to 1
        map.set(key, 1);
    }
}

/**
 * Returns an array of words from the dictionary that can be formed by rearranging
 * some or all of the letters in the input string.
 * Each letter in the input string may be used up to once per word.
 * @param inputString
 * @param dictionary
 */
export function findWords(inputString: string, dictionary:string[]): string[] {
    // Initialize result array. We'll use this to store words which can be spelled using
    // the characters provided in the inputString.
    const result: string[] = [];

    // Initialize a map to store the occurrence count for each character of the inputString
    const inputMap: Map<string, number> = new Map<string, number>();

    // Count the occurrences of each character in the input string
    for (const c of inputString) {
        incrementOccurrence(c, inputMap)
    }

    // Iterate through the dictionary words.
    for (const word of dictionary) {

        // Since each character of the inputString may only be used once,
        // we can skip any dictionary entries that are longer than the inputString.
        if (word.length > inputString.length) continue;

        // Initialize a map to store the character occurrence counts for the current dictionary word
        const wordMap: Map<string, number> = new Map<string, number>();

        // Optimistically set a flag indicating that this word is valid.
        let validWord: boolean = true;

        // Iterate through the characters of the current dictionary word
        for (const c of word) {

            // We want check how many times this character occurs in our inputString
            let charCountInput: number | undefined = inputMap.get(c);
            if (!charCountInput) charCountInput = 0;

            // We also want to check how many times the character occurs in the current dictionary word.
            let charCountWord: number | undefined = wordMap.get(c);

            // If no value was encountered, then we've encountered this character for the first time.
            // We'll consider the count to be 1 on this iteration because we
            // have not yet performed the logic to increment the value in wordMap.
            if (!charCountWord) charCountWord = 1;

            // If the occurrence count exceeds what is available in the inputString,
            // then we can stop processing the current dictionary word because it is no longer valid.
            if (charCountWord > charCountInput) {
                validWord = false;
                break;
            }

            // If we've reached this point, we want to increment the occurrence count for this character
            incrementOccurrence(c, wordMap);
        }

        // We have completed iterating through the current dictionary word.
        // If the validWord flag is still true, then it means we have sufficient
        // characters in the inputString.
        if (validWord) {
            // In this case, we will add the current dictionary word to our result array.
            result.push(word);
        }
    }

    return result;
}

