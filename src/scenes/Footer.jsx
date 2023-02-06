import SocialMediaIconsBlack from "../components/SocialMediaIconsBlack";

const Footer = () => {
    return (
        <footer className="h-64 bg-red pt-10">
            <div className="w-5/6 mx-auto">
                <SocialMediaIconsBlack />
                <div className="md:flex justify-center md:justify-between text-center ">
                    <p className="font-playfair font-semibold text-2xl text-deep-blue">
                        ANTHONY GUZMÁN
                    </p>
                    <p className="font-playfair text-md text-deep-blue">
                        ©2023 ANTHONY GUZMÁN. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
