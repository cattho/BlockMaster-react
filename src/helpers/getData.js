import { url } from "./url"

export const getData= async () =>{
    const data = await fetch(url)
    const resp = await data.json()

    console.log(resp,'getdata');
}

