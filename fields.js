const axios = require('axios');
// const util = require('util');

// const API = 'https://jira.di2e.net/rest/api/2/field';

const getFields = async () => {
    const fields = await axios.get('https://jira.di2e.net/rest/api/2/field', {
       auth: {
          username: 'YOUR USERNAME',
          password: 'YOUR PASSWORD',
       },
    });

    fields.data.forEach(field => {
		console.log(`${field.id}, ${field.name}`);
	});
};

getFields();