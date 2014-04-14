/*global Backbone */
var app = app || {};

(function () {
    'use strict';

    // Todo Model
    // ----------

    // Our basic **Todo** model has `title`, `order`, and `completed` attributes.
    var Profile = Backbone.Model.extend({
        defaults: {
            lang_code: 'en-us',
            title: ''
        },
        initialize: function(){
            console.log("Welcome to this world");
        },
        urlRoot: "/users/profile/",
        addThenMulti: function(num1, num2, num3) {
            return (num1 + num2) * num3;
        }
    });

    // We only have one profile on the app, the currently logged in user
    app.prof = new Profile();
})();
