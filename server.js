const app = require("./startup/app");
require("./startup/db")();
require("./routes")(app);

app.listen(process.env.PORT, () => {
    console.log(`server started at port: ${process.env.PORT}`);
});
