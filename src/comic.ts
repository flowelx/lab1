import moment from 'moment';
import { Comic } from './comic_type';

async function load_comic(): Promise<void> {
    const email = "a.averina@innopolis.university";
    let email_params: URLSearchParams = new URLSearchParams();
    email_params.append("email", email);
    let personal_code: number = await (await fetch("https://fwd.innopolis.university/api/hw2?" + email_params)).json();
    let personal_params: URLSearchParams = new URLSearchParams();
    personal_params.append("id", personal_code.toString());
    let comic_json: Comic = await (await fetch("https://fwd.innopolis.university/api/comic?" + personal_params)).json();
    (window.document.querySelector("main h1") as HTMLElement).textContent = comic_json.safe_title;
    (window.document.querySelector("main p") as HTMLElement).textContent = comic_json.alt;
    let date: Date = new Date(parseInt(comic_json.year), parseInt(comic_json.month), parseInt(comic_json.day));
    (document.querySelector("main div h3") as HTMLElement).textContent = `${date.toLocaleDateString()} (${moment(date).fromNow()})`;
    (document.querySelector("main div img") as HTMLImageElement).alt = comic_json.alt;
    (document.querySelector("main div img") as HTMLImageElement).src = comic_json.img;
}

load_comic()