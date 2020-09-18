const path = require('path')

const stylePath = [
  // path.join(__dirname, 'src/styles'),
  // path.join(__dirname, 'node_modules/@sweetalert2/theme-material-ui/'),
  // path.join(__dirname, 'sweetalert2/src/sweetalert2'),
];

console.log(stylePath);


module.exports = {
  sassOptions: {
    includePaths: stylePath,
  },
  env: {
    BASE_SERVICE_URL: process.env.BASE_SERVICE_URL,
    TICKET_MERCADO_PUBLICO: process.env.TICKET_MERCADO_PUBLICO,
  }
}