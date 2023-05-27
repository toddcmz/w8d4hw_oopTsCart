import {v4 as uuid} from 'uuid'
import Item from './Item'

export default class User{

    constructor(
        private _fullName: string,
        private _age: number,
        private _cart: Item[] = [],
        private _id: string = uuid()
    ){}

    public get fullName(): string {
        return this._fullName;
    }
    public set fullName(value: string) {
        this._fullName = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get cart(): Item[] {
        return this._cart;
    }
    public set cart(value: Item[]) {
        this._cart = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    addToCart(thisItem:Item):void{
        this.cart.push(thisItem)
    }
    
    removeFromCart(thisItem:Item):void{
        this.cart = this.cart.filter(item => item.itemName !== thisItem.itemName)
    }

    removeQuantityFromCart(thisItem:Item, quantity:number):void{
        let itemCount:number = 0
        for(let i=0; i<this.cart.length; i++){
            if(this.cart[i].itemName === thisItem.itemName){
                itemCount +=1
            } // end if
        } // end get count of items for loop
        // if our count of items is less than or equal to removal quantity, run remove from cart
        if (itemCount <= quantity){
            this.removeFromCart(thisItem)
        }else{
            let countRemoved:number = 0
            //const tempCart:Item[] = []
            for(let [i,ele] of this.cart.entries()){
                if (ele.itemName === thisItem.itemName && countRemoved !== quantity){
                    this.cart.splice(i,1)
                    countRemoved +=1
                } // end if
            }// end for - for each item in the cart
        }// end handling removal if chain entirely
    }// end removeQuantityFromCart

    cartTotal():number{
        return this.cart.reduce((acc, cur) => acc + cur.price,0)
    }

    printCart():void{
        console.log(this.cart)
    }
}


