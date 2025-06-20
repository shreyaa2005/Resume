from flask import Flask, request, jsonify, render_template
import nltk
from flask_cors import CORS
nltk.download('punkt')
nltk.data.path.append("C:/Users/SHREYA/AppData/Roaming/nltk_data")
from nltk.tokenize import sent_tokenize

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/parse', methods=['POST'])
def parse_resume():
    data = request.get_json()
    resume = data.get('resume', '')
    sentences = sent_tokenize(resume)
    summary = ' '.join(sentences[:2]) if len(sentences) > 1 else resume
    return jsonify({'summary': summary})

if __name__ == '__main__':
    app.run(debug=True)
