from flask import Flask, request, jsonify, make_response
from flask_cors import CORS, cross_origin
from openai import OpenAI

app = Flask(__name__)
cors = CORS(app)

client = OpenAI(
    api_key = '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'
)

@app.route('/api', methods=['POST'])
def api():
        completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "Return only the percentage based on your own calculations. Your job is to analyse a job application based on job title, job description and workplace description and analyse of how much the job might be related to shady or human trafficking activity."},
                {"role": "user", "content": " Job Description:" + request.json['description']},
            ]
        )
        response = completion.choices[0].message.content
        print(response)
        json_response = jsonify(response)
        return make_response(json_response, 200)
    

if __name__ == '__main__':
    app.run()