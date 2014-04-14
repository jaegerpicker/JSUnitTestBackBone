var app = app || {};

Backbone.oldSync = Backbone.sync;
Backbone.sync = function( method, model, options ) {
    var headers = {};

    headers[ 'X-CSRFToken' ] = CSRF_TOKEN;

    headers = _.extend(headers, options.headers);
    options.headers = headers;

    return Backbone.oldSync(method, model, options);
};

$(function () {
    'use strict';

    // kick things off by creating the `App`
    new app.AppView();
});
