export const getData = async (url: string) => {
  const response = await fetch(`http://localhost:4000/${url}`);
  const data = await response.json();
  console.log(data);
  return data;
};
