from flask import Flask, render_template, request
import pickle
import numpy as np

app = Flask(__name__)

# Load pre-trained model
with open('best_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

@app.route('/')
def home():
    return render_template('animations.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Get form data for selected IPL teams
    team1 = request.form['ipl-team-1']
    team2 = request.form['ipl-team-2']
    final_team = request.form['ipl-team-final']
    
    
    # Example: Prepare the input features for your model
    input_data = [team1, team2, final_team]
    
    # Convert input into numpy array (you can change how you preprocess it if needed)
    prediction_input = np.array([input_data], dtype=np.float32)  # Adjust dtype if needed
    
    # Make prediction
    prediction = model.predict(prediction_input)
    
    # Convert prediction to readable format
    predicted_output = prediction[0]  # Adjust if needed based on model output

    return f"Predicted outcome: {predicted_output}"

if __name__ == "__main__":
    app.run(debug=True)
