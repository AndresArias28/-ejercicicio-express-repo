const express = require('express');
const app = express();

 //midelware
app.use("/api", require("./routes/areaRouter"))
app.use("/api", require("./routes/empresaRouter"))
app.use("/api", require("./routes/empleadoRouter"))

//servidor
const PORT= 3020;
app.listen(PORT, () => {
    console.log(`servidor corriento en puerto: ${PORT}`);
});