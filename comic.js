async function load_comic(){
    const email = "a.averina@innopolis.university";
    let email_params = new URLSearchParams();
    email_params.append("email", email);
    let personal_code = await (await fetch("https://fwd.innopolis.university/api/hw2?" + email_params)).json();
    let personal_params = new URLSearchParams();
    personal_params.append("id", personal_code);
    let comic_json = await (await fetch("https://fwd.innopolis.university/api/comic?" + personal_params)).json();
    document.querySelector("main h1").textContent = comic_json.safe_title;
    let date = new Date(comic_json.year, comic_json.month, comic_json.day);
    document.querySelector("main div h3").textContent = date.toLocaleDateString();
    document.querySelector("main div img").alt = comic_json.alt;
    document.querySelector("main div img").src = comic_json.img;
}

load_comic()