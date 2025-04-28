const IPFS = require("ipfs-http-client");
const ipfs = IPFS.create({
  host: "localhost",
  port: 5001,
  protocol: "http",
  headers: {
    Origin: "http://localhost:3000",
  },
});
export default ipfs;
