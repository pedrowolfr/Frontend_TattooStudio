import { FaInstagram, FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";

export default function Socials() {
  return (
    <ul className="flex items-center justify-center gap-x-[30px]">
      <li>
        <a href="http://www.facebook.com/?locale=es_ES/">
          <GrFacebookOption />
        </a>
      </li>
      <li>
        <a href="http://www.instagram.com/consent/?flow=confirmaccounts&source=pft_confirmaccounts&surface=instagram_web/">
          <FaInstagram />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/">
          <FaTwitter />
        </a>
      </li>
    </ul>
  );
}
