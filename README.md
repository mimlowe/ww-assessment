## Project Structure

In this project, you'll find the `findWords` solution located at the following path:

```
/src/utils/findWords.ts
```
The `/utils` directory exports the function from `findWords.ts`.

Additionally, `/utils` contains `validators.ts`, which exports a function called `isWordLowercase`, which is used by `findWords.ts` to 
validate the input arguments
---
The entrypoint to the project is located at:
```
/src/index.ts
```

This file imports the functionality from `utils` 
and includes the necessary code to run all test cases.

---

## Running the Project

1. Run the `npm install` command from the project root
2. Run `npm run start` to transpile the typescript code and execute the program.

---

## Test Cases

### Case 1
*Inputs*
```javascript
inputString: "ate"
dictionary: [
    "ate", 
    "eat", 
    "tea", 
    "dog", 
    "do", 
    "god", 
    "goo", 
    "go", 
    "good"
]
```
*Expected Output*:
```javascript
 ["ate", "eat", "tea"]
```

---

### Case 2
```javascript
inputString: "oogd"
dictionary: [
    "ate", 
    "eat", 
    "tea", 
    "dog", 
    "do", 
    "god", 
    "goo", 
    "go", 
    "good"
]
```
*Expected Output*:
```javascript
["dog", "do", "god", "goo", "go", "good"]
```

---

### Case 3 - Capital Letters

```javascript
inputString:"Afterwards"
dictionary: ["Any", "always", "After", "And", "Art"]
```
*Expected Output*:

This test case will throw an error because the inputs do not follow the validation rules.
```javascript
Input error: Inputs must consist of lowercase letters a-z
```

---

### Case 4 - Single Letter

```javascript
inputString:"z"
dictionary: ["z", "zeal", "snooze"]
```
*Expected Output*:

```javascript
["z"]
```

---

### Case 5 - Empty String

```javascript
inputString:""
dictionary: ["a", "any", "snooze", ""]
```
*Expected Output*:

This test case will throw an error because the inputs do not follow the validation rules.
```javascript
Input error: Inputs must consist of lowercase letters a-z
```

---

### Case 6 - Multi Word

```javascript
inputString:"race car"
dictionary: ["a", "are", "car", "race ", "race", "race car", "truck"]
```
*Expected Output*:

This test case will throw an error because the inputs do not follow the validation rules.
```javascript
Input error: Inputs must consist of lowercase letters a-z
```

---

### Case 7 - Long Inputs

```javascript
inputString: "abcdefghijklmnopqrstuvwxyz"
dictionary:[
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
```
*Expected Output*:
The `inputString` is one full iteration of the alphabet, therefore the output will be all words from the dictionary
which do not contain duplicate letters.
```javascript
  [
    'a','named','two',
    'arguments','an','input',
    'string','and','this',
    'should','of','words',
    'from','the','can',
    'be','formed','by',
    'some','or'
]
```