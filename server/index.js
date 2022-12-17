const express = require('express')
const mongoose =  require('mongoose')

const authRouter = require('./routes/auth')


mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://thjnhotwp1:thjnhotwp1@mern-learn.zli7wmw.mongodb.net/?retryWrites=true&w=majority`,{
            // useCreateIndex:true,
            // userNewUrlParser:true,
            useUnifiedTopology:true,
            // useFindAndModify:false
        })

        console.log('Mongo Connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

connectDB()

const app = express()

app.use('/api/auth', authRouter)

const PORT = 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT} `))