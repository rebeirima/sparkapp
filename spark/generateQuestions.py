import genai

# Configure the API key
genai.configure(api_key='AIzaSyCm2dlscl5CsxZHt6sVsRjuh2YaUp8eCRk')

# Define a function to generate questions
def generate_questions(context, conflict):
    conflict_type = " with a focus on resolving conflict" if conflict == "Yes" else ""
    prompt = f"Generate 40 questions to foster connection and feelings of closeness for {context} relationships{conflict_type}, and incorporate themes related to the group description. return just a python list of strings of each of the questions generated. Don't number them."

    # Generate questions using the model
    response = model.generate_content(prompt)

    # Extract questions from the response
    questions = response.text.split('\n')

    return questions

# Call the function to generate questions
relationship_description = "Replace this with your actual relationship description"
conflict = "No"  # Replace with "Yes" if there is conflict
generated_questions = generate_questions(relationship_description, conflict)

# Print the generated questions
print(generated_questions)
