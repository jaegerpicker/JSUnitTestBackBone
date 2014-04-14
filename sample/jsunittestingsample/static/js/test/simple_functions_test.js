var xhr, requests;

before(function () {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = function (req) { requests.push(req); };
});

after(function () {
    // Like before we must clean up when tampering with globals.
    xhr.restore();
});

it("makes a GET request for sample html", function () {
    getHtmlFromSampleHTML(sinon.spy());

    chai.assert.equal(requests.length, 1);
    chai.assert.equal(requests[0].url, "/sample");
});

describe('simple functions', function(){
    describe('#addThenSub()', function(){
        it('should return 5 when passed 5 5 5 for parameters', function(){
            chai.assert.equal(5, addThenSub(5, 5, 5));
        });
    });
    describe('#subThenAdd()', function() {
      it('should return 5 when passed 5 5 5 for parameters', function() {
        chai.assert.equal(5, subThenAdd(5, 5, 5));
      });
    });
});
