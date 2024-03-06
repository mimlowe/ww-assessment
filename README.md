## Project Structure

In this project, you'll find the `findWords` solution located at the following path:

```
/src/utils/findWords.ts
```
The `/utils` directory exports the function from `findWords/ts`.


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