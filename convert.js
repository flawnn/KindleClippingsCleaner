// read file from same directory
var fs = require('fs');
var file = fs.readFileSync('./gg.txt', 'utf8').split("==========");
let res = ""

let prev = undefined
// Identifier for note entries
let rgx = RegExp("Ihre Notiz auf")

for(let entry of file){
    if(!rgx.test(entry)){
        // Change "Position" with the corresponding key word in your clipping file's language
        let line = entry.match(/(?<=Position )\d+(-\d+)?/g)
        if(prev){
            if(line != undefined) {
                line = line[0].split("-");
                let start1 = line[0]
                let start2 = prev[1][0]
        
                let inside = false;
        
                if(start1 < prev[1][1] && start1 >= prev[1][0]){
                    inside = true
                } else if(start2 < line[0] && start2 >= line[1]){
                    inside = true
                } else if((line[0] == prev[1][0] && line[1] == prev[1][1] || start1 <= prev[1][1] && start1 >= prev[1][0] && prev[1][1] == prev[1][0] || start2 <= line[0] && start2 >= line[1] && line[0] == line[1])                ){
                    inside = true
                }
    
                if(inside){
                    prev = [entry, line]
                    continue; 
                } else {
                    res += prev[0] + "==========" 
                }
            } else {
                res += "==========\n"
            }
        }
            
        prev = [entry, line]
    } else {
        res += entry + "=========="
    }
}

// save string to file
fs.writeFileSync('./cleaned.txt', res, 'utf8');