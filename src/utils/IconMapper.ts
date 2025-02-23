import Apple from "../assets/icon/emoji/Apple.svg";
import Bear from "../assets/icon/emoji/Bear.svg";
import Beer from "../assets/icon/emoji/Beer.svg";
import Blossom from "../assets/icon/emoji/Blossom.svg";
import Butterfly from "../assets/icon/emoji/Butterfly.svg";
import Camera from "../assets/icon/emoji/Camera.svg";
import Car from "../assets/icon/emoji/Car.svg";
import Cat from "../assets/icon/emoji/Cat.svg";
import Cheese from "../assets/icon/emoji/Cheese.svg";
import Chick from "../assets/icon/emoji/Chick.svg";
import Chocolate from "../assets/icon/emoji/Chocolate.svg";
import Clover from "../assets/icon/emoji/Clover.svg";
import Coffee from "../assets/icon/emoji/Coffee.svg";
import DevMan from "../assets/icon/emoji/DevMan.svg";
import DevWoman from "../assets/icon/emoji/DevWoman.svg";
import Dog from "../assets/icon/emoji/Dog.svg";
import Dolphin from "../assets/icon/emoji/Dolphin.svg";
import Donut from "../assets/icon/emoji/Donut.svg";
import ExcitedFace from "../assets/icon/emoji/ExcitedFace.svg";
import Fire from "../assets/icon/emoji/Fire.svg";
import Fox from "../assets/icon/emoji/Fox.svg";
import Fries from "../assets/icon/emoji/Fries.svg";
import Frog from "../assets/icon/emoji/Frog.svg";
import Ghost from "../assets/icon/emoji/Ghost.svg";
import Guitar from "../assets/icon/emoji/Guitar.svg";
import Hamster from "../assets/icon/emoji/Hamster.svg";
import Heart from "../assets/icon/emoji/Heart.svg";
import Hedgehog from "../assets/icon/emoji/Hedgehog.svg";
import Jewel from "../assets/icon/emoji/Jewel.svg";
import Koala from "../assets/icon/emoji/Koala.svg";
import Lightning from "../assets/icon/emoji/Lightning.svg";
import Lollipop from "../assets/icon/emoji/Lollipop.svg";
import Medal from "../assets/icon/emoji/Medal.svg";
import Monkey from "../assets/icon/emoji/Monkey.svg";
import Moon from "../assets/icon/emoji/Moon.svg";
import Mouse from "../assets/icon/emoji/Mouse.svg";
import NerdFace from "../assets/icon/emoji/NerdFace.svg";
import Owl from "../assets/icon/emoji/Owl.svg";
import Panda from "../assets/icon/emoji/Panda.svg";
import Phone from "../assets/icon/emoji/Phone.svg";
import Pinata from "../assets/icon/emoji/Pinata.svg";
import Plant from "../assets/icon/emoji/Plant.svg";
import Pretzel from "../assets/icon/emoji/Pretzel.svg";
import Rabbit from "../assets/icon/emoji/Rabbit.svg";
import Rainbow from "../assets/icon/emoji/Rainbow.svg";
import Ribbon from "../assets/icon/emoji/Ribbon.svg";
import Rocket from "../assets/icon/emoji/Rocket.svg";
import Slate from "../assets/icon/emoji/Slate.svg";
import SmilingFace from "../assets/icon/emoji/SmilingFace.svg";
import Snow from "../assets/icon/emoji/Snow.svg";
import Star from "../assets/icon/emoji/Star.svg";
import StarFace from "../assets/icon/emoji/StarFace.svg";
import SweetPotato from "../assets/icon/emoji/SweetPotato.svg";
import TeddyBear from "../assets/icon/emoji/TeddyBear.svg";
import Tiger from "../assets/icon/emoji/Tiger.svg";
import Tinkerbell from "../assets/icon/emoji/Tinkerbell.svg";
import Umbrella from "../assets/icon/emoji/Umbrella.svg";
import Unicorn from "../assets/icon/emoji/Unicorn.svg";
import Whale from "../assets/icon/emoji/Whale.svg";
import WhiteHeart from "../assets/icon/emoji/WhiteHeart.svg";
import Wine from "../assets/icon/emoji/Wine.svg";
import Wolf from "../assets/icon/emoji/Wolf.svg";
import Youtube from "../assets/icon/emoji/Youtube.svg";

const IconMapper: Record<string, string> = {
    "Apple": Apple,
    "Bear": Bear,
    "Beer": Beer,
    "Blossom": Blossom,
    "Butterfly": Butterfly,
    "Camera": Camera,
    "Car": Car,
    "Cat": Cat,
    "Cheese": Cheese,
    "Chick": Chick,
    "Chocolate": Chocolate,
    "Clover": Clover,
    "Coffee": Coffee,
    "DevMan": DevMan,
    "DevWoman": DevWoman,
    "Dog": Dog,
    "Dolphin": Dolphin,
    "Donut": Donut,
    "ExcitedFace": ExcitedFace,
    "Fire": Fire,
    "Fox": Fox,
    "Fries": Fries,
    "Frog": Frog,
    "Ghost": Ghost,
    "Guitar": Guitar,
    "Hamster": Hamster,
    "Heart": Heart,
    "Hedgehog": Hedgehog,
    "Jewel": Jewel,
    "Koala": Koala,
    "Lightning": Lightning,
    "Lollipop": Lollipop,
    "Medal": Medal,
    "Monkey": Monkey,
    "Moon": Moon,
    "Mouse": Mouse,
    "NerdFace": NerdFace,
    "Owl": Owl,
    "Panda": Panda,
    "Phone": Phone,
    "Pinata": Pinata,
    "Plant": Plant,
    "Pretzel": Pretzel,
    "Rabbit": Rabbit,
    "Rainbow": Rainbow,
    "Ribbon": Ribbon,
    "Rocket": Rocket,
    "Slate": Slate,
    "SmilingFace": SmilingFace,
    "Snow": Snow,
    "Star": Star,
    "StarFace": StarFace,
    "SweetPotato": SweetPotato,
    "TeddyBear": TeddyBear,
    "Tiger": Tiger,
    "Tinkerbell": Tinkerbell,
    "Umbrella": Umbrella,
    "Unicorn": Unicorn,
    "Whale": Whale,
    "WhiteHeart": WhiteHeart,
    "Wine": Wine,
    "Wolf": Wolf,
    "Youtube": Youtube
};

// 이모지 이름으로 이미지 가져오기
export const getImageByEmoji = (emoji: string): string => {
    return IconMapper[emoji] || Blossom;
};

// 모든 이모지 GET
export const getAllEmojis = (): string[] => Object.keys(IconMapper);
// 모든 이미지 GET
export const getAllImagePaths = (): string[] => Object.values(IconMapper);
// 모든 이미지, 이모지 리스트 GET
export const getAllIcons = (): [string, string][] => Object.entries(IconMapper);

// 랜덤 이모지 GET
export const getRandomEmoji = (): string => {
    const emojis = getAllEmojis();
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
};
export default IconMapper;