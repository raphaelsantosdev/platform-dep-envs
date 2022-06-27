# Platform Envs

## About
with this script you will be able to see in which revision each API is deployed, filtering by Environments and Brands.

## Usage
```sh
node env_info.js <brand_env>
```
```sh
npm start <brand_env> 
```
**Example:**
```sh
node env_info.js s2u_dev
```

A `.json` file will be generated containing the APIs IDs and their respective revisions that are deployed in the defined environment.

**PS:** The script assumes you are using an .env file.