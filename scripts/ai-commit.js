const { execSync } = require('child_process');
const { OpenAI } = require('openai');
require('dotenv').config();

async function main() {
  try {
    // 1. Stage all changes
    console.log('Staging changes...');
    execSync('git add -A');

    // 2. Get staged diff
    const diff = execSync('git diff --cached').toString();

    if (!diff) {
      console.log('No changes to commit.');
      return;
    }

    // 3. Generate commit message using AI
    console.log('Generating AI commit message...');
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const prompt = `You are a helper that writes git commit messages. 
Based on the following git diff, write a concise, professional commit message in the imperative mood (e.g., "Add feature" instead of "Added feature"). 
Do not include any other text, just the commit message itself.

Diff:
${diff.substring(0, 4000)} // Truncate if too long`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Fast and cost-effective
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 100,
    });

    const commitMessage = response.choices[0].message.content.trim();
    console.log(`Commit message: "${commitMessage}"`);

    // 4. Commit and Push
    execSync(`git commit -m "${commitMessage.replace(/"/g, '\\"')}"`);
    console.log('Pushing to origin main...');
    execSync('git push origin main');

    console.log('Done! Everything synced.');
  } catch (error) {
    console.error('Error during AI commit:', error.message);
    process.exit(1);
  }
}

main();
