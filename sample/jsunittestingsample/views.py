from django.views.generic import TemplateView


class SampleView(TemplateView):
    template_name = "sample.html"
