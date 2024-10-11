// Connect to Neon DB

require("dotenv").config();

const http = require("http");
const { neon } = require("@neondatabase/serverless");

const sql = neon(process.env.DATABASE_URL);

const requestHandler = async (req, res) => {
  const result = await sql`SELECT version()`;
  const { version } = result[0];
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(version);
};

http.createServer(requestHandler).listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});


async function testRun() {
    try {
        const post = await sql('SELECT * FROM playing_with_neon', [postID]);
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        console.log("It helps if you call the function")
        console.log(post);
    }
    catch (error) {
        console.error(error.message);
    }
}

testRun();

