
const SocialMediaIconsBlack = () => {

   
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="linkedin-link" src="../assets/linkedin-black.png" />
            </a>

            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="facebook-link" src="../assets/facebook-black.png" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="instagram-link" src="../assets/instagram-black.png" />
            </a>
            {/* <a
                className="hover:opacity-50 transition duration-500"
                href="home"
                rel="noreferrer"
            >
                <img alt="instagram-link" src="../assets/home.png" />
            </a> */}
          
        </div>
    )
}

export default SocialMediaIconsBlack