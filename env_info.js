import fetch from 'node-fetch';
import { writeFileSync } from 'fs';
import 'dotenv/config'

const arg = process.argv[2].toUpperCase();
const env = process.env[arg];
const sensediaAuth = process.env.SENSEDIA_AUTH;

const response = await fetch(env, {
    method: 'get',
    headers: {
        'Content-Type': 'application/json',
        'Sensedia-Auth': sensediaAuth
    }
});

const body = await response.text();
const json = JSON.parse(body);
const revisionsDeployed = json.revisionsDeployed;
const revisions = revisionsDeployed.map(obj => {
    return {
        apiId: obj.apiId,
        apiName: obj.apiName,
        revisionNumber: obj.revisionNumber,
    }
});

const result = {
    name: json.name,
    revisions: revisions,
}

const filename = arg.toLowerCase() + ".json";
const data = JSON.stringify(result, null, 2);
const encoding = 'utf8';

writeFileSync(filename, data, encoding)
