import fs, { writeFileSync } from 'fs';
import path from 'path';
import { cwd } from 'process';

function buildFeedbackPath(){
    return path.join(process.cwd(), 'data', 'feedback.json');
}

function extractFeedback(filepath){
    const fileData = fs.readFileSync(filepath);
    const data = JSON.parse(fileData);
    return data;
}

export default function handler(req, res) {

    if(req.method === 'POST'){
        // extract values coming from req.body
        const email = req.body.email;
        const userText = req.body.text;

        // store those value in a new object
        const newFeedback = {
            id: new Date().toISOString(),
            email: email,
            text: userText
        }

        // store object in database or file
        const filepath = buildFeedbackPath();
        const data = extractFeedback(filepath);
        data.push(newFeedback);
        writeFileSync(filepath, JSON.stringify(data));
        res.status(201).json({message: 'Success', feedback: newFeedback})
    }
    // create the GET path
    else{
        const filepath = buildFeedbackPath();
        const data = extractFeedback(filepath);

        res.status(200).json({feedback: data})
    }
}