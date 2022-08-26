export const id = 'hVvIHhXaRjGPzLiECktA';

const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;
export const fetchData = async () => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`);
  const data = await response.json();
  return data;
};

export const postGames = async (users, scores) => {
  const data = { user: users, score: scores };
  const response = await fetch(url,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
  const res = await response.json();
  return res;
};