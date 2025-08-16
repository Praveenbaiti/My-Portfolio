import React from 'react'

const Internship = () => {
  return (
    <div>
        <section id="internship">
            <h2>Internship Experience</h2>
            
            <div class="internship-card">
                <h3>Web Developer Intern</h3>
                <p><strong>Company:</strong> Vervenest Technologies Private Limited</p>
                <p><strong>Duration:</strong>12 May 2025 – 30 June 2025</p>
                <p><strong>Technologies Used:</strong> PHP (CodeIgniter Framework), MySQL, HTML, CSS, Bootstrap, JavaScript</p>
                
                <h4>Project: Mail Functionality Web Application</h4>
                <p>
                Developed a <strong>Mail Functionality web application</strong> using the 
                <strong>CodeIgniter framework</strong>.  
                The project includes <strong>Inbox, Sent, Draft, Starred, Trash, and View Message</strong> features 
                with user authentication and role management.  
                Implemented MVC architecture for clean structure, CRUD operations with MySQL, 
                and responsive UI using Bootstrap.
                </p>
                
                <p><strong>Key Learnings:</strong> Gained strong experience in CodeIgniter MVC structure, 
                PHP-MySQL integration, and building a scalable web application with real-world functionalities.
                </p>

                <a href="https://github.com/Praveenbaiti/mail-functionality" 
                target="_blank" 
                class="btn btn-primary">
                🔗 View Project
                </a>
            </div>
        </section>

    </div>
  )
}

export default Internship