from flask import Flask, send_from_directory
import webbrowser
import threading
import os

app = Flask(__name__)

@app.route('/')
def serve_royal_decree():
    return send_from_directory('.', 'index.html')

@app.route('/<path:filename>')
def serve_royal_assets(filename):
    return send_from_directory('.', filename)

@app.route('/music/<path:filename>')
def serve_royal_music(filename):
    return send_from_directory('music', filename)

def open_royal_gate():
    threading.Timer(1, lambda: webbrowser.open('http://localhost:5000')).start()

if __name__ == '__main__':
    if not os.path.exists('music'):
        os.makedirs('music')
    open_royal_gate()
    app.run(debug=True, port=5000)