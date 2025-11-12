export async function fetchUser() {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const result = await response.json();
    console.log(result[1]);
  } catch (error) {
    console.log(error);
  }
}