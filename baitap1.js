// Đầu vào
var ab = 3
var ac = 4

// Giải thuật
// ab^2 + ac^2 = bc^2
// Math: đối tượng tính toán JS hỗ trợ sẵn
// Math.sqrt(4): tính căn bậc 2 của 4
// Math.pow(4, 2): => 4^2
var bc = Math.sqrt(ab ** 2 + ac ** 2)

// Đầu ra
console.log('Cạnh huyền: ', bc)