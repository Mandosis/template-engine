var should = require('chai').should();
var path = require('path');
var template = require('../lib/index');

describe('Render', () => {
  it('Reads the file', () => {
    template.readFile(path.join(__dirname, './cases/example.tpl'), (err, data) => {
      should.not.exist(err);
      data.should.be.a('string');
    })
  })
})
