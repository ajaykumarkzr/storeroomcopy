import Shoplist from '../models/shoplist';

const category = ["grocery", "bakery", "restaurant", "apparels", "fish & meat", "fancy"]

export const StoreList = [
    new Shoplist('S1', 'Durga Store', '#f5428d', require('../images/durga.jpg'), 'Sasi stores, near thiruvilayanaadu temple, thrikkadeeri, palakkad', '9947937638', [category[0], category[1]]),
    new Shoplist('S2', 'Sana Bakery', '#da6b7e', require('../images/grains.png'), 'Sana Bakery, thrikkadeeri, palakkad', '1231231234', [category[1]]),
    new Shoplist('S3', 'Nair Store', '#f2ab88', require('../images/snacks.png'), 'Nair Store, thrikkadeeri, palakkad', '2342342345', [category[0]]),
    new Shoplist('S4', 'MPM', '#f55496', require('../images/veg.jpg'), 'MPM, thrikkadeeri, palakkad', '3453453456', [category[2]]),
    new Shoplist('S5', 'VK', '#f5d21d', require('../images/bg.jpg'), 'VK, thrikkadeeri, palakkad', '4564564567', [category[2]]),
    new Shoplist('S6', 'Nima Super Market', '#f22cd', require('../images/snacks.png'), 'Nima Super Market, thrikkadeeri, palakkad', '5675675678', [null]),
    new Shoplist('S7', 'Big Bazar', '#f142cd', require('../images/veg.jpg'), 'Big Bazar, thrikkadeeri, palakkad', '6786786789', [category[0]]),
    new Shoplist('S8', 'Family Fancy', '#fa468d', require('../images/grains.png'), 'Family Fancy, thrikkadeeri, palakkad', '7897897890', [category[5]]),
    new Shoplist('S9', 'Manikkai Store', '#f5de36', require('../images/bg.jpg'), 'Manikkai Store, thrikkadeeri, palakkad', '8908908901', [category[1]]),
    new Shoplist('S10', 'Kakka Store', '#f5de36', require('../images/snacks.png'), 'Kakka Store, thrikkadeeri, palakkad', '7012364677', [category[3]]),
    new Shoplist('S11', 'Evoca', '#f5de36', require('../images/grains.png'), 'Evoca, cherpulassery, palakkad', '7012364677', [category[3]]),
    new Shoplist('S12', 'Infinity', '#f5de36', require('../images/veg.jpg'), 'Infinity, ottappalam, palakkad', '7012364677', [category[4]]),
]
