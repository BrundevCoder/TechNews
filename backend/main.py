from flask import Flask, jsonify
from flask_cors import CORS
import requests, os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

api_key = os.getenv("news_api_key")

@app.route("/news", methods=["GET"])
def get_news():

    api_response = requests.get(
        "https://api.apitube.io/v1/news/everything?language.code=en&per_page=10&title=tech",
        headers={"X-API-Key": api_key},
    )

    return jsonify(api_response.json())

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)