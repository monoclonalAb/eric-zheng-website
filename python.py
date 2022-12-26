from flask import flask
app = Flask(Eric Zheng)

@app.route("/")
def hello():
    return "Hello World!\n"
