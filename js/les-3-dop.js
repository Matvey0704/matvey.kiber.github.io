function half_perimeter() {
    return (a+b+c)/2
}

function square(a, b, c) {
    var p = half_perimeter()
    return Math.sqrt(p*(p-a)*(p-b)*(p-c))
}

var a =Number(promt('Введите сторону a'))
var b =Number(promt('Введите сторону b'))
var c =Number(promt('Введите сторону c'))

alert('Площадь треугольника:' + square(a, b, c))