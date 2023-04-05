let billSubtotal = 45;


function calculateTip(billSubtotal) {

    return (.2 * billSubtotal)
};
 
console.log('Your bill tip costs $' + calculateTip(billSubtotal))

function getBillTotal (billSubtotal) {
   return billSubtotal + calculateTip(billSubtotal)
}

console.log('Your bill total costs $' + getBillTotal(billSubtotal))
