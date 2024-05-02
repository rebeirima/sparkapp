import { exec } from 'child_process';
import { ProfileFormData } from './ProfileFormData'; // Assuming this file exists in the same directory

export function generateQuestions(profileData: ProfileFormData): Promise<string[]> {
  return new Promise((resolve, reject) => {
    // Construct the command to execute the Python script with profile data as arguments
    const command = `python sparkapp/spark/generateQuestions.py '${JSON.stringify(profileData)}'`;

    // Execute the Python script
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing Python script: ${error}`);
        reject(error);
      } else {
        // Parse the output from Python script
        const questions: string[] = JSON.parse(stdout);
        resolve(questions);
      }
    });
  });
}
