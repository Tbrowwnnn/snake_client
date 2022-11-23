const net = require("net");
const connect = function () {
  
  const conn = net.createConnection({
    
    host: "172.31.237.188",

    port: "50541",
});

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {

    console.log("Heyyy you're connected!")

    conn.write("Name: TRB")
    conn.write("Move: up");
    conn.write("Move: up")
    conn.write("Move: left")
    conn.write("Move: right")

  })


  conn.setEncoding("utf8");

  return conn;

};

module.exports = connect;