import Header from "../components/Header/Header";

const ContactPage = () => {
    return(
        <div>
        <Header/>
          <div>
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>

        <h3>General Enquiries</h3>
        <hr />
        <p>
          <strong>Vivekanand College Main Campus</strong><br />
          [Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]<br />
          India<br />
          Phone: <strong>+91 12345 67890</strong><br />
          Email: <strong>info@vivekanandcollege.edu</strong><br />
          Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST
        </p>

        <h3>Admissions Office</h3>
        <hr />
        <p>
          For all admission-related queries regarding undergraduate or postgraduate programs:<br />
          Phone: +91 98765 43210<br />
          Email: admissions@vivekanandcollege.edu
        </p>

        <h3>Student Support Services</h3>
        <hr />
        <p>
          For current student support, academic advising, or general assistance:<br />
          Phone: +91 87654 32109<br />
          Email: studentsupport@vivekanandcollege.edu
        </p>

        <h3>Find Us on the Map</h3>
        <hr />
        <p>[You can embed a Google Map here later using an iframe or a React map library.]<br />View on Google Maps</p>

        <h3>Send Us a Message</h3>
        <hr />
        <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
      </div>
    
  );



        </div>
    )
}
export default ContactPage;