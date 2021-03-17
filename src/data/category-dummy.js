import Category from '../models/shoplist';

export const CategoryList = [
    new Category('C1', 'Vegetables', '#f5428d', require('./veg.jpg')),
    new Category('C2', 'Fruits', '#da6b7e', require('./fruits.jpg')),
    new Category('C3', 'Snacks & foods', '#f2ab88', require('./snacks.jpeg')),
    new Category('C4', 'Food Grains & Oil', '#f55496', require('./foodgrains.png')),
    new Category('C5', 'ReadyMade Food Products', '#f5d21d', require('./readymade.jpg')),
    new Category('C6', 'Egg & Milk Products', '#f22cd', require('./egg.jpg')),
    new Category('C7', 'Cleaning & Hygiene', '#f142cd', require('./hygeine.jpg')),
    new Category('C8', 'Beauty Products', '#fa468d', require('./beauty.jpg')),
    new Category('C9', 'Rice', '#f5de36', require('./rice.jpg')),
    new Category('C10', 'Pooja Items', '#f5ad06', require('./pooja.jpg')),
    new Category('C11', 'Cool Drinks', '#afde36', require('./cool.jpg')),
    new Category('C12', 'Animal Feed', '#bdde96', require('./animal.jpg')),
]