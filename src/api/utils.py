from flask import jsonify, url_for

NEEDS_MAP = {
    1: "Sitio web",
    2: "Aplicación web",
    3: "Tienda online",
    4: "Portafolio creativo",
    5: "Identidad y contenido visual",
    6: "Mejorar una web existente",
    7: "No estoy seguro"
}

STAGE_MAP = {
    1: "Tengo una idea inicial",
    2: "Ya tengo marca o identidad visual",
    3: "Ya tengo diseño",
    4: "Tengo una web y quiero mejorarla",
    5: "Estoy listo para empezar",
    6: "Necesito orientación"
}

TIMEFRAME_MAP = {
    1: "Lo antes posible",
    2: "En 1 mes",
    3: "2 a 3 meses",
    4: "Más adelante",
    5: "No lo sé"
}

class APIException(Exception):
    status_code = 400

    def __init__(self, message, status_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        rv = dict(self.payload or ())
        rv['message'] = self.message
        return rv

def has_no_empty_params(rule):
    defaults = rule.defaults if rule.defaults is not None else ()
    arguments = rule.arguments if rule.arguments is not None else ()
    return len(defaults) >= len(arguments)

def generate_sitemap(app):
    links = ['/admin/']
    for rule in app.url_map.iter_rules():
        # Filter out rules we can't navigate to in a browser
        # and rules that require parameters
        if "GET" in rule.methods and has_no_empty_params(rule):
            url = url_for(rule.endpoint, **(rule.defaults or {}))
            if "/admin/" not in url:
                links.append(url)

    links_html = "".join(["<li><a href='" + y + "'>" + y + "</a></li>" for y in links])
    return """
        <div style="text-align: center;">
        <img style="max-height: 80px" src='https://storage.googleapis.com/breathecode/boilerplates/rigo-baby.jpeg' />
        <h1>Rigo welcomes you to your API!!</h1>
        <p>API HOST: <script>document.write('<input style="padding: 5px; width: 300px" type="text" value="'+window.location.href+'" />');</script></p>
        <p>Start working on your project by following the <a href="https://start.4geeksacademy.com/starters/full-stack" target="_blank">Quick Start</a></p>
        <p>Remember to specify a real endpoint path like: </p>
        <ul style="text-align: left;">"""+links_html+"</ul></div>"
