[![Build Status](https://secure.travis-ci.org/aleafs/waitus.png?branch=master)](http://travis-ci.org/aleafs/waitus)

## About

`waitus` 是一个简单的本地文件日志类，提供的特性有：

* 日志分级，并且可根据需要动态调整日志级别；
* 根据时间进行日志文件的自动切割；
* 对Error对象堆栈的记录，支持将全局Error记录在同一个文件，便于监控分析；
* 支持对日志行进行自定义formatter；
* 支持日志文件被外部进程移除后自动创建，不导致日志丢失。

## Install

```bash
$ npm install waitus
```

## Usage

```javascript

var waitus = require('waitus');

var log = waitus.create({
  'file' : 'a.log', 
  'level' : waitus.WARN | waitus.ERROR
});
log.debug('ignore');
log.warn('warn1');

```

## License

(The MIT License)

Copyright (c) 2012 aleafs and other contributors

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
