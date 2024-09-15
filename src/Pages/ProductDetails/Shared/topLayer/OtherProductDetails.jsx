import { FaRegStar } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { GoGitCompare } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { LuFacebook } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsTelegram } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useState } from "react";

const OtherProductDetails = () => {
    const [countView, setCountView] = useState(10)
    return (
        <div >
            <div className="">
                <div>
                    <h1 className="text-4xl font-semibold">Basic Rib Legging</h1>
                    <div className="flex items-center space-x-4 py-1">
                        <div className="flex items-start space-x-1">
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                        </div>
                        <div>
                            <h1>({ } customer reviews)</h1>
                        </div>
                    </div>
                </div>
                <div className="text-4xl text-orange-500 items-center font-semibold py-3 flex">
                    <h1>
                        <AiOutlineDollar />
                    </h1>
                    <h1>50.00</h1>
                </div>

                <div className="">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                        repellendus animi, mollitia beatae accusamus odit eius sapiente
                        repudiandae culpa quasi alias! Sed excepturi alias molestiae iste,
                        laboriosam sint nostrum eius illo minima explicabo asperiores quod
                        voluptatibus vero aperiam accusamus quisquam consequatur. Adipisci,
                        quaerat amet. Architecto similique exercitationem illo
                        necessitatibus totam laborum cum provident ad iusto corrupti
                        asperiores error, sint accusantium eius distinctio ea facere dolore
                        aut perferendis.
                    </p>
                </div>
                <div className="space-x-2">
                    <button className="px-14 py-1 bg-orange-500 text-white font-semibold rounded-md">
                        Add to cart
                    </button>
                    <button className="px-14 py-1 bg-orange-500 text-white font-semibold rounded-md">
                        Buy now
                    </button>
                </div>
                <div className="my-5 flex items-center justify-between">
                    <div className="flex">
                        <div className="flex items-center space-x-1">
                            <h1>
                                <GoGitCompare />
                            </h1>
                            <h1>Compare</h1>
                        </div>
                        <div className="flex items-center pl-8 space-x-1">
                            <h1>
                                <GoHeart />
                            </h1>
                            <h1>Add to wishlist</h1>
                        </div>
                    </div>

                    <div className="flex items-center ">
                        <h1>Share:</h1>
                        <div className=" flex space-x-2 ml-3">
                            <LuFacebook />
                            <FaXTwitter />
                            <SlSocialLinkedin />
                            <BsTelegram />
                            <FaInstagram />
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-2 m-5 px-3 py-2 bg-slate-200 rounded-lg">
                    <FaRegEye />
                    <h1>{countView}</h1>
                    <p>People Watching this product now!</p>
                </div>
            </div>
        </div>
    );
};

export default OtherProductDetails;