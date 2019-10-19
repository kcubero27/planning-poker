import React from 'react';
import {VerticalScroll} from "./components/vertical-scroll";
import {Card} from "./components/card";

const cardList = [
    '1-low-hanging-fruit',
    '2-piece-of-cake',
    '3-it-aint-rocket-science',
    '5-duck-billed-platypus',
    '8-an-arm-and-a-leg',
    '13-squeaking-by',
    '20-dont-put-all',
    '40-meterse-en-un-berenjenal',
    '100-monster-task',
    'coffee-break',
    'eat-a-brownie',
    'here-be-dragons',
    'when-pigs-fly',
    'yak-shaving'
];

const CARD_IMAGE_EXTENSION = 'png';
const IMAGES_FOLDER = `${process.env.PUBLIC_URL}/assets/images`;

export const App: React.FC = () => {
    return (
        <VerticalScroll>
            {cardList.map(cardUrl => <Card imageUrl={`${IMAGES_FOLDER}/${cardUrl}.${CARD_IMAGE_EXTENSION}`}/>)}
        </VerticalScroll>
    );
};