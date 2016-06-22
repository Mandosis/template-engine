var should = require('chai').should();
var path = require('path');
var template = require('../lib/index');

describe('Render', () => {
  let contents = '';
  let filePath = path.join(__dirname, './cases/example.tpl');
  it('Reads the file', () => {
    template.readFile(filePath, (err, data) => {
      should.not.exist(err);
      data.should.be.a('string');
      contents = data;
    })
  })

  it('Parses the file', () => {
    template.parseFile(contents, filePath, (err, data) => {
      should.not.exist(err);
      data.should.be.a('string')
    })
  })

  it('Renders the file to HTML', () => {
    template.render(filePath, {}, (err, data) => {
      should.not.exist(err);
      data.should.be.a('string');
    })
  })
})
