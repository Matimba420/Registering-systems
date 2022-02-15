const express = require('express');
const cors = require('cors');
const userRoute =  require('./routes/user');
const attendanceRoute = require('./routes/attendance')
const app = express();
const baseUrl = "0.0.0.0";
const PORT = 3100; 

const corsOptions = {origin: '*'}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/attendance', attendanceRoute);
app.use('/user', userRoute);


// app.listen('10.10.2.155:3000', ()=>{
//     console.log('server is listening to port');
// })

app.listen(PORT, baseUrl, ()=>{
    console.log('server is listening to port',PORT);
})

// app.listen(3000, ()=>{
//     console.log('server is listening to port');
// })
