/**
 * Checks if a word contain only lowercase English letters a-z
 * @param word
 */
export function isWordLowercase(word: string): boolean {
    return /^[a-z]+$/.test(word);
}
