// Функция в которой прописываются элементы для сортировки,
// создаются объекты, и вызывается функция создания дерева
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
    let OBJECT = Arr[0];
    return OBJECT
}

// Функция для построения дерева из элементов созданных в функции Start()
// Функция рекурсивная
// TreeBuilding( Объект для сравнения, Его родитель )
function TreeBuilding(Val, Root) {
    // Если число больше корня: проверить есть ли справа элемент. 
    // Если нет: сравнимаемый объект становиться правым элементов
    // Если есть: запустить эту функцию для найденого элемента
    if (Val.value > Root.value) {
        if (Root.right === undefined) {
            Root.right = Val;
            return Root
        }
        else return TreeBuilding(Val, Root.right);
    }
    // Тоже что и с большим элементом
    else if (Val.value < Root.value) {
        if (Root.left === undefined) {
            Root.left = Val;
            return Root
        }
        else return TreeBuilding(Val, Root.left);
    }
    else return "ERROR"
}

function TreeSort() {
    let sorted = []
    // for ()
}