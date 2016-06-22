var fs = require('fs');

// Create object to hold api functions
let publicAPI = {};

publicAPI.readFile = (filePath, options, callback) => {
  // Get file contents
  fs.readFile(filePath, options.encoding || 'utf8', (err, data) => {
    if (err) {
      callback(err);
    }

    // Set contents
    callback(null, data)
  });

}

/**
 * Render the file to html
 *
 * Options:
 *   - 'encoding' Change the default encoding for the file
 *
 * @param type{String} Path to the file
 * @param type{Object} options
 * @param type{Function} callback
 */
publicAPI.render = (filePath, options, callback) => {
  let contents = '';

  readFile(filePath, options, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      contents = data;
    }
  })

};

// Expose the render function to express
publicAPI.__express = (filePath, options, callback) => {
  this.render(filePath, options, callback);
};

module.exports = publicAPI;
