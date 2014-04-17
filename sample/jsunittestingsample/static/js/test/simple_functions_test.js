var xhr, requests;

//Mocked out version
/*before(function () {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    requests.responseText = 'Test!';

    xhr.onCreate = function (req) {
                    requests.push(req);
                    xhr.responseText = requests.responseTest;
                   };
});

after(function () {
    // Like before we must clean up when tampering with globals.
    xhr.restore();
});

it("makes a GET request for sample html", function () {
    getHtmlFromSampleHTML(sinon.spy());
    console.log(requests.responseText);
    requests[0].respond(200, { "Content-Type": "text/html" },'Test! Mocking you!');
    console.log(requests[0].responseText);
    chai.expect(requests.length).to.equal(1);
    chai.expect(requests[0].url).to.equal("/sample/");
});*/

//Non mocked out version
it("makes a GET request for sample html", function(done) {
    getHtmlFromSampleHTML(function(response) {
        chai.expect(response.length).to.be.above(1);
        done();
    });
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
