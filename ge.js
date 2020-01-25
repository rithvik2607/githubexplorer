
window.onload = () => {
    var user = prompt("Hi. Enter the GitHub username you are searching for","");
    var name= document.getElementById('name');
   var email= document.getElementById('email');
   var link= document.getElementById('url');
   var repos= document.getElementById('repos');
   var followers= document.getElementById('followers');
   var avatar= document.createElement('img');
    async function search(url,settings){
        const api_call = await fetch(url,settings);
        const data = await api_call.json();
        return data;
    };

    const showData = () => {
        let url = `https://api.github.com/users/${user}`;
        let settings = {method:"GET"};
        search(url,settings).then((res) =>{
            name.innerHTML += res.name;
            email.innerHTML += res.email;
            repos.innerHTML = res.repos;
            followers.innerHTML = res.followers;
            avatar.setAttribute('src',res.avatar_url);
            avatar.width= "200";
            avatar.height= "195";
            avatar.style.marginLeft= "1250px";
            avatar.style.marginTop= "15px";
            document.body.appendChild(avatar);
            link.setAttribute('href',res.html_url);
        })
    }

    if(user == null || user == "")
    {
        alert("No username. Okay take a look at my GitHub profile");
        user = "rithvik2607";
        showData();
    }
    else
    {
        showData();
    }

}