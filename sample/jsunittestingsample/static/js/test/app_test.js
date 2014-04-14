var should = chai.should();

describe("Application", function() {
  it("creates a global variable for the name space", function () {
    should.exist(app);
  });
});

describe("app level testing of backbone.js functions", function() {
  it("should return 30 for 5 5 3", function() {
    chai.expect(app.prof.addThenMulti(5, 5, 3)).to.equal(30);
  });
});


describe("Profile Model", function(){
  describe("Initialization", function() {
    it("should default the lang_code to 'en-us'",function() {
      chai.expect(app.prof.get('lang_code')).to.equal('en-us');
    });
    it("should default the urlroot to /users/profile/",function() {
      chai.expect(app.prof.get('title')).to.equal('');
    });
  });
});
