from django.conf.urls import include, url
from django.contrib import admin
from jsunittestingsample.views import SampleView

urlpatterns = [
    # Examples:
    # url(r'^$', 'sample.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^sample/', SampleView.as_view()),
]
