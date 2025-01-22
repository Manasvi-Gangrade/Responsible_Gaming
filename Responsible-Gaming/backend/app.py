from flask import Flask, request, jsonify
from googleapiclient.discovery import build
import jwt
import datetime

# Flask app banate hain
app = Flask(__name__)

# Google Perspective API key ko load karte hain (toxicity check ke liye)
API_KEY = 'your_google_api_key'
service = build('commentanalyzer', 'v1alpha1', developerKey=API_KEY)

# JWT secret key user authentication ke liye
SECRET_KEY = 'your_jwt_secret_key'

# Sample toxicity checking ka endpoint
@app.route('/check-toxicity', methods=['POST'])
def check_toxicity():
    text = request.json.get('text')
    
    if not text:
        return jsonify({'error': 'Text nahi diya'}), 400

    analyze_request = {
        'comment': {'text': text},
        'languages': ['en'],
        'requestedAttributes': {'TOXICITY': {}}
    }
    response = service.comments().analyze(body=analyze_request).execute()
    toxicity_score = response['attributeScores']['TOXICITY']['summaryScore']['value']

    return jsonify({'toxicity_score': toxicity_score})

# Sample JWT authentication route (login route)
@app.route('/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')
    
    # Simple validation
    if username == 'admin' and password == 'password':
        # JWT token generate karte hain
        token = jwt.encode({'username': username, 'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)}, SECRET_KEY, algorithm='HS256')
        return jsonify({'token': token})

    return jsonify({'error': 'Invalid credentials'}), 401

# Flask app ko run karte hain
if __name__ == '__main__':
    app.run(debug=True)
