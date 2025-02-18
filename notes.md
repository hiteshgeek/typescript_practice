--
**Installation**

Project based installation

npm install typescript --save-dev

Install globally

npm install -g typescript

null \* 123 = 0  
**Reason:**  
When null is used in a mathematical operation, JavaScript coerces it to a number.

---

undefined \* 123 = NaN  
**Reason:**  
When undefined is used in a mathematical operation, JavaScript tries to convert it to a number.  
Since undefined converts to NaN (Not-a-Number), any arithmetic operation with NaN results in NaN.

---

[] == [] = false  
**Reason:**  
Each [] creates a new array object in memory.  
The == operator checks if both references point to the same object.  
Since two different empty arrays are distinct objects, the result is false.

---

[] == "" = true  
**Reason:**  
JavaScript performs type coercion due to the loose equality (==).  
The == operator attempts to convert both operands to a common type.  
An empty array ([]) is converted to a string.

---

TypeScript uses static type checking, which means it can detect errors without running the code.

---

const data = { height: 10, width: 20 };

data.heigth = 20; // Typo: 'heigth' instead of 'height'

console.log(data);

**JavaScript Behaviour**

JavaScript objects are dynamic, meaning you can add new properties at runtime.
Since data is an object, JavaScript allows data.heigth = 20, even though heigth was not originally declared.
However, it's a typo, so instead of updating height, it creates a new property heigth.
No error, but a new unintended property is added.

**TypeScript Behaviour**

TypeScript enforces strict type checking.
The type { height: number; width: number } only allows height and width.
Since heigth (wrong spelling) is not defined in the type, TypeScript prevents this mistake.

**type aliases**
