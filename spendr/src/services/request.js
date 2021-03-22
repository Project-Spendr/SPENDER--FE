const NONBODY_METHODS = ['GET', 'POST', 'DELETE'];

const request = (path, method, body) => {
  console.log('iamhere', `${process.env.API_URL}`)
  // eslint-disable-next-line no-undef
  return fetch(`http://localhost:27017/Spendr${path}`, {
    method,
    headers: NONBODY_METHODS.includes(method) ? {} : { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: NONBODY_METHODS.includes(method) ? null : JSON.stringify(body)
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
    
};

export const post = (path, body) => request(path, 'POST', body);
export const get = path => request(path, 'GET');
export const del = path => request(path, 'DELETE');