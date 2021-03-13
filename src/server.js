  
import app from "./app";

const PORT = process.env.PORT
app.listen({ port: PORT }).then(() => {
  console.log(`Server is running on http://localhost:${PORT}`);
});