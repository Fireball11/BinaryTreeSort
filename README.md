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
Image example of tree with elements 1,2,3,4,5,7,8
![image](https://user-images.githubusercontent.com/19509692/173438243-f9bc62e6-be0a-4271-bd21-de24ce1051ec.png)

