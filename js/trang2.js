function ktemail()
{
    var email=document.getElementById('email').value;
    var dk=/^[^\s@]+@gmail\.com$/;
    if(dk.test(email))
    {
        dangnhap(1);
    }
    else
    {
        alert("Email khog hop le");
    }
}


function dangnhap(n)
{
    if(n==1)
    {
        alert("Dang nhap thanh cong");
    }
    else{
        alert("Dang nhap voi Google");
        }
}