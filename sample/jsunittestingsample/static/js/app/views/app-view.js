/*global Backbone, jQuery, _ */
var app = app || {};

(function ($) {
    'use strict';

    // The Application
    // ---------------

    // Our overall **AppView** is the top-level piece of UI.


    app.BaseView = Backbone.View.extend({
        generateAlert: function (alertContent, alertType, clearPrevious) {

            clearPrevious = typeof clearPrevious !== 'undefined' ? clearPrevious : true;
            if( clearPrevious === true)
                $('#bui-alerts .alert').remove();

            var compiled = _.template( $('#alert-messaging-template').html() );

            $('#bui-alerts').append( compiled({
                    content : alertContent,
                    type    : alertType
                })
            );

            $('.alert').show();

            // Get height of alert after being generated, then apply to icon style
            $('.alert').each(function(){
                var alertHeight = $(this).height();
                var iconHeight = $(this).find('i').height();
                var iconMarginTop = Math.floor( ((alertHeight - iconHeight) / 2) );
                $(this).find('i').css({
                    'marginTop' : iconMarginTop + 'px'
                });
            });

            // hide success alert w/click on page anywhere
            if( $('.alert').is(':visible') ) {
                $('body').on('mousedown', function(event) {
                    $('.alert').fadeOut('medium');
                    $('body').unbind('mousedown');
                });
            }
        },
        fadeSpinner: function (state) {
            if(state === 'in' ) {
                $('#modal-ajax-spinner').fadeIn(300);
            }
            else {
                $('#modal-ajax-spinner').fadeOut(300);
            }
        }
    });
    app.AppView = app.BaseView.extend({
        el: "#profileapp",
        events: {
            'click #profileSubmit': 'saveProfile'
        },
        template: JST.prof,
        initialize: function () {
            this.submitButton = this.$('#profileSubmit');

            this.listenTo(app.prof, 'sync', this.render);
            app.prof.fetch({reset: true});
            this.$lang = this.$('.lang-select');
        },
        render: function() {
            this.fadeSpinner('out');
            this.$el.html(this.template(app.prof.toJSON()));
            this.$lang = this.$('.lang-select');
            if (app.prof.get('lang_code') !== jsData.langCode) {
                location.reload();
            }
            return this;
        },
        addTheMulti: function(num1, num2, num3) {
            return (num1 + num2) * num3;
        },
        saveProfile: function() {
            var value = this.$lang.val();
            console.log(value);
            if (value !== app.prof.get('lang_code')) {
                this.fadeSpinner('in');
                app.prof.save({lang_code: value});
            }
        }
    });
})(jQuery);
