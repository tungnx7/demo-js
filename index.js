// Example Objcet: Tạo 1 object với 3 thông số tùy chọn
var myDog = {
  nickName: "Osin",
  age: 7,
  isAlive: true,
};

console.log(myDog);

// Example Array: Tạo 1 array danh sách nhân viên công ty bạn với 3 thông số tùy chọn
var cm1 = {
  isMale: true,
  name: "Quý",
  height: 1.72,
};

var cm2 = {
  isMale: true,
  name: "Trung",
  height: 1.7,
};

var cm3 = {
  isMale: true,
  name: "Tùng",
  height: 1.69,
};

var cm4 = {
  isMale: false,
  name: "Hà",
  height: 1.65,
};

var cm5 = {
  isMale: false,
  name: "Thảo Bé",
  height: 1.52,
};

var cm6 = {
  isMale: false,
  name: "Thảo Ngáo",
  height: 1.66,
};

var cm7 = {
  isMale: false,
  name: "Nguyệt Anh",
  height: 1.58,
};

var cm8 = {
  isMale: false,
  name: "Ly",
  height: 1.6,
};

var CMs = [cm1, cm2, cm3, cm4, cm5, cm6, cm7, cm8];

console.log(CMs.height);

// Array method sử dụng hàm. forEach có tác dụng duyệt qua tất cả các phần tử nằm ở trong mảng
var employee = CMs.forEach(function (cm, index) {
  console.log(index, cm);
});

// Example function: Tính diện tích và chu vi hình tròn với bán kính là 12
function areaCircle(r) {
  return r * r * 3.14;
}

function perimeterCircle(r) {
  return r * 2 * 3.14;
}

console.log(areaCircle(12));
console.log(perimeterCircle(12));

// Tính diện tích hình vuông với cạnh là 12
function areaSquare(a) {
  return a * a;
}

console.log(areaSquare(12));

// Example function: Bài toàn tính cân nawg sau khi mèo ăn chuột
var myCat = {
  weight: 2,
  name: "Dog",
  eat: function (mouse) {
    this.weight = this.weight + mouse.weight;
    return this;
  },
};

var mouse = {
  weight: 0.1,
};
console.log("Before eating", myCat.weight, "kg");

myCat.eat(mouse);
console.log("After eating", myCat.weight, "kg");

var myFox = {
  weight: 5,
  name: "Cao",
  eat: function (chicken, rabbit) {
    this.weight = this.weight + chicken.weight;
    return this;
  },
};

var chicken = {
  weight: 0.5,
};

var rabbit = {
  weight: 1,
};

console.log("Before eating", myFox.weight, "kg");

myFox.eat(chicken);
console.log("After eating", myFox.weight, "kg");

// Các ví dụ về method trong array
var a = [1, 3, 2];
var b = [10, 20];
var c = 5;
var d = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// a.concat(b): nối phần từ của 2 mảng a và b. Kết quả trả ra sẽ là một array mới có phần tử bao gồm cả array của a và array của b
console.log(a.concat(b));

// a.push(b): đưa tất cả phần từ của mảng b vào cuối của mảng a.
console.log(
  a.push(b)
); /*Kết quả là 4 tức là độ dài của mảng mới sau khi đưa tất cả mảng của b vào cuối trong mảng của a*/
console.log(
  a
); /* Kết quả là [1, 3, 2, array(2)] các object trong mảng a sẽ thay đổi hoàn toàn sau method push và b sẽ chỉ coi là 1 phần tử dưới dang array ở cuối mảng */
console.log(b); /** Kết quả là [10, 20] vẫn giữ nguyên mảng b như cũ */

// a.pop(): đưa phần tử cuối của a ra ngoài mảng và các phần tử của a sẽ bị thay đổi sau khi dùng pop
console.log(
  a
); /**Kết quả là [1, 3, 2, array(2)] kết quả đã thay đổi sau khi sử dụng push */
console.log(
  a.pop()
); /**kết quả là [10, 20] tức là array của b đã bị đẩy ra ngoài */
console.log(
  a
); /**Kết quả là [1, 3, 2] đã bỏ đi mảng của b và trở lại là mảng a như lúc chưa dùng push */

// a.shift(): đưa phần từ đầu của mảng a ra ngoài và các phần tử của a sẽ bị thay đổi sau khi dùng shift. Nó ngược lại so với pop
console.log(
  a
); /**Kết quả là [1, 3, 2] là kết quả cuối cùng ở ví dụ sử dụng pop*/
console.log(
  a.shift()
); /**Kết quả là 1 nghĩa là phần tử số 0 có giá trị là 1 trong mảng a đã bị đưa ra ngoài và a sẽ thay đổi kết quả*/
console.log(
  a
); /**Kết quả là [3, 2] chỉ còn lại 2 phần tử sau khi phần tử đầu tiên có giá trị là 1 bị đẩy ra ngoài */

