let canhday,chieucao,dientich;
function nhap(){
    canhday= Number(prompt("Nhập độ dài cơ sở: "));
    chieucao= Number(prompt("Nhập độ dài chiều cao: "));
}
nhap()
    dientich= (canhday * chieucao)/2;
    document.write("Diện tích hình tam giác bằng: ", dientich);