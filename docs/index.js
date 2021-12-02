import bridge from '@vkontakte/vk-bridge';
bridge.send("VKWebAppInit", {});

var firstname;
var lastname;
var photo;
bridge.send("VKWebAppGetUserInfo");
bridge.subscribe((e) => {
    if(e.type == "VKWebAppShowOrderBoxResult") {
        firstname= e.data.first_name;
        lastname= e.data.last_name;
        photo100= e.data.photo_100;
        document.getElementsByName('div').textContent = firstname+' '+lastname
    }});