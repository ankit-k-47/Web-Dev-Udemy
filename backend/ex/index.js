let user={
    name:"john"
};

let sym=Symbol("id");
user[sym]="hello";
console.log(user);
let su=Symbol("id");
user[su]="hi"
console.log(user);