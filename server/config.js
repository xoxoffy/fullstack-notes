module.exports = {
  port: process.env.PORT || 3000,
  database:
    process.env.DATABASE ||
    'mongodb+srv://root:uzdMXYLewkTnFc1v@cluster0.ioqnh95.mongodb.net/?retryWrites=true&w=majority',
};
