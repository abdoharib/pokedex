var toHex = require('colornames')

export default function getPokemonColor(color:string){
    
    return toHex(color)+'21'
}