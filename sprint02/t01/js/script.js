let N = 3;
let Bigt = (456789045675n);
let Str = "F";
let Bool = true;
let Nul = null;
let Undefined;
let a = { k: 'dfasdf',g: 'fdfd'};
let Sym = Symbol();

let T = function t()
{
    print('')
}




alert(
    `int: ${typeof(N)}, \n
    BigInt: ${typeof(Bigt)},\n
    Str  ${typeof(Str)}, \n
    Bool  ${typeof(Bool)},\n
    Null ${typeof(Nul)},\n
    Undefined ${typeof(Undefined)},\n
    object ${typeof(a)},\n
    Symbol ${typeof(Sym)},\n
    Function ${typeof(T)}
    `);
