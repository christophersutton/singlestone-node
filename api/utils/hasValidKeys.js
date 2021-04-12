const { validContact } = require('../../data/testData')
// Something like Typescript type validation would be preferable to this...
const hasValidKeys = (contactInput) => {

    function getAllKeys(obj,res) {
        for (const prop in obj) {
            const value = obj[prop];
            if (typeof value === 'object') {
                ['0','1','2'].includes(prop) ? '' : res.push(prop)
                getAllKeys(value,res); 
            }
            else {
                res.push(prop);
            }
        }
        return res;
    }

    validKeys = new Set(getAllKeys(validContact,[]))
    inputKeys = new Set(getAllKeys(contactInput,[]))
    return validKeys.size === inputKeys.size && [...validKeys].every(value => inputKeys.has(value));

}

module.exports = hasValidKeys