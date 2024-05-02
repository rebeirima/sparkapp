const { exec } = require('child_process');

// Execute the Python script
exec('python generateQuestions.py', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing Python script: ${error}`);
    return;
  }
  
  // Write the output to levels.ts file
  const fs = require('fs');
  fs.writeFileSync('public/levels.ts', stdout);
  
  console.log('Levels.ts file generated successfully!');
});
