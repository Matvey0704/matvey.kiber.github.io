function square_perimeter(side) {
    return side*4;
}   

function square_square(side) {
    return side*side;
}

function cube (side) {
    function square() {
        return side*side
    }
}

    return square()*side

otvet = prompt('Введите сторону квадрата')
alert('число в кубе:' + cube(otvet))
// alert('Периметр квадрата:' + square_perimeter(otvet) + 'Площадь квадрата: ' + square_square(otvet))