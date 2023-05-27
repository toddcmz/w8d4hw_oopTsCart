import Item from './Item'


export default class Shop{

    constructor(

        private _itemsInShop: Item[] = []

    ){
        const tshirt1 = new Item('fridge shirt', 20, 'shirt with a funny haiku')
        const tshirt2 = new Item('calvinShirt', 15, 'unlicensed comic material')
        const tshirt3 = new Item('vbShirt', 30, 'dryfit sports shirt')
        this.itemsInShop.push(tshirt1)
        this.itemsInShop.push(tshirt2)
        this.itemsInShop.push(tshirt3)
    }

    public get itemsInShop(): Item[] {
        return this._itemsInShop
    }
    public set itemsInShop(value: Item[]) {
        this._itemsInShop = value
    }

}