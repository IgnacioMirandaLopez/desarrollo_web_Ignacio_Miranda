from flask import Flask, render_template, request, redirect
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from db import Base, Actividad, Foto, ContactarPor, ActividadTema
from datetime import datetime
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
UPLOAD_FOLDER = 'static/uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

engine = create_engine("mysql+pymysql://usuario:contraseña@localhost/tarea2", echo=True)
Base.metadata.bind = engine
DBSession = sessionmaker(bind=engine)
session = DBSession()

@app.route("/Inicio", methods=["GET", "POST"])
def inicio():
    if request.method == "GET":
        return render_template("Portadaa.html")



@app.route("/CrearActividad", methods=["GET", "POST"])
def formulario():
    if request.method == "POST":
        comuna_id = request.form.get("comuna")
        sector = request.form.get("sector")
        nombre = request.form.get("nombre")
        email = request.form.get("email")
        celular = request.form.get("celular")
        contacto = request.form.get("contacto")
        contacto_id = request.form.get("contacto-id")
        inicio = datetime.fromisoformat(request.form.get("inicio"))
        termino = datetime.fromisoformat(request.form.get("termino")) if request.form.get("termino") else None
        descripcion = request.form.get("descripcion")
        tema = request.form.get("tema")
        glosa_otro = request.form.get("tema-descripcion")

        # Guardar actividad
        actividad = Actividad(
            comuna_id=comuna_id,
            sector=sector,
            nombre=nombre,
            email=email,
            celular=celular,
            dia_hora_inicio=inicio,
            dia_hora_termino=termino,
            descripcion=descripcion
        )
        session.add(actividad)

        # Guardar contacto
        contacto_obj = ContactarPor(
            nombre=contacto,
            identificador=contacto_id,
            actividad_id=actividad.id
        )
        session.add(contacto_obj)

        # Guardar tema
        tema_obj = ActividadTema(
            tema=tema,
            glosa_otro=glosa_otro if tema == "otro" else None,
            actividad_id=actividad.id
        )
        session.add(tema_obj)

        # Guardar archivo
        archivo = request.files['foto']
        if archivo:
            filename = secure_filename(archivo.filename)
            ruta = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            archivo.save(ruta)

            foto = Foto(
                ruta_archivo=ruta,
                nombre_archivo=filename,
                actividad_id=actividad.id
            )
            session.add(foto)

        session.commit()
        return "Actividad registrada con éxito."

    return render_template("info1.html")

if __name__ == "__main__":
    app.run(debug=True)
