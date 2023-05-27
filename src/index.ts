import User from './shopClasses/User'
import Shop from './shopClasses/Shop'

const myShoppe = new Shop()
const toddcmz = new User("Todd Camnitz", 36)

toddcmz.addToCart(myShoppe.itemsInShop[0])
toddcmz.printCart()
console.log(toddcmz.cartTotal())

toddcmz.addToCart(myShoppe.itemsInShop[1])
toddcmz.addToCart(myShoppe.itemsInShop[1])
toddcmz.addToCart(myShoppe.itemsInShop[1])
toddcmz.printCart()
console.log(toddcmz.cartTotal())

toddcmz.addToCart(myShoppe.itemsInShop[2])
toddcmz.addToCart(myShoppe.itemsInShop[2])
toddcmz.addToCart(myShoppe.itemsInShop[2])
toddcmz.printCart()
console.log(toddcmz.cartTotal())

toddcmz.removeFromCart(myShoppe.itemsInShop[1])
toddcmz.printCart()
console.log(toddcmz.cartTotal())

toddcmz.removeQuantityFromCart(myShoppe.itemsInShop[2], 2)
toddcmz.printCart()
console.log(toddcmz.cartTotal())
