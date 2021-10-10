// Example Objcet: Tạo 1 object với 3 thông số tùy chọn
var myDog = {
    nickName: 'Osin',
    age: 7,
    isAlive: true
};

console.log(myDog);

// Example Array: Tạo 1 array danh sách nhân viên công ty bạn với 3 thông số tùy chọn

var cm1 = {
    isMale: true,
    name: 'Quý',
    height: 1.72
}

var cm2 = {
    isMale: true,
    name: 'Trung',
    height: 1.70
};

var cm3 = {
    isMale: true,
    name: 'Tùng',
    height: 1.69
};

var cm4 = {
    isMale: false,
    name: 'Hà',
    height: 1.65
};

var cm5 = {
    isMale: false,
    name: 'Thảo Bé',
    height: 1.52
};

var cm6 = {
    isMale: false,
    name: 'Thảo Ngáo',
    height: 1.66
};

var cm7 = {
    isMale: false,
    name: 'Nguyệt Anh',
    height: 1.58
};

var cm8 = {
    isMale: false,
    name: 'Ly',
    height: 1.60
};

var CMs = [cm1, cm2, cm3, cm4, cm5, cm6, cm7, cm8];

console.log(CMs[3].height);

// Example function: Tính diện tích và chu vi hình tròn với bán kính là 12
function areaCircle (r) {
    return r * r * 3.14;
}

function perimeterCircle (r) {
    return r * 2 * 3.14;
}

console.log(areaCircle(12));
console.log(perimeterCircle(12));

// Tính diện tích hình vuông với cạnh là 12
function areaSquare (a) {
    return a * a;
}

console.log(areaSquare(12))

// Example function: Bài toàn tính cân nawg sau khi mèo ăn chuột
var myCat = {
    weight: 2,
    name: 'Dog',
    eat: function (mouse) {
        this.weight = this.weight + mouse.weight;
        return this;
    }
};

var mouse = {
    weight: 0.1,
};
console.log('Before eating', myCat.weight, 'kg');

myCat.eat(mouse);
console.log('After eating', myCat.weight, 'kg');

var myFox = {
    weight: 5,
    name: 'Cao',
    eat: function (chicken, rabbit) {
        this.weight = this.weight + chicken.weight;
        return this;
    }
};

var chicken = {
    weight: 0.5,
};

var rabbit = {
    weight: 1,
};

console.log('Before eating', myFox.weight, 'kg');

myFox.eat(chicken);
console.log('After eating', myFox.weight, 'kg');



