
function Start() {
    let Lenght = prompt("Введите количество элементов")
    let Arr = []
    for (let i = 0; i < Lenght; i++) {
        Arr[i] = new Object();
        Arr[i].value = parseInt(prompt("Введите число"));


        if (i != 0) {
            TreeBuilding(Arr[i], Arr[0]);
        }
    }
    OBJECT = Arr[0];
    console.log(OBJECT)
}

function TreeBuilding(Val, Root) {
    if (Val.value > Root.value) {
        if (Root.right === undefined) {
            Root.right = Val;
            return Root
        }
        else return TreeBuilding(Val, Root.right);
    }
    else if (Val.value < Root.value) {
        if (Root.left === undefined) {
            Root.left = Val;
            return Root
        }
        else return TreeBuilding(Val, Root.left);
    }
    else return "ERROR"
}