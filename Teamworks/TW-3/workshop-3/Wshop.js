function logRequest(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
    } 
// app.get('/sum', (req, res) => {
//     const { num1, num2 } = req.query;
//     const sum = parseInt(num1) + parseInt(num2);
//     res.send(`The sum of ${num1} and ${num2} is ${sum}.`);
//     });
   