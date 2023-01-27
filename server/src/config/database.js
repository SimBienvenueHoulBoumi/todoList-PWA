import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://kaymkassai:kaymkassai@cluster0.yuamcp6.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log('✅ Successfully connected to the database'))
  .catch((e) => console.log(`⛔️ Error during database connection ${e}`))