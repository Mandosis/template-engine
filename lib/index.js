var fs = require('fs');
var path = require('path');

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

};

publicAPI.parseFile = (file, filePath, callback) => {
  let keyword = /<!-- PARTIAL.* -->/gi;

  // Remove the file name from the files path
  filePath = filePath.split('/');
  filePath.pop()
  filePath = filePath.join('/');


  let search = file.replace(keyword, (results) => {
    let templatePath = '';
    let templateContents = '';
    let html = '';

    // Seperate out the expression
    let tokens = results.split(' ');


    // Get the path from the result
    templatePath = path.join(filePath, tokens[2]);

    return fs.readFileSync(templatePath, 'utf8');
  });

  callback(null, search)
}

publicAPI.render = (filePath, options, callback) => {
  let fileContents = '';
  let templatePath = '';

  publicAPI.readFile(filePath, options, (err, data) => {
    if (err) {
      callback(err)
    }

    publicAPI.parseFile(data, filePath, (err, data) => {
      if(err) {
        callback(err);
      }

      callback(null, data)
    })
  });
};

// Expose the render function to express
publicAPI.__express = (filePath, options, callback) => {
  this.render(filePath, options, callback);
};

module.exports = publicAPI;
