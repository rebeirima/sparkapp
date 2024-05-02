const { exec } = require('child_process');
const fs = require('fs');

// Execute the Python script
exec('python generateQuestions.py', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing Python script: ${error}`);
    return;
  }

  // Parse the output from Python (assuming it's JSON)
  const generatedQuestions = JSON.parse(stdout);

  // Generate TypeScript code
  const typescriptCode = `export const levelOne = [\n${generatedQuestions.map(question => `  "${question}"`).join(',\n')}\n];`;

  // Write TypeScript code to levels.ts file
  fs.writeFileSync('public/levels.ts', typescriptCode);

  console.log('Levels.ts file generated successfully!');
});
