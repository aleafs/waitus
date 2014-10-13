/* vim: set expandtab tabstop=2 shiftwidth=2 foldmethod=marker: */

var should  = require('should');
var waitus  = require(__dirname + '/../');

describe('waitus proxy', function () {

  /* {{{ should_waitus_proxy_works_fine() */
  it('should_waitus_proxy_works_fine', function (done) {
    var _me = waitus.create(function (error) {
      should.ok(!error);
      done();
    });
    _me.wait('case1', function () {
      var _evt1 = waitus.create(function () {
        _me.emit('case1');
      });

      _evt1.wait('hello1');
      _evt1.wait('hello2');
      process.nextTick(function () {
        _evt1.emit('hello4');
        _evt1.emit('hello1');
        _evt1.emit('hello1');
        _evt1.emit('hello1');
        _evt1.emit('hello2');
      });
    });
    _me.wait('case2', function () {
      var _evt2 = waitus.create(function (error) {
        should.ok(error);
        error.toString().should.containEql('test1');
        _me.emit('case2');
      });
      _evt2.wait('hello3');
      _evt2.emit('hello3', new Error('test1'));

      _evt2.wait('hello4');
      _evt2.emit('hello4', new Error('test2'));
    });
  });
  /* }}} */

});
