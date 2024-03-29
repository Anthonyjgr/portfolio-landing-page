
const SocialMediaIcons = () => {

   
    return (
        <div className="flex justify-center md:justify-start my-4 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/anthony-guzman-840449135/"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="linkedin-link" src="../assets/icons8-linkedin-white.svg" />
            </a>

            <a
                className="hover:opacity-50 transition duration-500"
                href="https://github.com/anthonyjgr"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="Github-link" src="../assets/icons8-github-white.svg" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.instagram.com/antho.guitar"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="instagram-link" src="../assets/icons8-instagram-white.svg" />
            </a>

          
        </div>
    )
}

export default SocialMediaIcons