// import request from 'request';

// request('http://localhost:3000/data?_start=4&_end=8', (err, resp, body) => {

//     if (err) {
//         console.error('request failed');
//         console.error(err);
//     } else {
//         console.log(body);
//     }
// });

import request from 'request';

request('http://localhost:3000/data', (err, resp, body) => {
  if (err) {
    console.error('request failed');
    console.error(err);
  } else {
    const data = JSON.parse(body);
    const filteredData = data.filter(item => item.id >= 4 && item.id <= 8);
    console.log(filteredData);
  }
});
