const fs=require("fs");
// fs.writeFile("message.txt","Hello from Node",(err)=>{
//     if(err) throw err;
//     console.log("The file is saved");
// });
fs.readFile('message.txt', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });