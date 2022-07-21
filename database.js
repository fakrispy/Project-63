import dictionary from '../database';


var word = dictionary[text]["word"]
var lexicalCategory = dictionary[text]["lexicalCategory"]
var definition = dictionary[text]["definition"]

this.setState({
    "word" : word,
    "lexicalCategory" : lexicalCategory,
    "definition" : definition
})