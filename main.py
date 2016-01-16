from flask import Flask, request, redirect, send_from_directory
import requests
import json
import jinja2
import pymysql

app = Flask(__name__, static_url_path='')
socketio = SocketIO(app)
JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)
db = pymysql.connect(host='localhost', passwd='bassic', user='root', db='Bassic')

@app.route('/detected/<path:path>')
def get_detected_face_id(image_url):
	url = "https://api.projectoxford.ai/face/v1.0/detect" 
	data = { "url": image_url}
	headers = {"Content-Type": "application/json", "Ocp-Apim-Subscription-Key": "c1e6a2a46d7a4160829390d5de36b68c"}
	r = requests.post(url, params = None, data = json.dumps(data), headers = headers)
	return r.json()[0]["faceId"]

@app.route('/check/<path:path>')
def is_face_match(faceId1, faceId2):
	url = "https://api.projectoxford.ai/face/v1.0/verify" 
	data = { "faceId1": faceId1, "faceId2": faceId2}
	headers = {"Content-Type": "application/json", "Ocp-Apim-Subscription-Key": "c1e6a2a46d7a4160829390d5de36b68c"}
	r = requests.post(url, params = None, data = json.dumps(data), headers = headers)
	return r.text

@app.route('/add/<path:path>')
def add_face(faceId):
    #doodoo go here

if __name__ == "__main__":
	port = int(os.environ.get('PORT', 5000))
    	app.run(host='0.0.0.0', port=port, debug=True)

print get_detected_face_id("http://snappa.static.pressassociation.io/assets/2015/06/26090251/1435305770-36a7c3951a2bb484f033814ee652156a-600x398.jpg")