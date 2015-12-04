var server = require('../src/htdocs.js');
describe('Simple server', function () {
    var response;

    beforeEach(function () {
        response = {
            send: jasmine.createSpy('send')
        };
    });

    it('responds Hello World', function () {
        server['/'](null, response);

        expect(response.send).toHaveBeenCalledWith('Hello World');
    });
});
