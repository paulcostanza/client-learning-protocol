const e=[{id:1,type:"radio",category:"hardware",subcategory:"binary-numbers",title:"Binary: 6 digits",question:"What is the decimal value of the binary number `101101`?",options:["40","41","42","43","44","45","46","47","48","49","50"],random:!1,answer:"45",description:`The breakdown:
        
| Bit | 1 | 0 | 1 | 1 | 0 | 1 |
|-|-|-|-|-|-|-|
| Position | 5 | 4 | 3 | 2 | 1 | 0 |
| Value | 32 | 16 | 8 | 4 | 2 | 1 |
| Add? | Y | n | Y | Y | n | Y |

Adding up 32 + 8 + 4 + 1 = 45`},{id:2,type:"radio",category:"hardware",subcategory:"binary-numbers",title:"D to B",question:"What is the binary representation of 26?",options:["`11000`","`11001`","`11010`","`11011`","`11100`","`11101`"],random:!1,answer:"`11010`",description:""}];export{e as default};
