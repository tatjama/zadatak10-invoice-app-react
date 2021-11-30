export const  createId = () => "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[ Math.floor(Math.random() *25)] 
+ "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[ Math.floor(Math.random() *25)] 
    + Math.floor(Math.random() * 9999).toString().padStart(4,0);          

