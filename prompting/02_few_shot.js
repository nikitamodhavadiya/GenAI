import {OpenAI} from 'openai';

const client = new OpenAI({
    apiKey: 'Your API Key',
});

async function main(){
    const result = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
        {
            role: 'user', 
            content: `What is 2 + 5 equals?
            Give me direct answer 
            For exampple 
            9(Nine) `,
        },
    ],
});
console.log(result.choices[0].message.content);
}



main();
