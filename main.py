import requests
import json

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

print get_detected_face_id("http://snappa.static.pressassociation.io/assets/2015/06/26090251/1435305770-36a7c3951a2bb484f033814ee652156a-600x398.jpg")