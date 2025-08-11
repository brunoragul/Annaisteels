from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector
import json

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

# MySQL connection
db = mysql.connector.connect(
    host="127.0.0.1",
    user="root",
    password="Sokker@123",
    database="annaisteel"
)

@app.route('/api/products', methods=['GET'])
def get_products():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM sample_products")
    products = cursor.fetchall()

    # Convert highlights string to list
    for product in products:
        highlights_str = product.get('highlights')
        product['highlights'] = highlights_str.split(',') if highlights_str else []
    print(json.dumps(products, indent=2))
    return jsonify(products)

if __name__ == '__main__':
    app.run(debug=True)

