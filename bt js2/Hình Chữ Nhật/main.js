let Chieudai,Chieurong,Dientich;
function nhap (){
    Chieudai= Number(prompt("Nhập chiều dài"));
    Chieurong= Number(prompt("Nhập chiều rộng"));
}
nhap()
Dientich= Chieudai * Chieurong;
document.write ("Diện tích= ",Dientich);