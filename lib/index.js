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

};

publicAPI.parseFile = (file, path, callback) => {
  let keyword = /<!-- TEMPLATE.* -->/i;

  let search = file.replace(keyword, (results) => {
    let templatePath = '';
    let templateContents = '';
    let html = '';

    // Seperate out the expression
    let tokens = results.split(' ');

    // Remove the file name from the files path
    path = path.split('/');
    path.pop()

    path = path.join('/');

    // Get the path from the result
    templatePath = path + '/' + tokens[2];

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

    fileContents = data;
  });



};

// Expose the render function to express
publicAPI.__express = (filePath, options, callback) => {
  this.render(filePath, options, callback);
};

module.exports = publicAPI;
