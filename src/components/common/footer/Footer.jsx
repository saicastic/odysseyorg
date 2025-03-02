import footerLinks from "@/data/footer";
import Image from "next/image";
import Link from "next/link";
import { PiInstagramLogoBold } from "react-icons/pi";
import { IoLogoFacebook } from "react-icons/io";
import { PiXLogoFill } from "react-icons/pi";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className=" absolute h-[30rem] w-full bottom-0 p-2">
      <div className="bg-yellow-400 w-full h-full rounded-md flex flex-col  p-2 relative overflow-hidden">
        <div className="footerchakra hidden  w-80 aspect-[1/1] top-[50%] translate-y-[-50%] left-0 translate-x-[-50%] md:block absolute ">
          <Image src="/img/chakratwo.png" fill={true} alt="chakrafooter"/>
        </div>
        {/* heading  */}
        <div className="text-center">
          <h1>ODYSSEY</h1>
        </div>

        {/* bottom part  */}
        <div className="w-full flex flex-col gap-6 text-center">
          {/* links  */}
          <div className="w-full flex flex-col gap-2">
            {footerLinks.map((el) => (
              <div key={el.id} className="w-full  flex flex-col gap-1">
                <div className="text text-[14px]">
                  <h1>{el.title}</h1>
                </div>

                <div className="w-full flex gap-3 justify-center text-xs">
                  {el.links.map((link) => (
                    <Link key={link.id} href={link.linkPath}>
                      {link.linkTitle}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="w-full  flex flex-col gap-1">
              <div className="text text-[14px]">
                <h1>Event Leadership</h1>
              </div>
              <div className="text-xs flex flex-col gap-2">
                <div>
                  <div>
                    <h1 className="font-bold">Event Coordinators, Odyssey 2025</h1>
                  </div>
                  <div>
                    <p>Dr. Parul Mishra [ASL] - +91 9116997632</p>
                    <p>Mr. Sachin Banshal [ASET] - +91 8440015696</p>
                  </div>
                </div>
                <div>
                  <div className="font-bold">
                    <h1>Student Management, Odyssey 2025</h1>
                  </div>
                  <div>
                    <p>Mr. Dhruv Jain - +91 7727868651</p>
                    <p>Ms. Khushi Sood - +91 7838681245</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full  flex flex-col gap-1">
              <div><h1>Queries</h1></div>
              <div className="flex flex-col gap-1 text-xs">
                <div>
                  <p>For Queries, Email us at - support.odyssey@gmail.com</p>
                </div>
                <div>
                  <p>Ms. Aru Paliwal [Registration] - +91 8000962014</p>
                  <p>Mr. Suraj S. Tomar [Registration] - +91 9548568973</p>
                  <p>Ms. Aru Paliwal [Website] - +91 8259044080</p>
                </div>
              </div>
            </div>

            <div className="w-full  flex flex-col gap-1">
              <div>
                <h1>Connect with us</h1>
              </div>
              <div className="flex justify-center w-full gap-3">
                <div className="w-[1.5rem] aspect-[1/1]"><PiInstagramLogoBold/></div>
                <div className="w-[1.5rem] aspect-[1/1]"><IoLogoFacebook /></div>
                <div className="w-[1.5rem] aspect-[1/1]"><PiXLogoFill /></div>
                <div className="w-[1.5rem] aspect-[1/1]"><RxLinkedinLogo /></div>
                <div className="w-[1.5rem] aspect-[1/1]"><FaYoutube /></div>
              
              </div>

            </div>
          </div>

          {/* copyright  */}
          <div className="w-full flex justify-between text-[0.40rem] border-t-[0.5px] border-black pt-1">
            <div>© Odyssey 2025. All Rights Reserved.</div>
            <div>Designed and Developed by Website Team - Odyssey 2025</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
