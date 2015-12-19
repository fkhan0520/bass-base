import requests
import json

def get_emotion_values(image_url):
	url = "https://api.projectoxford.ai/emotion/v1.0/recognize" 
	data = { "url": image_url}
	headers = {"Content-Type": "application/json", "Ocp-Apim-Subscription-Key": "902567b4f75743ae8e039d37f9aeb972"}
	r = requests.post(url, params = None, data = json.dumps(data), headers = headers)
	print r.text

get_emotion_values("http://snappa.static.pressassociation.io/assets/2015/06/26090251/1435305770-36a7c3951a2bb484f033814ee652156a-600x398.jpg")