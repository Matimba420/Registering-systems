const express = require('express');
const cors = require('cors');
// const commentRoute = require('./routes/comment');
// const userRoute =  require('./routes/user')
// const watchlistRoute = require('./routes/watchlist')
// const authRoute = require('./routes/auth')
const app = express();
const baseUrl = "0.0.0.0"
// const port = 

const corsOptions = {origin: '*'}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/api/comment', commentRoute);
// app.use('/api/user', userRoute);
// app.use('/api/watchlist', watchlistRoute);
// app.use('/api/auth', authRoute);
// app.use('/user', userRoute)


// app.listen('10.10.2.155:3000', ()=>{
//     console.log('server is listening to port');
// })

app.listen(3000, baseUrl, ()=>{
    console.log('server is listening to port ');
})