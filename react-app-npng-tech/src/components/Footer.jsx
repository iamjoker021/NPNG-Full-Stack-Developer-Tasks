import Equiry from "./Enquiry";
import NavList from "./NavList";

const Footer = () => {
    return (
        <footer id="contact" class="scroll-margin">
        <h2 className="section-header text-center">Contact Us</h2>
        <Equiry />
        <div class="footer-section">
            <div class="contact">
                <div class="brand-logo">
                    <a href=""><img class="logo" src="https://npngtech.in/assets/large-DIFPjkXK.png" alt="npng-logo" /><h1 class="brand-name">NPNG Tech</h1></a>
                </div>
                <p class="text-center">Have an idea or an epic project in mind? Talk to us. Let's work together and make something great. Drop us a line at</p>
                <ul>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Twitter</a></li>
                </ul>
            </div>
            <div class="quick-links text-center">
                <h4 class="section-header">Qucik Links</h4>
                <NavList />
            </div>
            <div class="address text-center">
                <h4 class="section-header">Contact Us</h4>
                <table>
                    <tr>
                        <td>Email:</td>
                        <td>abc@example.com</td>
                    </tr>
                    <tr>
                        <td>Phone No:</td>
                        <td>+91 9876543210</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td>No 18, 2nd St, Balakrishnapuram, Adambakkam, Ramapuram, Chennai, Tamil Nadu 600088</td>
                    </tr>
                </table>
            </div>
        </div>
        <hr />
        <p class="text-center copywrite">© Made by Joker021. All rights reserved.</p>
        </footer>
    )
}

export default Footer;