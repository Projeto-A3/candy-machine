from flask import Flask, jsonify, redirect, url_for, render_template, request
from flask_cors import CORS, cross_origin
import afd

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route("/maquina", methods=["POST", "GET"])
@cross_origin(supports_credentials=True)
def login():
    if request.method == "POST":

        entrada = request.get_json()
        ent = entrada['entrada']
        l = afd.afd(ent)
        troco = l[0]
        print(troco)
        doce = l[1]
        entrada_inicial = l[2]
        return jsonify(
            entrada=entrada_inicial,
            doce=doce
        )
    else:
        return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)