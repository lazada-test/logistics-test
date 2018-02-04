const API_ROOT = 'http://localhost:807';

export const getSpec = (url1, url2) => {
  return fetch(`${API_ROOT}/getSpec`,
    {
      method: 'POST',
      body: JSON.stringify({
        url1: url1,
        url2: url2
      }),
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(res => res.json());
};