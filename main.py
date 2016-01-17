from flask import Flask, request, redirect, send_from_directory
import requests
import json
import jinja2
import pickle

app = Flask(__name__, static_url_path='')
JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)
f = "knownFaces.p"

@app.route('/')
def index():
	template = JINJA_ENVIRONMENT.get_template('index.html')
	return template.render()

def get_detected_face_id(image_url):
	url = "https://api.projectoxford.ai/face/v1.0/detect" 
	data = { "url": image_url}
	headers = {"Content-Type": "application/json", "Ocp-Apim-Subscription-Key": "c1e6a2a46d7a4160829390d5de36b68c"}
	r = requests.post(url, params = None, data = json.dumps(data), headers = headers)
	return r.json()[0]["faceId"]

def is_face_match(faceId1, faceId2):
	url = "https://api.projectoxford.ai/face/v1.0/verify" 
	data = { "faceId1": faceId1, "faceId2": faceId2}
	headers = {"Content-Type": "application/json", "Ocp-Apim-Subscription-Key": "c1e6a2a46d7a4160829390d5de36b68c"}
	r = requests.post(url, params = None, data = json.dumps(data), headers = headers)
	return r.text

@app.route('/<path:path>')
def send_videos(path):
	print "sending static stuff: " + path
	return send_from_directory(path)

# @app.route('/js/<path:path>')
# def send_js(path):
#     print "sending js"
#     return send_from_directory('js', path)

# @app.route('/css/<path:path>')
# def send_css(path):
#     print "sending css"
#     return send_from_directory('css', path)

# @app.route('/pics/<path:path>')
# def send_jpg(path):
# 	print "sending jpg"
# 	return send_from_directory('pics', path)

@app.route('/add/image_url')
def add_face(image_url):
	faceId = get_detected_face_id(image_url)
	knownFaces = pickle.load(f)
	new = True
	for face in knownFaces:
		if is_face_match(face, faceId):
			new = False
			break
	if new:
		knownFaces.append(faceId)
		pickle.dump(knownFaces, f)

@app.route('/movement/image_url')
def on_movement(image_url):
	faceId = get_detected_face_id(image_url)
	knownFaces = pickle.load(f)
	new = True
	for face in knownFaces:
		if is_face_match(face, faceId):
			new = False
			break
	if !new:
		return True

if __name__ == "__main__":
	port = int(os.environ.get('PORT', 5000))
    	app.run(host='0.0.0.0', port=port, debug=True)

#print get_detected_face_id("http://snappa.static.pressassociation.io/assets/2015/06/26090251/1435305770-36a7c3951a2bb484f033814ee652156a-600x398.jpg")