// a.unshift(b): đưa phần từ của mảng b vào đầu của mảng a và kết quả sẽ trả ra là số phần tử mới của mảng sau khi thêm.
console.log(a); /**Kết quả là [3, 2] là kết quả cuối cùng ở ví dụ shift */
console.log(
  a.unshift(b)
); /**Kết quả là 3 nghĩa là số lượng phần tử mới của mảng a sau khi thêm 1 phần tử từ mảng b */
console.log(
  a
); /**Kết quả là [array(2), 3, 2] phần tử array(2) là array của b mới được thêm vào ở vị trí đầu tiên trong mảng a */
console.log(`========================`);

// method: array.map(function() {điều kiện đầu ra mong muốn tương ứng}); tất cả các phần tử trong mảng đều sẽ bị biến đổi dựa trên điều kiện đầu ra mong muốn
var rectangles = [
  {
    width: 10,
    height: 5,
  },
  {
    width: 10,
    height: 20,
  },
  {
    width: 4,
    height: 16,
  },
];
// Dùng method map tính chu vi và diện tích của từng hình chữ nhật tương ứng
var areaRectangles = rectangles.map(function (rectangle) {
  return rectangle.width * rectangle.height;
});
console.log(areaRectangles);

var perimeterRectangles = rectangles.map(function (rectangle) {
  return (rectangle.width + rectangle.height) * 2;
});
console.log(perimeterRectangles);

// array.filter(function() {điều kiện}); phương thức sẽ lọc các phần tử phù hợp với điều kiện để trả ra kết quả như mong muốn
var numbers = [-5, -1, 2, 7, 10];

var resultNumbers = numbers.filter(function (number) {
  return number % 5 === 0;
});
console.log(resultNumbers); /**[-5, 10] */

var negativeNumbers = numbers.filter(function (number) {
  return number < 0;
});
console.log(negativeNumbers); /**[-5, -1] */

// array.find(function(){điều kiện}); phương thức sẽ lọc ra phần tử phù hợp với điều kiện để trả kết quả và chỉ trả ra duy nhất 1 kết quả đầu tiên mà nó tìm được
var negativeNumbers2 = numbers.find(function (number) {
  return number < 0;
});
console.log(negativeNumbers2); /**{-5} */

// array.reduce(function(a, b) {điều kiện}); phương thức reduce sử dụng khi muốn nhận về kết quả duy nhất sau khi đã xử lý điều kiện để đạt kết quả như mong muốn
var numbers = [1, 2, 3, 4]; /**tương đương mảng [x1, x2, x3, x4] */

var total = numbers.reduce(function (a, b) {
  return a + b;
});
console.log(
  total
); /**phương thức sẽ xử lý từng bước một theo cấu trúc  x1 + x2 = y1, sau đó mới tính tiếp y1 + x3 = y2 và cuối cùng là y2 + x4 = y3 = 10 là kết quả cuối cùng  */
// Bài tập: Bạn vừa đặt hàng online trên shoppe với 3 món hàng như sau. Dùng phương thức reduce để tính tổng tiền bạn cần trả cho đơn hàng trên.
var orders = [
  {
    name: "shirt",
    quantity: 1,
    unitPrice: 120000,
  },
  {
    name: "sock",
    quantity: 5,
    unitPrice: 15000,
  },
  {
    name: "shoes",
    quantity: 1,
    unitPrice: 400000,
  },
];

var price = orders.map(function (item) {
  return item.unitPrice * item.quantity;
});
var total = price.reduce(function (a, b) {
  return a + b;
});
console.log(total);

// Bài tập thực hành. Giả sử bạn đang quản lý một gian hàng bán nước với nhiều các loại sản phẩm khác nhau chứa trong mảng products dưới đây
var products = [
  {
    name: "nước giải khát",
    unitPrice: 12000,
    quantity: 40,
    category: "soft drink",
  },
  {
    name: "bia sài gòn",
    unitPrice: 12000,
    quantity: 80,
    category: "beer",
  },
  {
    name: "bia hà nội",
    unitPrice: 10000,
    quantity: 70,
    category: "beer",
  },
  {
    name: "sữa",
    unitPrice: 8000,
    quantity: 100,
    category: "milk",
  },
  {
    name: "nước lọc",
    unitPrice: 5000,
    quantity: 30,
    category: "water",
  },
];

// Yêu cầu
// 1. Filter các tên sản phẩm có chung category: beer.
// 2. Tính tổng số tiền còn tồn lại trong kho.
// 3. Chọn ra tên các sản phẩm có tiền hàng tồn lớn trên 800.000 đồng

