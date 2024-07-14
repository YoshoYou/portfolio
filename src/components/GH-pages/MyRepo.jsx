import React from 'react';
import './MyRepo.css';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const MyRepo = () => {
  return (
    <section>
      <div className="repo-container">
        <h5>My Repository</h5>
        <p>check out my github pages to see my project live</p>
        <div className="repo-content">
          <a href="https://yoshoyou.github.io/chat-gpt-app/"  target='_blank'>
          <div className="repo">
            
              <h6>Chat GPT App</h6>
              <p>React JS,HTML,CSS</p>
            </div>
          </a>
            <a href="https://yoshoyou.github.io/medical-website/"  target='_blank'>
          <div className="repo">
              <h6>Medical Website</h6>
              <p>JavaScript,HTML,CSS</p>
          
            </div>
          </a>
          <a href="https://yoshoyou.github.io/Genome/"  target='_blank'>

          <div className="repo">
              <h6>Genome</h6>
              <p>JavaScript,HTML,CSS</p>
          
            </div>
          </a>
           <a href="https://yoshoyou.github.io/Template-one/" target='_blank'>
          <div className="repo">
          
              <h6>Template One</h6>
              <p>HTML,CSS</p>
          
            </div>
          </a>
          <a href="https://yoshoyou.github.io/Template-two/"  target='_blank'>
          <div className="repo">
          
              <h6>Template two</h6>
              <p>HTML,CSS</p>
          
            </div>
          </a>
          <a href="https://yoshoyou.github.io/Template-three/" target='_blank'>
          <div className="repo">
            
              <h6>Template three</h6>
              <p>HTML,CSS</p>
          
            </div>
          </a>
          <a href="https://yoshoyou.github.io/pictures-gallery/"  target='_blank'>
          <div className="repo">
            
              <h6>Picture Gallery-1</h6>
              <p>JavaScript,HTML,CSS</p>
            
            </div>
          </a>
          <a href="https://yoshoyou.github.io/pictures-gallery-2/"  target='_blank'>
          <div className="repo">
          
              <h6>Picture Gallery-2</h6>
              <p>JavaScript,HTML,CSS</p>
          
            </div>
            </a>
        </div>
      </div>
    </section>
  )
}

export default MyRepo