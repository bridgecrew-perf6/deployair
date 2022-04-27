import firebase_admin
from firebase_admin import credentials,firestore
import time

credentialData = credentials.Certificate("credentials.json")
firebase_admin.initialize_app(credenditalData)
firestoreDb = firestore.client()

def sendDataToDB(co2,humidity,pressure,temperature):
    firestoreDb.collection(u'testCollection').add({"co2": co2,
    "humidity": humidity,
    "pressure": pressure,
    "temperature": temperature,
    "timestap": int(time.time() * 1000)})



