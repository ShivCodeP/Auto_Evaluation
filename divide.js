
var {promises:fs} = require("fs");



// console.log(submitt.data.length)
var ia = ["shivam","ankit","rajesh","mohit","shayak","abhishek","shubham","suman","arman","vikas","abutalib"]
async function divide() {
    const file_data = await fs.readFile("data.json");
    const data = JSON.parse(file_data);

    try {
    // console.log(data)
    var total = data.data.length;
    var front = 0;
    var rem = total%ia.length;
    var avg = (total-rem)/ia.length;
    console.log(avg,rem)
    var add = 1;

    for(var i=0; i<ia.length; i++) {
        rem==0?add=0:add=1;   
        var last = front+avg+add;
        console.log(front,last)
        fs.writeFile(`${ia[i]}.json`,JSON.stringify({"data":data.slice(front,last)}),function(err){
            if(err) throw err;
        });
        front = last;
        
        rem--
    }
}
catch(e) {
    console.log(e);
}

}

divide()