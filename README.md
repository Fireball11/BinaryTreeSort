# BinaryTreeSort
Its my trying to create a binary tree sort on JS. 

## First try
Tree was made, but i cant solve how to take variables.<br>
**File**: script.js

## Second try
Tree was made by using Object variables. <br>
**File**: script2.js<br>
Root variable structure:<br>
```
  Object = {
    value: 4 // or any other integer
    right: "Object with 'Object.value' bigger then this.value"
    left: "Object with 'Object.value' lower then this.value"
  }
```
Example of Object:
```
{
    "value": 4,
    "right": {
        "value": 7,
        "left": {
            "value": 6
        },
        "right": {
            "value": 9
        }
    },
    "left": {
        "value": 2
    }
}
```
