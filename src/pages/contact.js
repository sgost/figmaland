import React from "react";
import "../styles/Contact.css";
import img1 from "../data/assets/twitter.svg";
import img2 from "../data/assets/fb.svg";
import img3 from "../data/assets/linkdin.svg";
import img4 from "../data/assets/location.svg";
import img5 from "../data/assets/phone.svg";
import img6 from "../data/assets/mail.svg";
import { graphql, useStaticQuery } from "gatsby";

function Contact(){
    const data = useStaticQuery(graphql`
    query {
      contact: file(relativePath: {eq: "contact.md"}) {
          childMarkdownRemark {
            frontmatter {
              title
              description
              address
              phone
              mail
            }
          }
        } 
       }
  `)
    return(
        <>
        <div id="contact">
            <div id="contact_container">
                <p id="contact_title">{data.contact.childMarkdownRemark.frontmatter.title}</p>
                <p id="contact_desc">{data.contact.childMarkdownRemark.frontmatter.description}</p>
                <div id="contact_container_block">
                    <div id="contact_container_block1">
                        <h1 id="contact_block_title">Contact Us</h1>
                        <div id="contact_container_block_inputs">
                                <input type="text" placeholder="Your Name" id="contact_container_block_inputs1"/>
                                <input type="text" placeholder="Your Email" id="contact_container_block_inputs1"/>
                                <textarea placeholder="Your Message" id="contact_container_block_inputs2"/>
                            <div id="contact_container_block_input_button">
                                <button>Send</button>
                            </div>
                        </div>
                    </div>
                <div id="contact_container_block_side">
                <div id="contact_container_block_side_blocks_main">
                <div id="contact_container_block_side_blocks">
                    <div id="contact_container_block_side_blocks_icons">
                        <img src={img4} alt="img"/>
                    </div>
                    <div id="contact_container_block_side_blocks_matter">
                    <div>
                    <p id="contact_address">{data.contact.childMarkdownRemark.frontmatter.address}</p>
                    </div>
                    </div>
                </div>
                <div id="contact_container_block_side_blocks">
                    <div id="contact_container_block_side_blocks_icons">
                    <img src={img5} alt="img"/>
                    </div>
                    <div id="contact_container_block_side_blocks_matter">
                    <div>
                    <p id="contact_number">{data.contact.childMarkdownRemark.frontmatter.phone}</p>
                    </div>
                    </div>
                </div>
                <div id="contact_container_block_side_blocks">
                    <div id="contact_container_block_side_blocks_icons">
                    <img src={img6} alt="img"/>
                    </div>
                    <div id="contact_container_block_side_blocks_matter">
                    <div>
                    <p id="contact_mail">{data.contact.childMarkdownRemark.frontmatter.mail}</p>
                    </div>
                    </div>
                </div>
                    <div id="contact_container_block_side_icons">
                        <div id="contact_icon">
                            <img src={img1} alt="img"/>
                        </div>
                        <div id="contact_icon">
                            <img src={img2} alt="img"/>
                        </div>
                        <div id="contact_icon">
                            <img src={img3} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </>
    );
};
export default Contact;