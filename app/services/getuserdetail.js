export default async function getUsers() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");

  const res = await result.json();

  return res;
}
