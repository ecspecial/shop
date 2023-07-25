import pic_1 from '../../../../assets/images/pics/pic1.jpg';
import pic_2 from '../../../../assets/images/pics/pic2.png';
import pic_3 from '../../../../assets/images/pics/pic3.png';


export interface CardSpec {
    image: string;
    header: string;
    description: string;
}

export const cardData: CardSpec[] = [
    {
        image: pic_1,
        header: 'Exquisite Silk Robes',
        description: 'Experience the allure of our silk robes trimmed with delicate lace. Unique blend of comfort and sophistication.'
    },
    {
        image: pic_2,
        header: 'Handmade Silk Kimonos',
        description: 'Opulant handcrafted kimonos, carefully woven from the finest dyed silk. Individual design embodying feminity along with elegant fit.'
    },
    {
        image: pic_3,
        header: 'Handcrafted Artisanal Jewelry',
        description: 'Precise anf meticulous design of each piece showcases a stunning blend of craftsmanship and provides a timeless charm.'
    },
];