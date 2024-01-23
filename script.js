const GitApi="https://api.github.com/users/"

const main=document.querySelector("main");

const getdata = async(username) =>{
    const response = await fetch(GitApi+username);
    const data = await response.json();
    if(data.message!="Not Found"){
    const display = `
    <div id="display">
			<center><img class="pic" src="${data.avatar_url}" alt="no image found">
        <center>
			<h2>${data.name}</h2>
			<p>${data.bio}</p>

				<p>${data.followers}<strong> Followers</strong><br>
				${data.following}<strong> Following</strong><br>
				${data.public_repos}<strong> Repos</strong><p>
			
            
		</div>
    `
    main.innerHTML=display;
    }
    else{
        const display = `
		    <div class="info">
			    <h2>User Not Found</h2>
		    </div>`
            main.innerHTML=display;
        }
}

const input= document.getElementById('input');

input.addEventListener('submit', (e)=>{
    e.preventDefault();
    let usernameInput = document.getElementById('usernameInput');
    let username1=usernameInput.value;
    getdata(username1);
})
