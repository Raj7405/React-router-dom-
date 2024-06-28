async function GitHubData({ userName }) {
    const res = await fetch(`https://api.github.com/users/${userName.name}`);
    if (res.status === 404) {
      throw new Response("Not Found", { status: 404 });
    }
    if(res.status === 403){
        return null
    }
    return !(res.status === 403) && res.json();
}
export default GitHubData