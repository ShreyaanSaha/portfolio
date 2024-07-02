import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <p className="font-playfair font-semibold text-2xl text-white">
          SHREYAAN SAHA
        </p>
      </div>
    </footer>
  );
};

export default Footer;