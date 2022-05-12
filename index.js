const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 8000;
const axios = require('axios').default;

app.use(cors());

// const path = require('path');

const call = () => {
  const url = "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001";

  return axios.get(url)
  .then(function (response) {
    return response;
  })
  .catch(function (error) {
    console.log(error);
  });
}

// app.use(express.static(path.resolve(__dirname, '../client/build')));

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

app.get('/',async (req,res) => {
  const a = await call();
  console.log(a.data);
  res.json({message:a.data});
});

app.listen(PORT, () => {
    console.log('server up and running '+ PORT);
});
