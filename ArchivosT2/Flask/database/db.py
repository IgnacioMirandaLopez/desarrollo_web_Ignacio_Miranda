from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime, Enum, VARCHAR
from sqlalchemy.orm import declarative_base, relationship
DB_NAME = "tarea2"
DB_USERNAME = "cc5002"
DB_PASSWORD = "programacionweb"
DB_HOST = "localhost"
DB_PORT = 3306

DATABASE_URL = f"mysql+pymysql://{DB_USERNAME}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

engine = create_engine(DATABASE_URL, echo=False, future=True)


Base = declarative_base()

Base = declarative_base()

class Region(Base):
    __tablename__ = 'region'
    __table_args__ = {'schema': 'tarea2'}
    id = Column(Integer, primary_key=True)
    nombre = Column(String(200), nullable=False)

class Comuna(Base):
    __tablename__ = 'comuna'
    __table_args__ = {'schema': 'tarea2'}
    id = Column(Integer, primary_key=True)
    nombre = Column(String(200), nullable=False)
    region_id = Column(Integer, ForeignKey('tarea2.region.id'), nullable=False)

class Actividad(Base):
    __tablename__ = 'actividad'
    __table_args__ = {'schema': 'tarea2'}
    id = Column(Integer, primary_key=True)
    comuna_id = Column(Integer, ForeignKey('tarea2.comuna.id'), nullable=False)
    sector = Column(String(100))
    nombre = Column(String(200), nullable=False)
    email = Column(String(100), nullable=False)
    celular = Column(String(15))
    dia_hora_inicio = Column(DateTime, nullable=False)
    dia_hora_termino = Column(DateTime)
    descripcion = Column(String(500))

class Foto(Base):
    __tablename__ = 'foto'
    __table_args__ = {'schema': 'tarea2'}
    id = Column(Integer, primary_key=True)
    ruta_archivo = Column(String(300), nullable=False)
    nombre_archivo = Column(String(300), nullable=False)
    actividad_id = Column(Integer, ForeignKey('tarea2.actividad.id'), nullable=False)

class ContactarPor(Base):
    __tablename__ = 'contactar_por'
    __table_args__ = {'schema': 'tarea2'}
    id = Column(Integer, primary_key=True)
    nombre = Column(Enum('whatsapp', 'telegram', 'X', 'instagram', 'tiktok', 'otra'), nullable=False)
    identificador = Column(String(150), nullable=False)
    actividad_id = Column(Integer, ForeignKey('tarea2.actividad.id'), nullable=False)

class ActividadTema(Base):
    __tablename__ = 'actividad_tema'
    __table_args__ = {'schema': 'tarea2'}
    id = Column(Integer, primary_key=True)
    tema = Column(Enum('música', 'deporte', 'ciencias', 'religión', 'política', 'tecnología', 'juegos', 'baile', 'comida', 'otro'), nullable=False)
    glosa_otro = Column(String(15))
    actividad_id = Column(Integer, ForeignKey('tarea2.actividad.id'), nullable=False)