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

// Các ví dụ về method trong array
var a = [1,3,2];
var b = [10, 20];
var c = 5;
var d = [1,2,3,4,5,6,7,8,9]
// a.concat(b): nối phần từ của 2 mảng a và b. Kết quả trả ra sẽ là một array mới có phần tử bao gồm cả array của a và array của b
console.log(a.concat(b));

// a.push(b): đưa tất cả phần từ của mảng b vào cuối của mảng a.
console.log(a.push(b));  /*Kết quả là 4 tức là độ dài của mảng mới sau khi đưa tất cả mảng của b vào cuối trong mảng của a*/
console.log(a);     /* Kết quả là [1, 3, 2, array(2)] các object trong mảng a sẽ thay đổi hoàn toàn sau method push và b sẽ chỉ coi là 1 phần tử dưới dang array ở cuối mảng */
console.log(b);     /** Kết quả là [10, 20] vẫn giữ nguyên mảng b như cũ */

// a.pop(): đưa phần tử cuối của a ra ngoài mảng và các phần tử của a sẽ bị thay đổi sau khi dùng pop
console.log(a); /**Kết quả là [1, 3, 2, array(2)] kết quả đã thay đổi sau khi sử dụng push */
console.log(a.pop()); /**kết quả là [10, 20] tức là array của b đã bị đẩy ra ngoài */
console.log(a); /**Kết quả là [1, 3, 2] đã bỏ đi mảng của b và trở lại là mảng a như lúc chưa dùng push */

// a.shift(): đưa phần từ đầu của mảng a ra ngoài và các phần tử của a sẽ bị thay đổi sau khi dùng shift. Nó ngược lại so với pop
console.log(a); /**Kết quả là [1, 3, 2] là kết quả cuối cùng ở ví dụ sử dụng pop*/
console.log(a.shift()); /**Kết quả là 1 nghĩa là phần tử số 0 có giá trị là 1 trong mảng a đã bị đưa ra ngoài và a sẽ thay đổi kết quả*/
console.log(a); /**Kết quả là [3, 2] chỉ còn lại 2 phần tử sau khi phần tử đầu tiên có giá trị là 1 bị đẩy ra ngoài */

// a.unshift(b): đưa phần từ của mảng b vào đầu của mảng a và kết quả sẽ trả ra là số phần tử mới của mảng sau khi thêm.
console.log(a); /**Kết quả là [3, 2] là kết quả cuối cùng ở ví dụ shift */
console.log(a.unshift(b)); /**Kết quả là 3 nghĩa là số lượng phần tử mới của mảng a sau khi thêm 1 phần tử từ mảng b */
console.log(a); /**Kết quả là [array(2), 3, 2] phần tử array(2) là array của b mới được thêm vào ở vị trí đầu tiên trong mảng a */

