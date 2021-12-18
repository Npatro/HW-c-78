var images = ["https://i.postimg.cc/JnL6wtrd/sister.jpg","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fstock-photo%2Fsister_cartoon.html&psig=AOvVaw1wU-XqPmy6UbwnAVV3Ykqm&ust=1639933358946000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLj0zfzp7fQCFQAAAAAdAAAAABAE", "https://i.postimg.cc/wjMnFtMX/father.jpg", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F67835538126839494%2F&psig=AOvVaw2FssDZc9IJxX_1HJQKytuI&ust=1639933461357000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiCva_q7fQCFQAAAAAdAAAAABAD"];
var names = ["Navisha Patro (ELDER SISTER)", "Arnavi Patro (LITTLE SISTER)", "Nabin Patro (DAD)", "Shilpa Patro (MOM)"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4;
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    var updatedImage = images[i];
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
