# Templates (Working Title)
Templates provides a simple way to add Templates to html files through the use of HTML comments containing keywords.

## How to use

1. `npm i --save https://github.com/Mandosis/template-engine.git` This is temporary until the project is named and published on NPM.

2. Require templates in the main file `var tpl = require('template-engine');
`

3. Configure express to use templates by adding `app.engine('tpl', tpl.__express);` and `app.set('view engine', 'tpl');` to the main application file.

4. Use `req.render()` to render html files with the `.tpl` extension.

## License

MIT License

Copyright (c) 2016 Chris Rabuse

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
