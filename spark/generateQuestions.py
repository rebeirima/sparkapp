import sys
import json
import genai

# Configure the API key
genai.configure(api_key='AIzaSyCm2dlscl5CsxZHt6sVsRjuh2YaUp8eCRk')

model = genai.GenerativeModel('gemini-pro')

# Define a function to generate questions
def generate_questions(profile_data):
    # Extract relevant information from profile data
    group_relationship = profile_data.get("groupRelationship", "")
    inside_jokes = profile_data.get("insideJokes", "")
    memorable_experience = profile_data.get("memorableExperience", "")
    off_limits_topics = profile_data.get("offLimitsTopics", "")
    trust_level = profile_data.get("trustLevel", "")

    # Construct prompt with placeholders for inside joke and memorable experience
    prompt = f"Generate 40 questions to foster connection and feelings of closeness for {group_relationship} relationships. Incorporate an inside joke about {inside_jokes} and a memorable experience involving {memorable_experience}. Avoid topics related to {off_limits_topics}. How can we build trust together?"

    # Generate questions using the model
    response = model.generate_content(prompt)

    # Extract questions from the response
    questions = response.text.split('\n')

    return questions

# Read profile data from command line arguments
profile_data = json.loads(sys.argv[1])

# Call the function to generate questions
generated_questions = generate_questions(profile_data)

# Print the generated questions
print(json.dumps(generated_questions))
