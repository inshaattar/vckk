import Header from "../components/Header/Header";

const CoursesPage = () => {
    return(
        <div>
            <Header/>
            <div>
        <h2>Our Academic Programs</h2>
        <p>
          Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.
        </p>

        <h3>Undergraduate Programs (UG)</h3>
        <hr />
        <ul>
          <li><strong>Bachelor of Science (B.Sc.)</strong></li>
          <li>Computer Science (3 years)</li>
          <li>Information Technology (3 years)</li>
          <li>Biotechnology (3 years)</li>
          <li><strong>Bachelor of Commerce (B.Com)</strong></li>
          <li>Accounting & Finance (3 years)</li>
          <li>Banking & Insurance (3 years)</li>
          <li><strong>Bachelor of Arts (B.A.)</strong></li>
          <li>English Literature (3 years)</li>
          <li>Psychology (3 years)</li>
        </ul>

         <h3>Postgraduate Programs (PG)</h3>
        <hr />
        <ul>
          <li><strong>Master of Science (M.Sc.)</strong></li>
          <li>Computer Science (2 years)</li>
          <li>Information Technology (2 years)</li>
          <li><strong>Master of Commerce (M.Com)</strong> (2 years)</li>
          <li><strong>Master of Arts (M.A.)</strong> (2 years)</li>
        </ul>

        <h3>Specialized & Vocational Courses</h3>
        <hr />
        <p>
          In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.
        </p>

        <p>Explore detailed syllabi and admission criteria on our Admissions page.</p>
        <button onClick={() => alert('Inquire About Courses clicked!')}>Inquire About Courses</button>
      </div>



        </div>
    )
}
export default CoursesPage;