var beerList = products.filter(function (item) {
  return item.category === "beer";
});
console.log(beerList);

var handlerBeerList = beerList.map(function (name) {
  return {
    name: name.name,
  };
});
console.log(handlerBeerList); /**Hoanf thành yêu cầu số 1 */

var unitTotal = products.map(function (total) {
  return total.quantity * total.unitPrice;
});
console.log(unitTotal);
var total = unitTotal.reduce(function (a, b) {
  return a + b;
});
console.log(total); /**Hoàn thành yêu cầu số 2 */

var poodgoods = unitTotal.filter(function (totalPrice) {
  return totalPrice >= 800000;
});

// Bài tập: Cho một mảng với 3 phần tử như sau. Dùng reduce để ra được kết quả như mong muốn
var items = ["Tom", "Bill", "Kim"];
// đầu ra cần thực hiện: '<Tom><Bill><Kim>'

var result = items.reduce(function (currentValue, item) {
  return currentValue + `<` + item + `>`;
}, `<`);
console.log(result);

/** array.soft: phương thức sắp xếp các phần tử trong mảng theo yêu cầu
 *  công thức array.sort(function(a, b){})
 * giá trị a < 0 -> a sẽ đứng trước b
 * giá trị a > 0 -> a sẽ đứng sau b
 * giá trị a = 0 -> giữ nguyên thứ tự ban đầu
 */
var numbers = [2, 9, 1, 4, 13];

var ascendingNumbers = numbers.sort(function (a, b) {
  // sắp xếp theo thứ tự từ nhỏ đến lớn
  // đầu ra [1, 2, 4, 9, 13]
  return a - b;
});
console.log(ascendingNumbers);

var descendingNumbers = numbers.sort(function (a, b) {
  // sắp xếp theo thứ tự từ lớn đến bé
  // đầu ra [13, 9, 4, 2, 1]
  return b - a;
});
console.log(descendingNumbers);

// Ví dụ về sắp xếp các object trong mảng
var employees = [
  {
    name: "Nguyen Van A",
    age: 19,
  },
  {
    name: "Nguyen Thi B",
    age: 20,
  },
  {
    name: "Nguyen Duc C",
    age: 18,
  },
];

var sortedEmployees = employees.sort(function (a, b) {
  // Sắp xếp theo thứ tự tăng dần theo độ tuổi
  return a.age - b.age;
});
console.log(sortedEmployees);

// Bài tập thực hành: Cho 1 mảng gồm 7 phần tử với 3 thuộc tính id, name, coin
// Yêu cầu: Sắp xếp giá từ đắt phí đến miễn phí các phần tử theo tên và ngược lại
var courses = [
  {
    id: 1,
    name: "HTML&CSS",
    coin: 0,
  },
  {
    id: 2,
    name: "ReactJS",
    coin: 1000,
  },
  {
    id: 3,
    name: "Java",
    coin: 500,
  },
  {
    id: 4,
    name: "Sass",
    coin: 300,
  },
  {
    id: 5,
    name: "JavaScript",
    coin: 200,
  },
  {
    id: 6,
    name: "PHP",
    coin: 400,
  },
  {
    id: 7,
    name: "VueJS",
    coin: 700,
  },
];

var minCourses = courses.sort(function (a, b) {
  /**sắp xếp theo thứ tự từ miễn phí đến đắt phí nhất */ return a.coin - b.coin;
});
console.log(minCourses);
var handerMinCourses = minCourses.map(function (item) {
  return {
    name: item.name,
  };
});
console.log(handerMinCourses);

var maxCourses = courses.sort(function (a, b) {
  /**sắp xếp theo thứ tự từ đắt phí nhất đến miễn phí */ return b.coin - a.coin;
});
console.log(maxCourses);
var handerMaxCourses = maxCourses.map(function (item) {
  return {
    name: item.name,
  };
});
console.log(handerMaxCourses);

import Mouse from "./mouse.js";
import Cat from "./cat.js";

var jerry = new Mouse("orange");
var mickey = new Mouse("black");

console.log(jerry);
console.log(mickey);

var tom = new Cat();
tom.eat(jerry);
tom.eat(mickey);
console.log(tom);

// Ví dụ về if - else: Tung đồng xu
function tossACoin() {
  var value = Math.random();
  if (value < 0.5) {
    console.log("Mặt sấp");
  } else {
    console.log("Mặt ngửa");
  }
}
tossACoin();

// Ví dụ về toán tử 3 ngôi
function tossCoin() {
  var value = Math.random();
  var result = value < 0.5 ? "Mặt sấp" : "Mặt ngửa";
  console.log(result);
}
tossCoin();

