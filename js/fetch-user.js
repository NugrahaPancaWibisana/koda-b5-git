export async function fetchUser() {
  try {
    const url = 'https://jsonplaceholder.typicode.com/users';

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(res.status);
    }

    console.log(res.json());
  } catch (error) {
    console.log(error);
  }
}
