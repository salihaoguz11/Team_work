const express = require("express");
const app = express();
app.use((req, res, next) => {
 throw new Error("Something went wrong!");
});
const errorHandler = (err, req, res, next) => {
    res.status(202).json({ message: 'İsteğiniz alındı ve işleniyor.' });
    // res.status(200).json({
    // error: {
    // message: err.message
    // }
    // });
   };
   
app.use(errorHandler);
app.listen(8000, () => {
    console.log("Server started on port 8000");
});
