const path = require('path')
module.exports =(env)=>{
     return {
         entry: path.resolve(__dirname, 'src', 'index.js'),
         mode: env.mode ?? 'development',
         output: {
             path: path.resolve(__dirname, 'build'),
             filename: '[name].[contenthash].js',
             clean: true
         }
     }
}