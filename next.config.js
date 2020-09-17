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
    
  }
}