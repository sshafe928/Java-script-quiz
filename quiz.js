
alert("Welcome to the funny little quiz.")
var point = 0
let questions = ["How many letters is in Sabrina's name?", 7, "What give the earth light?", 'sun', "How many eyes does a human have?", 2, "what is the study of life called?", 'biology', "How many hours are in a day?", 24,"What is the green in a chloroplast?", 'chlorophyll',"What is a ghosts favorite food?",'boo-berry',"What is Sabrina's middle initial", 'a',"What is the square root of 25?", 5,"What is the main code language that is used to make a website look cool?",'css']
for(var i = 0; i < 20 ; i += 2){
    let answer = prompt(questions[i])
    if(answer == questions[i+1]){
        point += 1
    
    }
}
alert("you got "+ point +" out of 10")

        