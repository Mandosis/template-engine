var fs = require('fs');

// Create object to hold api functions
let publicAPI = {};

// Checks if the file exists
let checkAccess = (cb) => {
  fs.access(filePath, fs.R_OK, (err) => {
    if (err) {
      callback('Error: Unable to access file.', false);
    } else {
      callback(null, true)
    }
  });
}

// Render the file to html
publicAPI.render = (filePath, callback) => {
  // Check if the file exists
  fs.access(filePath, fs.R_OK, (err) => {
    if (err) {
      callback('Error: Unable to access file.');
    } else {

    }
  })
};

// Expose the render function to express
publicAPI.__express = (filePath, options, callback) => {
  this.render(filePath, options, callback);
};

module.exports = publicAPI;
