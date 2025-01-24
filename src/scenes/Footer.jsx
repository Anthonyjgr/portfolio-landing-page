import SocialMediaIconsBlack from "../components/SocialMediaIconsBlack";

const Footer = () => {
    return (
        <footer className="h-50 bg-[#cdcdcd]  ">
            <div className="w-5/6 mx-auto py-6 max-w-[1440px]">
                <SocialMediaIconsBlack />
                <div className="md:flex justify-center md:justify-between text-center ">
                    <p className="font-opensans font-semibold text-2xl text-deep-blue">
                        ANTHONY GUZMÁN
                    </p>
                    <p className="font-opensans text-md text-deep-blue">
                        ©2023 ANTHONY GUZMÁN & GRACIA DIGITAL. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
