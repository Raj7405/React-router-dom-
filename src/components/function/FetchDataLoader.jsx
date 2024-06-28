export async function FetchDataLoader(params){
    console.log('loader call')
    const res = await fetch(`https://api.github.com/users/${params.name}`);
    const data = await res.json()
    console.log(data)
    return data
}