// Ví dụ 2: bài toán đưa ra câu trả lời về việc gặp 1 người lạ
function shouldIDateHer() {
  var value = Math.random();
  if (value < 0.5) {
    console.log("Yes, of course");
  } else {
    console.log("No, she has a boyfriend");
  }
}
shouldIDateHer();

// Ví dụ 3: máy đếm tiền và phát hiện tiền giả
function countBills(bills) {
  var total = 0;
  for (var bill of bills) {
    if (!bill.fake) {
      total += bill.value;
    } else {
      console.log("Fake bill", bill);
      break;
    }
  }
  return total;
}

var bills = [
  {
    value: 10000,
  },
  {
    value: 20000,
  },
  {
    value: 20000,
    fake: true,
  },
  {
    value: 500000,
  },
];
var total = countBills(bills);
console.log(total);

// Bài toán: Vé xe buýt sẽ được giảm 20% cho học sinh dưới 18 tuổi, giảm 10% dành cho người già trên 60 tuổi.
function getTicketFee(person) {
  var basePrice = 8000;
  if (person.age <= 18) {
    return basePrice * 0.8;
  } else if (person.age >= 60) {
    return basePrice * 0.9;
  } else {
    return basePrice;
  }
}
var tour = {
  age: 18,
};
var fee = getTicketFee(tour);
console.log(fee);

// Bài toán: Cửa hàng cắt tóc: với khách hàng là nữ sẽ được giảm 20%, nam giới được giảm 10% còn giới tính khác không được giảm.
function checkGender(person) {
  var priceOrigin = 100000;
  if (person.gender === "female") {
    return priceOrigin * 0.8;
  } else if (person.gender === "male") {
    return priceOrigin * 0.9;
  } else {
    return priceOrigin;
  }
}

// var bills = [
//   {
//     gender: 'female',
//     price: 400000
//   },
//   {
//     gender: 'male',
//     price: 50000
//   },
//   {
//     gender: '',
//     price: 250000
//   },
// ]
// Chưa tìm được lỗi sai khi dùng array
var people = {
  gender: "female",
};
var fee = checkGender(people);
console.log(fee);

// Bài toán nạp thẻ game: nạp thẻ garena từ 200.000VNĐ trở lên sẽ được tặng thêm 80% giá trị thẻ nạp, 100.000VNĐ được tặng 70% giá trị thẻ nạp và các giá trị thấp hơn được tặng 60% giá trị thẻ nạp.
function bonusCard(person) {
  var rp = person.card;
  if (person.card >= 200000) {
    return rp + rp * 0.8;
  } else if (person.card <= 100000) {
    return rp + rp * 0.6;
  } else {
    return rp + rp * 0.7;
  }
}

var user = {
  card: 200000,
};
var coin = bonusCard(user);
console.log(coin);

// Baif toán: Bạn thanh toán tại một nhà hàng sẽ được áp dụng giảm giá theo thẻ thành viên với 4 hàng mức như sau:
/**bronze: 2%
 * silver: 5%
 * gold: 8%
 * diamond: 10%
 */
var memberCard = {
  tier: "gold",
};

function getTotal(price, card) {
  var discountRate;

  // if (card.tier === 'bronze') {
  //   discountRate = 0.02;
  // } else if (card.tier === 'silver') {
  //   discountRate = 0.05;
  // } else if (card.tier === 'gold') {
  //   discountRate = 0.08;
  // } else {
  //   discountRate = 0.1;
  // }
  switch (card.tier) {
    case "bronze":
      discountRate = 0.02;
      break;
    case "silver":
      discountRate = 0.05;
      break;
    case "gold":
      discountRate = 0.08;
      break;
    case "diamond":
      discountRate = 0.1;
      break;
  }

  return price * (1 - discountRate);
}

var total = getTotal(500000, memberCard);
console.log(total);

// Ví dụ switch - case: đèn tín hiệu giao thông có 3 màu green, red and yellow. Với mỗi tín hiệu đèn sẽ có mỗi hiệu lệnh khác nhau
var trafficLight = "green";

function goOrNot(lightValue) {
  switch (lightValue) {
    case "green":
      console.log("Go");
      break;
    case "yellow":
      console.log("Slow your speed");
      break;
    case "red":
      console.log("Stop");
      break;
      // Chưa tìm được lỗi sai
      // if(lightValue === "green") {
        //   console.log("Go")
        // } else if (lightValue === "yellow") {
          //   console.log("Slow your speed")
          // } else {
            //   console.log("Stop")
            // }
            // }
          }
        }    

var command = goOrNot(trafficLight);
console.log(command);
